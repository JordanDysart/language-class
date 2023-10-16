import NextLink from "next/link"

import { title } from "@/components/primitives";
import { Typing } from "@/components/typing";

import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

export default function PricingPage() {
	return (
		<div>
			<h1 className={title()}>Typing</h1>
			<div className="flex gap-3">
				<Link
					as={NextLink}
					href={siteConfig.links.quiz}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Quiz Yourself	
				</Link>
			</div>
			<Typing />
		</div>
	);
}
