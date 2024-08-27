import { api } from "@/lib/tmdb/fetcher";
import { MovieDetails, MovieDetailsRequestParams } from "@/lib/tmdb/types";

const detail = <T>({ id, append }: MovieDetailsRequestParams) =>
	api.fetcher<MovieDetails & T>({
		endpoint: `movie/${id}`,
		params: {
			append_to_response: append,
		},
	});

export const movieApi = {
	detail,
	// credits,
	// recommendations,
	// similar,
	// images,
	// videos,
	// reviews,
	// providers,
};
