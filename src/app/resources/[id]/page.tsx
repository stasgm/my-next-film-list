import prisma from "@/lib/prisma";
import { movieApi } from "@/lib/tmdb/movie-api";
import { tvApi } from "@/lib/tmdb/tv-api";
import { MovieDetails, TmdbError, TvShowDetails } from "@/lib/tmdb/types";
import { MediaPoster } from "@/ui/media-poster";
import { Resource } from "@prisma/client";

async function fetchResource(id: string): Promise<Resource & { movieDetails?: MovieDetails; tvDetails?: TvShowDetails } | undefined> {
	try {
		const resource = await prisma.resource.findFirst({ where: { id } });

		if (!resource) {
			throw new Error("Resource not found");
		}

		if (!resource.tmdbId) {
			return resource
		}

		if (resource.type === "FILM") {
			const movieDetails = await movieApi.detail<TmdbError>({ id: resource.tmdbId })

			if (movieDetails.success !== false) {
				return { ...resource, movieDetails };
			}
		}

		if (resource.type === "SERIES") {
			const tvDetails = await tvApi.detail<TmdbError>({ id: resource.tmdbId })

			if (tvDetails.success !== false) {
				return { ...resource, tvDetails };
			}
		}


		return resource


	} catch {
		return undefined;
	}
}

export default async function ResourcePage({ params }: { params: { id: string } }) {
	const resource = await fetchResource(params.id);

	return (
		<section className="flex justify-center items-center">
			<div className="w-4/5 bg-gray-200 p-4 rounded-md">
				{!resource && (
					<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
						Resource not found
					</span>
				)}
				{resource && (
					<div className="flex space-x-2">
						<div className="w-auto">
							<MediaPoster alt={resource.title} image={resource.tvDetails?.poster_path ?? resource.movieDetails?.poster_path} size={"w185"} />
						</div>
						<div className="w-full bg-gray-400 p-2 rounded-md flex flex-col">
							<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
								Name: {resource.title}
							</span>
							<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
								Generes: {resource.genres.join(", ")}
							</span>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
