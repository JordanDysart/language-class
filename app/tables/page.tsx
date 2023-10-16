import NextLink from "next/link"
import { title } from "@/components/primitives";

import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { Intro } from "@/components/intro";
import { Link } from "@nextui-org/link";

export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Tables</h1>
			<div className="flex gap-3">
				<Link
					as={NextLink}
					href={siteConfig.links.typing}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Try Typing
				</Link>
			</div>
			<Intro />


		</div>
	);
}
