import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import { Counter } from "@/components/counter";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Learn&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Cree&nbsp;</h1>
				<br />
				<h1 className={title()}>
					enjoy the experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Study, Teach, and Practice using tools from the Modern Web.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					as={NextLink}
					href={siteConfig.links.tables}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Get Started
				</Link>
			</div>

			
			<Counter />
		</section>
	);
}
