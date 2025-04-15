"use client";
import React from "react";
import Link from "next/link";

function error() {
	return (
		<div className="flex h-10 items-center justify-center">
			<h1>Something Went Wrong. </h1>
			<Link href="/">Go home</Link>
		</div>
	);
}

export default error;
