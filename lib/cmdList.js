const Commands = [
	{
		name: "code aide",
		description:
			"Message d'aide pour apprendre à mettre en forme du code (coloration syntaxique) dans son message",
	},
	{
		name: "code executer",
		description:
			"Permet d'executer un bloc de code et retourne la sortie dans un message",
		options: [
			{
				name: "langage",
				type: "TEXT - Choix du langage",
				required: true,
			},
			{
				name: "lien-message",
				type: "URL - Lien du message Discord",
				required: true,
			},
		],
	},
	{
		name: "invite",
		description: "Le lien d'invitation au serveur en accès rapide",
	},
	{
		name: "info",
		description: "Des informations utiles sur le bot",
	},
	{
		name: "orientation",
		description:
			"Un message d'aide pour demander de l'aide sur son orientation",
	},
	{
		name: "merci",
		description: "Remercie un·e académicien·ne de t'avoir aidé·e",
		options: [
			{
				name: "membre",
				type: "MENTION - Utilisateur",
				required: true,
			},
		],
	},
	{
		name: "aide",
		description: "Message de rappel pour les mauvaises demandes d'aide",
		options: [
			{
				name: "membre",
				type: "MENTION - Utilisateur",
				required: true,
			},
			{
				name: "type",
				type: "TEXT - Affiner le message en fonction de l'infraction constatée",
			},
		],
	},
	{
		name: "help",
		description: "Liste des commandes disponibles sur le serveur",
	},
	{
		name: "sondage oui-non",
		description: "Créer un sondage avec les réactions 👍, 👎 ou 🤷 pour voter",
		options: [
			{
				name: "question",
				type: "TEXT - Question du sondage",
				required: true,
			},
		],
	},
	{
		name: "profil info",
		description: "Consulter les informations de son profil sur le serveur",
	},
	{
		name: "profil reglage",
		description: "Renseigner des informations dans son profil",
		options: [
			{
				name: "valeur",
				type: "TEXT - Information à modifier",
				required: true,
			},
		],
	},
	{
		name: "profil supprimer",
		description: "Supprimer toutes les informations dans son profil",
	},
	{
		name: "rappel nouveau",
		description:
			"Créer un rappel qui est envoyé dans le canal d'où est exécutée la commande",
		options: [
			{
				name: "jour",
				type: "NUMBER - Jour du rappel",
				required: true,
			},
			{
				name: "mois",
				type: "TEXT - Mois du rappel",
				required: true,
			},
			{
				name: "annee",
				type: "NUMBER - Année du rappel",
			},
			{
				name: "contenu",
				type: "TEXT - Message du rappel",
			},
			{
				name: "lien-message",
				type: "URL - Lien du message Discord à rappeler",
			},
		],
	},
	{
		name: "rappel annuler",
		description: "Annuler un rappel programmé",
		options: [
			{
				name: "id-rappel",
				type: "TEXT - Identifiant du rappel à supprimer",
				required: true,
			},
		],
	},
	{
		name: "rappel liste",
		description: "Liste ses rappels programmés",
	},
	{
		name: "report",
		description: "Signaler un utilisateur à la modération",
		options: [
			{
				name: "membre",
				type: "MENTION - Utilisateur",
				required: true,
			},
			{
				name: "raison",
				type: "TEXT - Raison du signalement",
				required: true,
			},
		],
	},
	{
		name: "stats",
		description: "Obtiens tes différentes statistiques sur le serveur",
		options: [
			{
				name: "donnees",
				type: "TEXT - Données à afficher",
                required: true,
			},
		],
	},
	{
		name: "ticket",
		description: "Tickets pour signaler des problèmes, suggérer des idées, recevoir une assistance",
		options: [
			{
				name: "type",
				type: "TEXT - Type de ticket",
                required: true,
			},
		],
	},
	{
		name: "pomodoro marche",
		description: "Lancer une session de pomodoro",
		options: [
			{
				name: "temps-session",
				type: "NOMBRE - Durée de la session de travail",
				required: true,
			},
			{
				name: "temps-pause",
				type: "NOMBRE - Durée de la pause",
				required: true,
			},
			{
				name: "notification",
				type: "BOOLEEN - Etre notifier à la fin du temps",
			},
			{
				name: "repetition",
				type: "NOMBRE - Nombre de répétition de la session",
			}
		],
	},
	{
		name: "pomodoro arret",
		description: "Arrêter une session de pomodoro en cours",
	},
	{
		name: "pomodoro status",
		description: "Afficher le status de la session de pomodoro",
	}	
];

module.exports = {
	Commands,
};
