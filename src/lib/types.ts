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

// TODO: Transform to const
export enum StatusFilter {
	all,
	seen,
	watch,
}

// TODO: Transform to const
export enum ResourceTypeFilter {
	"all" = -1,
	"film" = 0,
	"serial" = 1,
}
