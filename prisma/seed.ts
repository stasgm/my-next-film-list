import { PrismaClient, Prisma } from "@prisma/client";
import { FilmDetails, SeriesDetails } from "../src/lib/types";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
	{
		name: "Stas",
		email: "stas@email.com",
		role: "ADMIN",
	},
	{
		name: "Olya",
		email: "olya@email.com",
	},
	{
		name: "Nox",
		email: "nox@mewmail.com",
	},
];

const filmsData: Prisma.ResourceCreateInput[] = [
	{
		title: "Star Wars",
		rating: 10,
		type: "FILM",
		url: "http://www.starwars.com",
		genres: ["Sci-Fi", "Action", "Drama", "Fantasy", "Adventure"],
		details: {
			durationMinutes: 150,
			releaseYear: 2000,
		} as FilmDetails,
		seen: true,
		favourite: true,
	},
	{
		title: "Mandalorian",
		rating: 4,
		type: "SERIES",
		tmdbId: 82856,
		url: "http://mandalorian.com",
		genres: ["Sci-Fi", "Action"],
		details: {
			episodesTotal: 50,
			seasonsTotal: 4,
			releaseYears: [2000, 2001, 2002, 2003],
		} as SeriesDetails,
		seasons: {
			createMany: {
				data: [
					{
						number: 1,
						episodesTotal: 5,
						episodes: [
							{
								number: 1,
								title: "Episode 1",
								rating: 7,
								durationMinutes: 55,
								releaseDate: new Date("2020-01-01"),
							},
							{
								number: 2,
								title: "Episode 2",
								rating: 8,
								durationMinutes: 52,
								releaseDate: new Date("2020-01-10"),
							},
							{
								number: 3,
								title: "Episode 3",
								rating: 5,
								durationMinutes: 50,
								releaseDate: new Date("2020-01-14"),
							},
							{
								number: 4,
								title: "Episode 4",
								rating: 6,
								durationMinutes: 45,
								releaseDate: new Date("2020-01-21"),
							},
							{
								number: 5,
								title: "Episode 5",
								rating: 8,
								durationMinutes: 56,
								releaseDate: new Date("2020-01-29"),
							},
						] as Prisma.EpisodeCreateInput[],
					},
					{
						number: 2,
						episodesTotal: 3,
						episodes: [
							{
								number: 1,
								title: "Episode 6",
								rating: 4,
								durationMinutes: 51,
								releaseDate: new Date("2021-03-01"),
							},
							{
								number: 2,
								title: "Episode 7",
								rating: 5,
								durationMinutes: 55,
								releaseDate: new Date("2021-03-10"),
							},
							{
								number: 3,
								title: "Episode 8",
								rating: 7,
								durationMinutes: 53,
								releaseDate: new Date("2021-03-14"),
							},
						] as Prisma.EpisodeCreateInput[],
					},
				],
			},
		},
	},
	{
		title: "Stranger Things",
		rating: 9,
		type: "SERIES",
		tmdbId: 66732,
		favourite: true,
		url: "https://www.strangerthings.net",
		genres: ["Sci-Fi", "Drama", "Mystery"],
		seen: true,
		createdAt: new Date("2022-01-01"),
		updatedAt: new Date("2020-01-01"),
		schema: 1,
		details: {
			episodesTotal: 30,
			seasonsTotal: 4,
			releaseYears: [2018, 2019, 2020, 2023],
		} as SeriesDetails,
	},
	{
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
		favourite: true,
	},
	{
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

async function main() {
	console.log(`Start seeding ...`);

	console.log(`== Removing old data == `);

	await prisma.user.deleteMany();
	await prisma.season.deleteMany();
	await prisma.resource.deleteMany();

	console.log(`== Users == `);

	for (const u of userData) {
		const user = await prisma.user.create({
			data: u,
		});
		console.log(`  Created user with id: ${user.id}`);
	}

	console.log(`== Resources == `);

	for (const f of filmsData) {
		const film = await prisma.resource.create({
			data: f,
		});
		console.log(`  Created resource with id: ${film.id}`);
	}

	console.log(`Seeding finished.`);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
