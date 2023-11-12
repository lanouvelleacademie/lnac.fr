import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import useScroll from "@/lib/useScroll";
import PlatonHalf from "@/public/images/platonHalfRework.svg";
import TempleLogo from "@/public/images/temple-lnac-logo.svg";
import { NavMenuDiscord, NavigationLinks } from "@/lib/navigation.js";

type ClassName = string | boolean;


function classNames(...classes: ClassName[]): string {
	return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
	const scrolled = useScroll(50);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div
				className={`fixed top-0 w-full ${
					scrolled ? "border-b border-gray-200  backdrop-blur-xl" : "bg-white/0"
				} z-30 transition-all ${mobileMenuOpen ? "bg-white" : ""}`}
			>
				<div className="container mx-auto flex h-16 w-full items-center justify-between px-4 xs:px-0">
					<Link
						className="flex items-center align-middle text-xl font-bold"
						href="/"
					>
						<Image
							src={TempleLogo}
							className="h-7 w-8"
							alt="LNAC Temple logo"
						/>
						<p className="mx-2">La Nouvelle Académie</p>
					</Link>
					<div>
						<button
							onClick={() => setMobileMenuOpen(true)}
							className="flex flex-row items-center gap-2 rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
						>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							Menu
						</button>
					</div>
				</div>
			</div>
			<Dialog
				as="div"
				className=""
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link
							className="flex items-center align-middle text-xl font-bold"
							href="/"
						>
							<Image
								src={TempleLogo}
								className="h-7 w-8"
								alt="LNAC Temple logo"
							/>
							<p className="mx-2">La Nouvelle Académie</p>
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
												Discord
												<ChevronDownIcon
													className={classNames(
														open ? "rotate-180" : "",
														"h-5 w-5 flex-none",
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{[...NavMenuDiscord].map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								{NavigationLinks.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="absolute bottom-0 flex w-full flex-row items-center justify-between py-4">
								{/* <a
											href="#"
											className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											Log in
										</a> */}
								<p className="text-sm"> © 2023 La Nouvelle Académie</p>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</>
	);
}
