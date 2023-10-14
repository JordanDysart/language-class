"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";

type Question = {
	question: string;
	answers: string[];
	correctAnswer: string;
};

const questions: Question[] = [
	{
		question: "wapanohk",
		answers: ["north", "east", "south", "west"],
		correctAnswer: "east",
	},
	{
		question: "pitokwe",
		answers: ["dog", "cat", "mouse", "rat"],
		correctAnswer: "dog",
	},
	{
		question: "ciman",
		answers: ["dog", "cat", "mouse", "boat"],
		correctAnswer: "boat",
	},
	{
		question: "awasis",
		answers: ["dog", "cat", "child", "baby"],
		correctAnswer: "child",
	},
	{
		question: "wapaki",
		answers: ["friday", "tomorrow", "yesterday", "next year"],
		correctAnswer: "tomorrow",
	},
];

export const Quiz = () => {

	const [quizStarted, setQuizStarted] = useState(0);
	const [quizFinished, setQuizFinished] = useState(0);

	const [questionIndex, setQuestionIndex] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(questions[questionIndex]);
	const progress = (questionIndex / questions.length) * 100;
	const quizDuration = quizFinished - quizStarted;
	const quizDurationInSeconds = quizDuration / 1000;
	const quizOver = questionIndex === questions.length;

	const [score, setScore] = useState(0);

	useEffect(() => {
		if (questionIndex == 1) {
			setQuizStarted(Date.now());
		}
		if (questionIndex === questions.length) {
			setQuizFinished(Date.now());
		}
	}, [questionIndex, setQuizFinished, setQuizStarted]);

	const handleSubmittedAnswer = (isCorrect: boolean) => {
		setScore((prev) => prev + (isCorrect ? 1 : 0));
		setQuestionIndex((prev) => prev + 1);
	}

	return (quizOver ?
		<>
			<div className="score-container mt-30 grid grid-cols-3 grid-rows-3 min-w-full">
				{score} out of {questions.length} correct in {quizDurationInSeconds} seconds
			</div>

		</>
		:
		<>
			<Question question={currentQuestion} onAnswer={handleSubmittedAnswer}/>
			<div className="stats py-10 text-lg m-5  min-w-unit-10 row-start-4 row-span-1 col-start-1 col-span-3 flex flex-col justify-center align-middle">
				{questionIndex + 1} of {questions.length} questions
				<Progress label={'Quiz'} maxValue={questions.length} value={questionIndex} showValueLabel={true} className="max-w-md" />
			</div>
		</>
	)
}

/**
 * Question component
 * take a question object and render it. Evaluate the input and display the correct answer
 * when the user clicks on an answer, display the correct answer
 */
const Question = ({ question, onAnswer }: { question: Question, onAnswer: (isCorrect:boolean) => void}) => {

	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [isCorrect, setIsCorrect] = useState(false);

	const handleAnswer = (answer: string) => {
		setSelectedAnswer(answer);
		setIsCorrect(answer === question.correctAnswer);
		onAnswer(isCorrect);
	};


	return (
		<>
			<div className="question-container grid grid-cols-3 grid-rows-4 min-w-full">
				<Button className="question border-2 py-10 m-5  min-w-unit-10 row-start-2 row-span-1 col-start-2 justify-center align-middle">{question.question}</Button>
				{
					question.answers.map((answer, index) => (
						<Answer
							index={index}
							key={answer}
							answer={answer}
							selectedAnswer={selectedAnswer}
							isCorrect={isCorrect}
							handleAnswer={handleAnswer}
						/>
					))
				}
			</div>
		</>

	);
}

type AnswerProps = {
	answer: string;
	selectedAnswer: string | null;
	isCorrect: boolean;
	handleAnswer: (answer: string) => void;
	index: number;
}

const Answer = ({ answer, selectedAnswer, isCorrect, handleAnswer, index }: AnswerProps) => {

	const column = ["col-start-1", "col-start-2", "col-start-3", "col-start-2"];
	const row = ["row-start-2", "row-start-1", "row-start-2", "row-start-3"];

	const columnStart = column[index];
	const rowStart = row[index];

	return (
		<Button
			className={`answer px-10 py-10 m-5 transition-transform ease-in-out 
			${columnStart} ${rowStart} 
			${selectedAnswer === answer ? "selected" : ""} 
			${isCorrect && selectedAnswer === answer ? "correct" : ""} 
			${!isCorrect && selectedAnswer === answer ? "wrong" : ""}`}
			onClick={() => handleAnswer(answer)}
		>
			{answer}
		</Button>
	);
}

