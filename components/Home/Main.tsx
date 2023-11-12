import Image from "next/image";
import Logo from "../public/images/lnac-logo.svg";
import PlatonHalf from "../public/images/platon-half.svg";

export default function Main() {
	return (
		<div className={"mx-auto my-10 w-full max-w-screen-xl"}>
			{/* <Image
        src={Logo}
        alt="La Nouvelle Académie"
        className="mx-auto max-w-screen-md w-full pb-12"
      />
      <p className="text-center mx-auto max-w-2xl">
        La Nouvelle Académie est un projet collaboratif bénévole en perpétuelle
        évolution. C'est une communauté bienveillante et soucieuse d'aider au
        mieux tous les niveaux et dans toutes les matières. Nous croyons au
        partage des connaissances : tous peuvent aider et se faire aider. Nous
        souhaitons accompagner tout le monde vers la réussite que ce soit par
        une aide aux devoirs, à l'orientation ou simplement par le partage.
        Alors n'hésite pas à nous rejoindre, poser tes questions, aider ou juste
        venir discuter avec nous sur Discord ! 
      </p> */}
			<div className="grid grid-cols-3 items-center justify-between">
				<div className="col-span-2 mx-24 text-center">
					La Nouvelle Académie est un projet collaboratif bénévole en
					perpétuelle évolution. C&apos;est une communauté bienveillante et soucieuse
					d&apos;aider au mieux tous les niveaux et dans toutes les matières. Nous
					croyons au partage des connaissances : tous peuvent aider et se faire
					aider. Nous souhaitons accompagner tout le monde vers la réussite que
					ce soit par une aide aux devoirs, à l&apos;orientation ou simplement par le
					partage. Alors n&apos;hésite pas à nous rejoindre, poser tes questions,
					aider ou juste venir discuter avec nous sur Discord !
				</div>
				<Image
					src={PlatonHalf}
					alt="La Nouvelle Académie"
					className="my-auto h-48 w-full max-w-screen-md self-end pb-12 md:h-96"
				/>
			</div>
		</div>
	);
}
