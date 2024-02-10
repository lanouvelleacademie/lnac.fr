import { useState } from "react";
import { Dialog, Disclosure } from "@headlessui/react";

import { DiscordInvite } from "@/lib/navigation.js";
import { OpenPositions } from "@/lib/positions.js";

import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "@/components/PageTitle";

const taglines = [
	"Vous souhaitez participer à l'aventure de La Nouvelle Académie ? ",
	"Vous êtes motivé·e et prêt·e à vous investir dans un projet humain ?",
	"Vous souhaitez contribuer vos idées et vos compétences pour aider les autres et faire avancer les choses ?",
];

const MailBody = `Bonjour,%0A%0A
Je suis intéressé.e par l'offre de bénévolat.%0A
Je vous contacte pour vous faire part de ma candidature.%0A
Je suis disponible pour un entretien le [JOUR].%0A%0A
Cordialement,%0A
[VOTRE NOM]`;

type Position = {
	title: string;
	description: string[];
	profile: string[];
	skills: string[];
	time: string;
	team?: string;
	tags?: string[];
	maxTimeWeek?: number;
	priority: number;
};


function PositionCard({ position }: { position: Position }) {
	const [showMore, setShowMore] = useState(false);
	return (
		<div
			className="grid h-full rounded-xl border bg-white p-6 shadow-md"
			key={position.title}
		>
			<div className="self-start pb-2">
				<span className="text-sm text-blue-800">{position.team}</span>
				<h2 className="mt-px text-2xl font-bold">{position.title}</h2>
				<div className="mt-2 flex items-center gap-3">
					<span className="flex items-center gap-1 text-sm  text-gray-500">
						<ClockIcon className="h-5 w-5" aria-hidden="true" />
						{position.time}
					</span>
				</div>
				<div className="text-gray-700">
					<div className="mt-2">
						{position.description.map((p) => (
							<p key={p}>{p}</p>
						))}
					</div>
					<div className="mt-4 text-gray-700">
						<strong>Vous devez vous reconnaître dans au moins deux des affirmations suivantes :</strong>
						{position.profile.map((profile) => (
							<p className="ml-4" key={profile}>
								- {profile}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* <div className="mt-2 text-gray-700">
				<strong>Compétences requises :</strong>{" "}
				<p>{position.skills.join(" - ")}</p>
			</div> */}
			<div className="self-end pt-4 text-gray-700">
				{/* <hr className="my-2" /> */}
				<p className='font-bold text-md'>Cette mission vous intéresse ? Faites le nous savoir !</p>{" "}
				{/* <button
					className="text-blue-600 hover:underline"
					onClick={() => setShowMore(!showMore)}
				>
					{showMore ? "Voir moins" : "Voir"}
				</button> */}
				<div className={true ? "pt-2" : "hidden"}>
					<p className=" ">
						Contactez un responsable sur le Discord, en mentionnant dans
						votre message les rôles{" "}
						<span className="rounded-full border bg-gray-50 px-1 py-0.5 text-sm">
							@Responsable
						</span>{" "}
						ou{" "}
						<span className="rounded-full border bg-gray-50 px-1 py-0.5 text-sm">
							@Recrutement
						</span>
					</p>{" "}
					<p className="py-1 text-sm font-semibold">&uarr; ou &darr;</p>{" "}
					<p className="">
						Envoyez-nous un e-mail à{" "}
						<a
							className="rounded border bg-blue-50 px-1 py-0.5 text-blue-600"
							href={`mailto:contact@lanouvelleacademie.fr?subject=Candidature à l'offre pour ${position.title}&body=${MailBody}`}
						>
							contact@lanouvelleacademie.fr
						</a>{" "}
						en précisant dans l&apos;objet l&apos;intitulé du poste. Ajoutez une courte
						présentation et n&apos;oubliez pas de nous faire part de vos motivations.
					</p>
				</div>
			</div>
		</div>
	);
}

export default function Recrutement() {
	const SortedList = OpenPositions.sort((a, b) => {
		if (a.priority > b.priority) {
			return 1;
		} else {
			return -1;
		}
	}).map((position) => (
		<PositionCard position={position} key={position.priority} />
	));

	return (
		<>
			<div className="container mx-auto max-w-7xl px-6 py-12">
				<p className="text-base font-semibold leading-7 text-blue-600">
					Recrutement
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Positions bénévoles à pourvoir
				</h1>
				<ul>
					{taglines.map((tagline) => (
						<li className="ml-2 mt-2 text-gray-700" key={tagline}>
							<span className="ml-2">&rarr;</span> {tagline}
						</li>
					))}
				</ul>
				<p className="mt-3 text-lg font-semibold">Vous êtes au bon endroit !</p>
				<div className="mt-6 grid gap-6 lg:grid-cols-2">{SortedList}</div>
			</div>
		</>
	);
}
