import Title from "@/components/PageTitle";

export default function Recrutement() {
	const mentionsLegales = {
		responsableDuProjet: {
			nom: "Sylvain Vallot",
			email: "contact@sylvainvallot.com",
		},
		hebergeur: {
			nom: "OVH",
			adresse: "2 rue Kellermann - 59100 Roubaix - France",
			telephone: "+33 (0)9 72 10 10 07",
		},
		proprieteIntellectuelle:
			"Le contenu de ce site web est la propriété de La Nouvelle Académie. Toute reproduction totale ou partielle sans autorisation préalable est interdite.",
		collecteDonneesPersonnelles:
			"Aucune données personnelles n'est collectée sur ce site web.",
		cookies:
			"Aucun cookies n'est utilisé sur ce site web.",
		liensHypertextes:
			"Ce site peut contenir des liens vers d'autres sites. Nous ne sommes pas responsables du contenu de ces sites tiers.",
		responsabilite:
			"Nous nous efforçons de fournir des informations exactes et à jour, mais nous ne pouvons garantir l'exactitude de toutes les informations fournies.",
	};

	return (
		<div className="container mx-auto max-w-4xl">
			<Title title="Mentions Légales" />
			<h2 className="font-bold text-lg pt-10 my-2">Responsable du Projet :</h2>
			<ul>
				<li>Nom : {mentionsLegales.responsableDuProjet.nom}</li>
				<li>E-mail : {mentionsLegales.responsableDuProjet.email}</li>
			</ul>
			<h2 className="font-bold text-lg pt-10 my-2">Hébergeur :</h2>
			<ul>
				<li>{mentionsLegales.hebergeur.nom}</li>
				<li>Siège social : {mentionsLegales.hebergeur.adresse}</li>
				<li>Téléphone : {mentionsLegales.hebergeur.telephone}</li>
			</ul>
			<h2 className="font-bold text-lg pt-10 my-2">Propriété Intellectuelle :</h2>
			<p>{mentionsLegales.proprieteIntellectuelle}</p>
			<h2 className="font-bold text-lg pt-10 my-2">Collecte de Données Personnelles :</h2>
			<p>{mentionsLegales.collecteDonneesPersonnelles}</p>
			<h2 className="font-bold text-lg pt-10 my-2">Cookies :</h2>
			<p>{mentionsLegales.cookies}</p>
			<h2 className="font-bold text-lg pt-10 my-2">Liens Hypertextes :</h2>
			<p>{mentionsLegales.liensHypertextes}</p>
			<h2 className="font-bold text-lg pt-10 my-2">Responsabilité :</h2>
			<p>{mentionsLegales.responsabilite}</p>
		</div>
	);
};