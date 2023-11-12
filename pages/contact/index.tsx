import { DiscordInvite } from "@/lib/navigation.js";

export default function Contact() {
	return (
		<div className="container mx-auto max-w-6xl px-6">
			<div className="rounded-xl p-6">
				<p className="text-base font-semibold leading-7 text-blue-600">
					Contact
				</p>
				<h1 className="mt-2 mb-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Besoin de nous contacter ?
				</h1>
				<div className="py-6 my-6 flex flex-col xs:flex-row items-center">
					<div className="mx-8 rounded-xl border bg-blue-600 p-6 text-white shadow-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-8 w-8"
						>
							<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
							<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
						</svg>
					</div>
					<div>
						<h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl text-center xs:text-left mt-6 sm:mt-0">
							Via e-mail
						</h2>
						<p className="text mt-2 text-gray-700 text-center xs:text-left">
							Pour toutes les questions générales, les propositions de
							partenariats, envoyez-nous un e-mail à l&apos;adresse suivante :{" "}
							<a
								href="mailto:contact@lanouvelleacademie.fr"
								className="rounded border border-gray-400 bg-blue-50 px-1 py-0.5 text-blue-600"
							>
								contact@lanouvelleacademie.fr
							</a>
						</p>
					</div>
				</div>
				<div className="py-6 my-6 flex flex-col xs:flex-row items-center">
					<div className="mx-8 rounded-xl border bg-blue-600 p-6 text-white shadow-md">
						<svg
							className="h-8 w-8"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 21 16"
						>
							<path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
						</svg>
					</div>
					<div>
						<h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl text-center xs:text-left mt-6 sm:mt-0">
							Via Discord
						</h2>
						<p className="mt-2 text-gray-700 text-center xs:text-left">
							Le moyen le plus rapide pour obtenir une réponse ! Venez échanger
							directement avec nous sur le serveur. Si vous n&apos;êtes pas dessus,
							rejoignez le maintenant en cliquant{" "}
							<a
								href={DiscordInvite}
								className="text-blue-600 underline underline-offset-2"
							>
								juste ici
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
