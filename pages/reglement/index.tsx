const rules = [
	{
		article: 1,
		title: "Messages interdits",
		content: "Les messages de haine, de discrimination, d'insultes, de diffamation, de contenu illégal ou soumis à des droits d'auteur, sont strictement interdits. Vos messages et pièces jointes n'engagent que vous. Le staff ne pourra en être tenu responsable."
	},
	{
		article: 2,
		title: "Contenu NSFW",
		content: "Il est strictement interdit de partager du contenu NSFW (Not Safe For Work)."
	},
	{
		article: 3,
		title: "Comportement inapproprié",
		content: "Le spam, le flood, l'abus de majuscules ou de mentions utilisateurs sont interdits."
	},
	{
		article: 4,
		title: "Utilisation des salons",
		content: "Merci d'utiliser chaque salon de manière appropriée (si vous voulez demander de l’aide en mathématiques ou juste en parler, faites-le dans #mathématiques et non pas dans les autres salons). L'utilisation abusive des commandes bot est proscrite en dehors des salons d'aide ou dédiés à l'aide."
	},
	{
		article: 5,
		title: "Rémunération en échange de services",
		content: "Toute proposition de rémunération en échange d'un service est strictement prohibée."
	},
	{
		article: 6,
		title: "Respect de l'identité en ligne",
		content: "Veillez à être raisonnable et respectueux dans vos pseudos, photos de profil et statuts."
	},
	{
		article: 7,
		title: "Pouvoir discrétionnaire de l'équipe",
		content: "Les membres de l'équipe se réservent le droit de prendre toute décision qu'ils jugent utile au bon fonctionnement du serveur (c.-à-d. n'essayez pas de jouer avec les limites des membres du serveur, ni celles du règlement)."
	},
	{
		article: 8,
		title: "Publicité",
		content: "Aucune pub n'est tolérée. Si vous souhaitez envoyer un questionnaire, dans le cadre d'un mémoire par exemple, nous vous invitons à contacter un membre de l'équipe pour qu'il vous y autorise."
	},
	{
		article: 9,
		title: "Messagerie privée",
		content: "Tout envoi de message privé indésirable (pub, arnaques, etc.) par le biais du serveur est interdit."
	},
	{
		article: 10,
		title: "Respect de la vie privée",
		content: "Il est impératif de respecter la vie privée des membres du serveur. Ne partagez pas d'informations personnelles sans le consentement explicite de la personne concernée."
	},
	{
		article: 11,
		title: "Langage approprié",
		content: "Le langage vulgaire, obscène ou offensant est strictement interdit. Veillez à maintenir un ton respectueux et courtois dans vos interactions."
	},
	{
		article: 12,
		title: "Contenu inapproprié",
		content: "Tout contenu qui pourrait être considéré comme offensant, inapproprié ou choquant est proscrit. Cela inclut, mais ne se limite pas, à des images, liens ou vidéos."
	},
	{
		article: 13,
		title: "Respect des droits d'auteur",
		content: "Il est interdit de partager du contenu soumis à des droits d'auteur sans l'autorisation expresse du titulaire des droits."
	},
	{
		article: 14,
		title: "Signalement d'infractions",
		content: "Tout membre du serveur est encouragé à signaler tout comportement ou contenu en violation de ce règlement à l'équipe de modération."
	},
	{
		article: 15,
		title: "Conséquences des infractions",
		content: "En cas de non-respect de ce règlement, l'équipe de modération se réserve le droit de prendre des mesures appropriées, incluant des avertissements, des suspensions temporaires ou le bannissement définitif du serveur."
	},
	{
		article: 16,
		title: "Modification du règlement",
		content: "L'équipe se réserve le droit de modifier ce règlement à tout moment. Les membres seront informés des changements et devront les accepter pour continuer à utiliser le serveur."
	},
	{
		article: 17,
		title: "Clause de non-responsabilité",
		content: "La Nouvelle Académie, via les administrateurs et son équipe de modération, ne peut être tenue responsable des actes ou des comportements des membres, ni des conséquences liées à l'utilisation du serveur Discord."
	}
];

type Rule = {
	article: number;
	title: string;
	content: string;
};

export default function Reglement() {
	return (
		<div className="container mx-auto px-4 lg:px-0">
			<h1 className="pb-8 pt-12 text-center text-4xl font-bold">
				Réglement de La Nouvelle Académie
			</h1>
			<div className="mx-auto max-w-4xl">
				{rules.map((rule: Rule) => (
					<div className="my-10" key={rule.article}>
						<h2 className="text-2xl font-semibold mb-2">Article {rule.article} - {rule.title}</h2>
						<p className="text-justify">{rule.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
