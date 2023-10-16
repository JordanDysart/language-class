export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Language Class",
	description: "Practice cree language with modern web tools.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Quiz",
			href: "/quiz",
		},
		{
			label: "Typing",
			href: "/typing",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/Mid-Flight/language-class",
		twitter: "https://twitter.com/midflightdev",
		tables: "/tables",
		typing: "/typing",
		quiz: "/quiz",
		discord: "https://discord.gg/9b6yyZKmH4",
		// sponsor: "https://patreon.com/jrgarciadev"
	},
};
