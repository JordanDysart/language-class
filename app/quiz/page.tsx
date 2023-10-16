import { getQuiz } from "@/_data/quiz";
import { title } from "@/components/primitives";

import { QuizController as Quiz } from "@/components/quiz";

export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Quiz</h1>
			<Quiz quiz={getQuiz()}/>
		</div>
	);
}
