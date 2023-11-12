// type Position = {
// 	title: string;
// 	description: string[];
// 	profile: string[];
// 	skills: string[];
// 	time: string;
// 	team: string;
// 	tags?: string[]; // Make tags optional by adding `?`
// 	maxTimeWeek: number;
// 	priority: number;
//   };
const OpenPositions = [
	// {
	// 	title: "Un·Une développeur·se",
	// 	description: ["Développer des outils pour La Nouvelle Académie"],
	// 	profile: [
	// 		"Avoir une bonne connaissance de JavaScript",
	// 		"Avoir une bonne connaissance de NodeJS",
	// 		"Avoir une bonne connaissance de React",
	// 	],
	// 	skills: ["JavaScript", "NodeJS", "React"],
	// 	time: "1h/semaine",
	// 	team: "Développement",
	// 	tags: ["développement", "javascript", "nodejs", "react"],
	// 	maxTimeWeek: 1,
	// 	priority: 3,
	// },
	  
	
	{
		title: "Un·Une chargé·e de communication",
		description: [
			"Vous gérez et planifiez toute la communication de La Nouvelle Académie sur les différents réseaux sociaux.",
			"Vous représentez LNAC sur les réseaux sociaux et vous êtes un des premiers contacts avec les personnes extérieures.",
		],
		profile: [
			"Vous avez une bonne orthographe",
			"Vous connaissez les codes de publications",
			"Vous savez utiliser les outils d'automatisations des différents réseaux sociaux",
            "Vous savez travailler en équipe.",
		],
		skills: ["Instagram", "Twitter", "Discord"],
		time: "~2 heures par semaine ou ~10 minutes par jour",
		team: "Communication",
		tags: ["communication", "réseaux sociaux"],
		maxTimeWeek: 2,
		priority: 1,
	},
	{
		title: "Un·Une graphiste",
		description: [
			"En tant que graphiste, vous serez chargé·e de la conception graphique et visuelle de divers supports de communication pour La Nouvelle Académie.",
			"Vous travaillerez en étroite collaboration avec l'équipe de communication pour créer des visuels attrayants et qui nous représentent.",
		],
		profile: [
			"Vous maîtrisez des outils de conception graphique tels que Adobe Illustrator et Photoshop",
			"Vous êtes créatif·ve et avez sens artistique développé.",
			"Vous avez la capacité à comprendre et interpréter les besoins en communication visuelle.",
            "Vous savez travailler en équipe.",
		],
		skills: [
			"Conception graphique",
            "Dessin vectoriel",
			"Adobe Illustrator",
			"Adobe Photoshop",
		],
		time: "~2-4 heures par semaine",
		team: "Communication",
		tags: ["graphisme", "conception visuelle"],
		maxTimeWeek: 2,
		priority: 1.1,
	},
    {
        title: "Un·Une responsable événementiel/animation",
        description: [
            "En tant que Responsable Animation, vous serez chargé·e de la planification, de l'organisation et de la coordination des événements pour La Nouvelle Académie sur les différentes plateformes où nous sommes présents.",
            "Vous serez également en charge de concevoir des animations engageantes et régulières pour notre communauté.",
        ],
        profile: [
            "Vous avez une expérience avérée dans la planification et la gestion d'événements.",
            "Vous faites preuve de créativité et avez la capacité à concevoir des animations originales.",
            "Vous possédez d'excellentes compétences en gestion de projet et en communication.",
            "Vous savez travailler en équipe."
        ],
        skills: [
            "Planification d'événements",
            "Créativité",
            "Gestion de projet",
            "Communication",
        ],
        time: "~1 heure par semaine",
        team: "Animation",
        tags: ["événementiel", "animation"],
        maxTimeWeek: 1,
        priority: 1.3,
    },
	{
		title: "Un·Une chargé·e de partenariats",
		description: [
			"En tant que Chargé·e de Partenariat, vous serez chargé·e de la gestion des partenariats de La Nouvelle Académie.",
			"Vous travaillerez en étroite collaboration avec les entreprises et les organisations pour développer des collaborations fructueuses et mutuellement bénéfiques.",
		],
		profile: [
			"Vous possédez d'excellentes compétences en communication et en négociation.",
			"Vous avez la capacité à identifier et à développer des opportunités de partenariat.",
			"Vous avez de l'expérience dans la création et la gestion de partenariats.",
            "Vous savez travailler en équipe.",
		],
		skills: ["Négociation", "Communication", "Gestion de partenariat"],
		time: "~1-2 heures par semaine",
		team: "Partenariats",
		tags: ["partenariats", "communication"],
		maxTimeWeek: 1,
		priority: 2,
	},
    {
        title: "Modérateur·rice Discord",
        description: [
          "En tant que modérateur·rice Discord, vous serez chargé·e de maintenir un environnement positif et respectueux au sein de la communauté de La Nouvelle Académie sur Discord.",
          "Vous surveillerez les discussions et veillerez à l'application des règles établies.",
        ],
        profile: [
          "Vous avez une connaissance approfondie de Discord et de des fonctionnalités des serveurs communautaires.",
          "Vous possédez la capacité à gérer les conflits et à résoudre les problèmes de manière efficace.",
          "Vous démontrez d'excellentes compétences en communication et possédez un sens de la diplomatie développé.",
          "Vous faites preuve de responsabilité et de fiabilité dans l'exercice de vos fonctions de modération.",
          "Vous avez déjà eu une expérience de modération.",
          "Vous savez travailler en équipe.",
        ],
        skills: ['Discord', 'Gestion de conflits', 'Communication', 'Modération'],
        time: "~7-20 heures par semaine ou ~2-4 heures par jour",
        team: "Modération",
        tags: ["modération", "Discord"],
		maxTimeWeek: 8,
        priority: 4,

      }
];

module.exports = {
	OpenPositions,
}