export type Image = {
	aspect_ratio: number;
	file_path: string;
	height: number;
	iso_639_1: string;
	vote_average: number;
	vote_count: number;
	width: number;
};

export type GetImagesResponse = {
	id: number;
	backdrops: Image[];
	logos: Image[];
	posters: Image[];
	profiles: Image[];
};

export type ListResponse<T> = {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
};

export type WithImages = {
	images: {
		posters: Image[];
		backdrops: Image[];
		logos: Image[];
		profiles: Image[];
	};
};

// export type WithVideos = {
// 	videos: {
// 		results: Video[];
// 	};
// };

// export type WithCredits = {
// 	credits: {
// 		cast: Cast[];
// 		crew: Crew[];
// 	};
// };

type Genre = {
	id: number;
	name: string;
};

export type GetGenresResponse = {
	genres: Genre[];
};

export type MovieDetails = {
	adult: boolean;
	backdrop_path: string;
	// belongs_to_collection?: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path?: string;
	// production_companies: ProductionCompany[];
	// production_countries: ProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	// spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type Movie = {
	id: number;
	poster_path: string;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: number[];
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path?: string;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
};

export type MovieDetailsRequestParams = {
	id: string | number;
	append?: string;
};

export type MediaType = "tv" | "movie" | "person";
export type WithMediaType<T, K extends MediaType> = T & {
	media_type: K;
};

export type MovieWithMediaType = WithMediaType<Movie, "movie">;

export type TvShowDetails = {
	backdrop_path: string;
	// created_by: CreatedBy[]
	episode_run_time: number[];
	first_air_date: string;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	// last_episode_to_air: LastEpisodeToAir
	name: string;
	// next_episode_to_air?: NextEpisodeToAir
	// networks: Network[]
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	// production_companies: ProductionCompany[]
	// production_countries: ProductionCountry[]
	// seasons: Season[]
	// spoken_languages: SpokenLanguage[]
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
};

export type TvDetailsRequestParams = {
	id: string | number;
	append?: string;
};

export type TmdbError = {
	status_code: number;
	status_message: string;
	success: boolean;
};
