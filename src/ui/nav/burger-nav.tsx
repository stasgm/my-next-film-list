"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { Fragment, useState, useEffect, useRef } from "react";

import { privatLinks, publicLinks } from "@/data/navigation";

export default function BurgerNav() {
	const { user, isLoading } = useUser();
	const [navShow, setNavShow] = useState(false);
	const navRef = useRef<HTMLInputElement>(null);

	const onToggleNav = () => {
		setNavShow((status) => {
			if (navRef.current) {
				if (status) {
					enableBodyScroll(navRef.current);
				} else {
					// Prevent scrolling
					disableBodyScroll(navRef.current);
				}
			}
			return !status;
		});
	};

	useEffect(() => {
		return clearAllBodyScrollLocks;
	});

	return (
		<>
			<button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="hover:text-primary-500 dark:hover:text-primary-400 h-8 w-8 text-gray-900 dark:text-gray-100"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<Transition appear show={navShow} as={Fragment} unmount={false}>
				<Dialog as="div" onClose={onToggleNav} unmount={false}>
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						unmount={false}
					>
						<div className="z-60 fixed inset-0 bg-black/50" />
					</TransitionChild>
					<TransitionChild
						as={Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="translate-x-full opacity-0"
						enterTo="translate-x-0 opacity-95"
						leave="transition ease-in duration-200 transform"
						leaveFrom="translate-x-0 opacity-95"
						leaveTo="translate-x-full opacity-0"
						unmount={false}
					>
						<DialogPanel className="z-70 fixed left-0 top-0 h-full w-full bg-white opacity-95 duration-300 dark:bg-gray-950 dark:opacity-[0.98]">
							<nav
								ref={navRef}
								className="mt-8 flex h-full basis-0 flex-col items-start overflow-y-auto pl-12 pt-2 text-left"
							>
								{(!user ? publicLinks : privatLinks).map((link) => {
									if (link.path.includes('/api/auth')) return (
										<a
											key={link.text}
											href={link.path}
											className="hover:text-primary-500 dark:hover:text-primary-400 mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 dark:text-gray-100"
											onClick={onToggleNav}
										>
											{link.text}
										</a>
									)

									return (<Link
										key={link.text}
										href={link.path}
										className="hover:text-primary-500 dark:hover:text-primary-400 mb-4 py-2 pr-4 text-2xl font-bold tracking-widest text-gray-900 outline outline-0 dark:text-gray-100"
										onClick={onToggleNav}
									>
										{link.text}
									</Link>)
								})}
							</nav>
							<button
								className="z-80 hover:text-primary-500 dark:hover:text-primary-400 fixed right-4 top-7 h-16 w-16 p-4 text-gray-900 dark:text-gray-100"
								aria-label="Toggle Menu"
								onClick={onToggleNav}
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</DialogPanel>
					</TransitionChild>
				</Dialog>
			</Transition>
		</>
	);
}
