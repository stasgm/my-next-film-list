export const Nav = () => {
	return (
		<header className="border-b py-4">
			<div className="sm:items-centerm mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
				<div className="sm:mr-auto">
					<span>Nav menu</span>
				</div>

				<div className="flex items-center justify-start gap-x-6">
					<span>Search panel</span>
					<span>Cart</span>
				</div>
			</div>
		</header>
	);
};
