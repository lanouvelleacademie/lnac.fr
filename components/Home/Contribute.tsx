import Image from "next/image";
import PlatonHalf from "@/public/images/platonHalfRework.svg";
import { Links } from "@/lib/navigation.js";

export default function Contribute() {
	return (
		<>
			<div className="relative mx-auto grid w-full max-w-2xl grid-cols-3 items-center justify-between gap-x-8 px-6 lg:max-w-none lg:px-0">
				<div className="col-span-2">
					<p className="text-base font-semibold leading-7 text-blue-600">
						S&apos;impliquer
					</p>
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Contribuer à LNAC
					</h1>
					<p className="mt-6 w-full text-base text-gray-700">
						Être membre actif sur le serveur Discord est déjà une manière de
						contribuer. Cependant, si vous souhaitez vous impliquer activement,
						nous sommes toujours à la recherche de personnes motivées pour nous
						au développement et à faire grandir notre communauté.
					</p>
					<div className="mt-8 font-semibold">
						<a href={Links.OpenPosition}>
							Offres de volontariat
							<span className="ml-2" aria-hidden="true">
								&rarr;
							</span>
						</a>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<Image
						src={PlatonHalf}
						alt="La Nouvelle Académie"
						className="absolute right-0 h-48 w-36"
					/>
				</div>
			</div>
		</>
	);
}
