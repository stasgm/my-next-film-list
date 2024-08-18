import { Resource, ResourceType } from "@prisma/client";
import { FilmIcon, TvIcon as SerialIcon } from "@heroicons/react/24/outline";

import prisma from '@/lib/prisma';
import Table from "@/ui/table";

const films: Resource[] = [
	{
		id: "1",
		title: "Star Wars",
		rating: 8,
		type: "FILM",
		url: "https://www.starwars.com",
		genres: ["Sci-Fi", "Action", "Adventure"],
		seen: false,
		createdAt: new Date("2022-01-01"),
		updatedAt: new Date("2020-01-01"),
		schema: 1,
		details: null,
	},
	{
		id: "2",
		title: "Stranger Things",
		rating: 9,
		type: "SERIES",
		url: "https://www.strangerthings.net",
		genres: ["Sci-Fi", "Drama", "Mystery"],
		seen: true,
		createdAt: new Date("2022-01-01"),
		updatedAt: new Date("2020-01-01"),
		schema: 1,
		details: null,
	},
	{
		id: "3",
		title: "Friday the 13th",
		rating: 8.5,
		type: "SERIES",
		url: "https://www.fridaythe13th.com",
		genres: ["Horror", "Thriller"],
		seen: true,
		createdAt: new Date("2022-01-01"),
		updatedAt: new Date("2020-01-01"),
		schema: 1,
		details: null,
	},
	{
		id: "4",
		title: "The Matrix",
		rating: 9,
		type: "FILM",
		url: "https://www.thematrix.com",
		genres: ["Sci-Fi", "Action"],
		seen: false,
		createdAt: new Date("2023-01-01"),
		updatedAt: new Date("2023-01-01"),
		schema: 1,
		details: null,
	},
	{
		id: "5",
		title: "Breaking Bad",
		rating: 9.5,
		type: "SERIES",
		url: "https://www.breakingbad.com",
		genres: ["Crime", "Drama"],
		seen: true,
		createdAt: new Date("2022-01-01"),
		updatedAt: new Date("2020-01-01"),
		schema: 1,
		details: null,
	},
];

const Title = (value: string, row: Resource) => {
	const isFilm = row.type === ResourceType.FILM;

	return (
		<span className="inline-flex cursor-pointer items-center text-base hover:underline">
			<span>
				{isFilm ? (
					<FilmIcon className="tv:h-6 tv:w-6 tv:mr-6 mr-2 inline h-5 w-5" />
				) : (
					<SerialIcon className="tv:h-6 tv:w-6 tv:mr-6 mr-2 inline h-5 w-5" />
				)}
			</span>
			<span>{value}</span>
		</span>
	);
};

async function fetchResources() {
	const resources = await prisma.resource.findMany();
	return resources;
}

export default async function FilmList() {
	const columns = [
		{
			headClassName: "sm:w-2/6 w-5/6",
			key: "title",
			render: Title,
			title: "Title",
		},
		{
			headClassName: "sm:w-3/6 hidden sm:table-cell",
			key: "url",
			// render: URLcomponent,
			title: "URL",
		},
		{
			headClassName: "sm:w-1/6 w-1/6 text-center",
			key: "id",
			// render: Actions,
			title: "Actions",
		},
	];

	const resources = await fetchResources();

	return (
		<>
			<span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
				{`${resources.length} records in the base`}
			</span>
			<div className="overflow-hidden rounded-md border border-gray-200 dark:border-gray-800">
				<Table columns={columns} dataRows={resources} rowKey="id" />
			</div>
		</>
	);
}
