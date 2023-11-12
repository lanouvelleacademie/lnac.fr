import React from "react";
import Image from "next/image";

import TempleIcon from "@/public/images/temple_icon.png";
import GraduationIcon from "@/public/images/graduation_hat.png";
import {DiscordInvite} from "@/lib/navigation.js";

interface HeaderProps {
	title: string;
}

export default function Header() {
	const getServerCount = async () => {};
	return (
		<div className="mx-auto px-5">
			<div className="flex w-full flex-wrap content-center justify-center p-12">
				<div className="flex flex-wrap items-center">
					<div className="relative flex w-full flex-col justify-center">
						<div className="absolute -top-8 left-0 -translate-x-2/4 -translate-y-2/4 sm:top-0">
							<Image
								src={TempleIcon}
								alt="LNAC Temple icon"
								className="animate-fade-up-delay"
								width={250}
							/>
						</div>
						<h1 className="font-display max-w-xl animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text px-8 pb-4 text-center text-6xl font-bold text-transparent drop-shadow-sm md:text-7xl">
							Découvrez l&apos;entraide et le partage
						</h1>
						<div className="absolute -bottom-12 right-3 translate-x-2/4 translate-y-2/4 xs:right-0 sm:bottom-0">
							<Image
								src={GraduationIcon}
								className="animate-fade-up-delay"
								width={250}
								alt='Graduation hat icon'
							/>
						</div>
					</div>
				</div>
			</div>
			{/* <p className="py-8 text-center max-w-2xl mx-auto">
        De l'aide aux devoirs et à l'orientation pour tous, mais aussi du
        partage culturel et des discussions passionnées, le tout dans la bonne
        humeur et ouvert à tous.
      </p> */}
			<p className="mx-auto max-w-2xl px-8 py-8 text-center text-lg">
				Depuis 2020, La Nouvelle Académie s&apos;efforce de rendre accessible
				gratuitement à toutes et à tous l&apos;aide aux devoirs et à l&apos;orientation au
				travers d&apos;une communauté de bénévoles passionnées et engagées.
			</p>

			<a
				className="mx-auto my-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
				href={DiscordInvite}
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						fill="currentColor"
						d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"
					/>
				</svg>
				<p>Rejoindre le serveur Discord</p>
				{/* <p className="text-lg">
          Rejoindre les <span className="font-semibold">3125</span> membres sur
          Discord
        </p> */}
			</a>
		</div>
	);
}
