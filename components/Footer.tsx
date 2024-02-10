import Image from "next/image";
import Logo from "../public/images/lnac-logo.svg";
import PlatonHalf from "../public/images/platon-half.svg";
import { FooterLinks, Links } from "@/lib/navigation.js";

export default function Footer() {
	return (
		<footer className="m-4">
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
					<nav className="-mx-5 -my-2 flex flex-wrap justify-center">
						{FooterLinks.map((link) => (
							<div className="px-5 py-2" key={link.name}>
								<a
									href={link.href}
									className="text-base leading-6 text-gray-600 hover:text-gray-900"
								>
									{link.name}
								</a>
							</div>
						))}
					</nav>
					<div className="mt-8 flex justify-center space-x-6">
						<a href={Links.Twitter} className="text-gray-400 hover:text-gray-600">
							<span className="sr-only">Twitter</span>
							<svg
								className="h-6 w-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
							</svg>
						</a>
						<a href={Links.GitHub} className="text-gray-400 hover:text-gray-600">
							<span className="sr-only">GitHub</span>
							<svg
								className="h-6 w-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									fillRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
						<a href={Links.DiscordInvite} className="text-gray-400 hover:text-gray-600">
							<span className="sr-only">Discord</span>
							<svg
								className="h-6 w-6"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 21 16"
							>
								<path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
							</svg>
						</a>
					</div>
					<p className="mt-8 text-center text-base leading-6 text-gray-400">
						© {new Date().getFullYear()} La Nouvelle Académie
					</p>
				</div>
			</div>
		</footer>
	);
}
