import { title } from "@/components/primitives";
import { Typing } from "@/components/typing";

export default function PricingPage() {
	return (
		<div>
			<h1 className={title()}>Typing</h1>
			<Typing />
		</div>
	);
}
