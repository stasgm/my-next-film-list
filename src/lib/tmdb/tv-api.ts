import { api } from "@/lib/tmdb/fetcher";
import { TvDetailsRequestParams, TvShowDetails } from "@/lib/tmdb/types";

const detail = <T>({ id, append }: TvDetailsRequestParams) =>
	api.fetcher<TvShowDetails & T>({
		endpoint: `tv/${id}`,
		params: {
			append_to_response: append,
		},
	});

export const tvApi = {
	detail,
	// credits,
	// recommendations,
	// similar,
	// images,
	// videos,
	// reviews,
	// providers,
};
