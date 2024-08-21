"use client";

import ActionButton from "@/ui/action-button";

export default function Actions(value: any, row: any, index: number) {
	const handleUpdatFilmeSeenStatus = async (id: string, seen: boolean) => {
		// await prisma.resource.update({
		//   where: {
		//     id,
		//   },
		//   data: {
		//     seen,
		//   },
		// });
	};

	const handleEditFilm = (id: string) => {};

	const handleDeleteFilm = (id: string) => {};

	const handleFavouriteFilm = async (id: string, favourite: boolean) => {
		// await prisma.resource.update({
		//   where: {
		//     id,
		//   },
		//   data: {
		//     favourite,
		//   },
		// });
	};

	return (
		<div className="m-1 flex justify-evenly">
			<ActionButton onClick={() => handleUpdatFilmeSeenStatus(row.id, !row.seen)}>
				{row.seen ? (
					<>
						<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						<path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
					</>
				) : (
					<path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
				)}
			</ActionButton>
			<ActionButton onClick={() => handleEditFilm(row.id)}>
				<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
			</ActionButton>
			<ActionButton onClick={() => handleDeleteFilm(row.id)}>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
				></path>
			</ActionButton>
		</div>
	);
}
