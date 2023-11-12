const DiscordInvite = "https://discord.gg/V6DsA69";

const Links = {
	OpenPosition: "/recrutement",
	Contact: "/contact",
	About: "/a-propos",
	DiscordInvite: "https://discord.gg/V6DsA69",
	Legal: "/mentions-legales",
	Rules: "/reglement",
	GitHub: "https://github.com/lanouvelleacademie",
	FAQ: "/faq",
};

const NavMenuDiscord = [
	{
		name: "Bot LNAC",
		href: "/discord/bots",
	},
	{
		name: "Règlement",
		href: "/reglement",
	},
	{
		name: "Rejoindre le serveur",
		href: DiscordInvite,
	},
];

const NavigationLinks = [
	{ name: "Recrutement", href: Links.OpenPosition },
	{ name: "Contact", href: Links.Contact },
	{ name: "A Propos", href: Links.About },
];

const FooterLinks = [
	// {
	// 	name: "A propos",
	// 	href: Links.About,
	// },
	{
		name: "Recrutement",
		href: Links.OpenPosition,
	},
	// {
	// 	name: "FAQ",
	// 	href: Links.FAQ,
	// },
	{
		name: "Mentions légales",
		href: Links.Legal,
	},
	{
		name: "Contact",
		href: Links.Contact,
	},
];

module.exports = {
	Links,
	DiscordInvite,
	NavMenuDiscord,
	FooterLinks,
	NavigationLinks,
};
