export type FilmDetails = {
	durationMinutes: number;
	releaseYear: number;
};

export type SeriesDetails = {
	releaseYears: number[];
	seasonsTotal: number;
	episodesTotal: number;
};

export type ResourceDetails = FilmDetails | SeriesDetails;
