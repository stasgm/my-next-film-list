import Link from "next/link";

function Movie404() {
	return (
		<div className="flex h-10 items-center justify-center">
			<h1>We could not find the resource you looking for!</h1>
			<Link href="/">Go home</Link>
		</div>
	);
}

export default Movie404;
