import Image from "next/image";
import Link from "next/link";
import BotIcon from "@/public/images/bots.png";
import ChanIcon from "@/public/images/channels.png";
import RoleIcon from "@/public/images/roles.png";
import DiscordScreen from "@/public/images/discord.png";

const features = [
	{
		name: "Les Salons",
		description:
			"Il en existe de plusieurs types : des salons textuels, vocaux, des forums. Ils peuvent être regroupés dans des catégories et ont une utilité précise.",
		icon: ChanIcon,
	},
	{
		name: "Les Rôles",
		description:
			"Il y a plusieurs rôles sur le serveur. Par exemple, des rôles pour indiquer votre niveau scolaire, ou bien pour être notifié lors des annonces sur le serveur.",
		icon: RoleIcon,
	},
	{
		name: "Les Bots",
		description:
			"Les assitants de LNAC. Riche de commandes, ils sont là pour vous agrémenter votre expérience sur le serveur. Vous trouverez la liste des commandes sur le serveur ou sur le site.",
		icon: BotIcon,
		link: {
			href: "/bot-lnac",
			label: "(Cliquez ici)",
		},
	},
];

export default function Features() {
	return (
		<>
			<div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1">
						<div className="lg:pr-4">
							<div className="lg:max-w-lg xl:max-w-xl">
								<p className="text-base font-semibold leading-7 text-blue-600">
									Découvrir
								</p>
								<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
									Le serveur Discord LNAC
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-700">
									C&apos;est la place centrale de notre communauté, c&apos;est
									un espace dans lequel nos membres peuvent se réunir pour
									discuter, échanger, s&apos;entraider ou socialiser. C&apos;est
									ici que vous pourrez demander de l&apos;aide sur vos devoirs
									et échanger sur votre orientation scolaire et professionnelle.
								</p>
							</div>
						</div>
					</div>
					<div className="-ml-12 -mt-12 p-12 md:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
						<Image
							className="w-[48rem] max-w-none sm:w-[57rem]"
							src={DiscordScreen}
							alt="Capture d'écran du serveur Discord LNAC"
						/>
					</div>
					<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 ">
						<div className="lg:pr-4">
							<div className="max-w-lg text-base leading-7 text-gray-700 lg:max-w-xl">
								{/* <p>
                </p> */}
								<dl className="max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-lg xl:max-w-xl">
									{features.map((feature) => (
										<div key={feature.name} className="relative ml-2 pl-10">
											<dt className="inline font-semibold text-gray-900">
												{/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" /> */}
												<Image
													src={feature.icon}
													className="absolute -left-2 top-2 h-8 w-8"
													aria-hidden="true"
													alt="icone de liste"
												/>
												{feature.name}
											</dt>{" "}
											<dd className="inline">
												{feature.description}{" "}
												{feature.link ? (
													<a className="text-blue-600" href={feature.link.href}>
														{feature.link.label}
													</a>
												) : (
													""
												)}
											</dd>
										</div>
									))}
								</dl>
								<p className="mt-8 text-gray-600 lg:max-w-lg">
									Sur le serveur, nous insistons sur le respect de la loi, des
									conditions d&apos;utilisation de Discord et de notre{" "}
									<Link
										className="text-blue-600 underline hover:cursor-pointer"
										href="/reglement"
									>
										règlement interne
									</Link>
									. Tout membre est tenu de se conformer à ces directives pour
									maintenir un environnement sûr et agréable pour tous. Nous
									nous réservons le droit de bannir tout membre en cas de
									non-respect des règles.
								</p>
								<div className="lg:max-w-lg">
									<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
										Prêt à rejoindre LNAC ?
									</h2>
									<p className="mt-6">
										Dès votre arrivée, vous serez invité à choisir les rôles qui
										vous correspondent. Vous pourrez ensuite accéder au serveur.
										N&apos;hésitez pas à vous présenter ! Nous vous attendons
										avec impatience.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
