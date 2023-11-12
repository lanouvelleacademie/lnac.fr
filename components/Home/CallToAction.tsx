import React from "react";

export default function CallToAction() {
	return (
		<div className={"mx-auto my-10 w-full max-w-screen-lg"}>
			<div className="flex flex-col rounded-xl border border-gray-300 bg-white p-4 text-center shadow-md md:flex-row md:items-center md:justify-between md:p-12 md:text-left">
				<div className="text-2xl">
					<div className="font-bold text-gray-900">
						Plus de <b className={"text-lnac-blue"}>3100</b> personnes utilisent
						La Nouvelle Académie, pourquoi pas vous ?
					</div>
					<div className="text-lnac-light text-lg">
						Sautez le pas et rejoignez une communautée Discord d&apos;aide aux
						devoirs et à l&apos;orientation.
					</div>
				</div>

				<div className="mt-3 md:ml-2 md:mt-0">Rejoindre</div>
			</div>
		</div>
	);
}
