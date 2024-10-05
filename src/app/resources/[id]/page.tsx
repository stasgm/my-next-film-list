import prisma from "@/lib/prisma";
import { movieApi } from "@/lib/tmdb/movie-api";
import { tvApi } from "@/lib/tmdb/tv-api";
import { TmdbError } from "@/lib/tmdb/types";
import { MediaPoster } from "@/ui/media-poster";
import { Resource } from "@prisma/client";

async function fetchResource(id: string): Promise<Resource | undefined> {
	try {
		const resource = await prisma.resource.findFirst({ where: { id } });

		if (!resource) {
			throw new Error("Resource not found");
		}

		const tmdbId = resource.tmdbId;

		if (!tmdbId) {
			return resource;
		}

		// to update data every N day
		if (
			resource.tmdbUpdateDate &&
			new Date().getTime() - resource.tmdbUpdateDate.getTime() <= 1000 * 60 * 60 * 24 * 1
		) {
			return resource;
		}

		const details = await (async () => {
			if (resource.type === "FILM") {
				const movieDetails = await movieApi.detail<TmdbError>({ id: tmdbId });

				if (movieDetails.success !== false) {
					return {
						posterUrl: movieDetails.poster_path,
						backdropUrl: movieDetails.backdrop_path,
						genres: movieDetails.genres.map((genre) => genre.name),
					};
				}
			}

			if (resource.type === "SERIES") {
				const tvDetails = await tvApi.detail<TmdbError>({ id: tmdbId });

				if (tvDetails.success !== false) {
					return {
						posterUrl: tvDetails.poster_path,
						backdropUrl: tvDetails.backdrop_path,
						genres: tvDetails.genres.map((genre) => genre.name),
					};
				}
			}
		})();

		if (!details) {
			return resource;
		}

		const updatedResource = await prisma.resource.update({
			data: {
				posterUrl: details.posterUrl,
				backdropUrl: details.backdropUrl,
				genres: details.genres,
				tmdbUpdateDate: new Date(),
			},
			where: { id },
		});

		return updatedResource;
	} catch {
		return undefined;
	}
}

export default async function ResourcePage({ params }: { params: { id: string } }) {
	const resource = await fetchResource(params.id);

	return (
		<section className="flex items-center justify-center">
			<div className="w-4/5 rounded-md bg-gray-200 p-4">
				{!resource && (
					<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
						Resource not found
					</span>
				)}
				{resource && (
					<div className="flex space-x-2">
						<div className="w-auto">
							<MediaPoster
								alt={resource.title}
								image={resource.posterUrl}
								size={"w342"}
								className="object-contain"
							/>
						</div>
						<div className="flex w-full flex-col rounded-md bg-gray-400 p-2">
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
