import { title } from "@/components/primitives";

import { Quiz } from "@/components/quiz";

export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Quiz</h1>
			<Quiz />
		</div>
	);
}
