"use client";

import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { FilmIcon, TvIcon as SerialIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Resource } from "@prisma/client";

const columnHelper = createColumnHelper<Resource>();

export const shortColumns: ColumnDef<Resource, any>[] = [
	columnHelper.accessor("title", {
		id: "title",
		cell: (info) => (
			<span className="inline-flex cursor-pointer items-center text-base hover:underline">
				<span>
					{info.row.original.type === "FILM" ? (
						<FilmIcon className="tv:h-6 tv:w-6 tv:mr-6 mr-2 inline h-5 w-5" />
					) : (
						<SerialIcon className="tv:h-6 tv:w-6 tv:mr-6 mr-2 inline h-5 w-5" />
					)}
				</span>
				<span>{info.getValue()}</span>
			</span>
		),
	}),
	{
		accessorKey: "url",
		header: "URL",
	},
	columnHelper.accessor("seen", {
		id: "seen",
		cell: (info) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className="size-6"
			>
				{info.getValue() && (
					<>
						<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
						<path
							fillRule="evenodd"
							d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
							clipRule="evenodd"
						/>
					</>
				)}
			</svg>
		),
	}),
	columnHelper.accessor("rating", {
		id: "rating",
	}),
];
