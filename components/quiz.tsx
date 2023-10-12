"use client";

import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";

const questions = [
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

	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
	const [isCorrect, setIsCorrect] = useState(false);

	const [questionIndex, setQuestionIndex] = useState(0);
	const progress = (questionIndex / questions.length) * 100;
	const quizDuration = quizFinished - quizStarted;
	const quizDurationInSeconds = quizDuration / 1000;
	const quizOver = questionIndex === questions.length;
	const currentQuestion = questions[questionIndex];

	const [score, setScore] = useState(0);

	const handleAnswer = (answer: string) => {
		setSelectedAnswer(answer);
		setIsCorrect(answer === currentQuestion.correctAnswer);
	};

	useEffect(() => {
		if (selectedAnswer !== null) {
			if (questionIndex < questions.length) {


				if (isCorrect == true) {
					setScore((prev) => prev + 1);
					setQuestionIndex((prev) => prev + 1);
					setSelectedAnswer(null);
				} else {
					setQuestionIndex((prev) => prev + 1);
					setSelectedAnswer(null);
				}
			}
		}
	}, [selectedAnswer, setQuestionIndex, setScore]);

	useEffect(() => {
		if (questionIndex == 1) {
			setQuizStarted(Date.now());
		}
		if (questionIndex === questions.length) {
			setQuizFinished(Date.now());
		}
	}, [questionIndex, quizStarted, quizFinished, setQuizFinished, setQuizStarted]);

	return (quizOver ?
		<>
			
			<div className="score-container mt-30 grid grid-cols-3 grid-rows-3 min-w-unit-24">
				{score} out of {questions.length} correct in {quizDurationInSeconds} seconds

			</div>


		</>
		:
		<>
			<div className="question-container mt-30 grid grid-cols-3 grid-rows-3 min-w-unit-24">
				<div className="question border-2 border-black py-10 text-lg m-5  min-w-unit-10 row-start-2 row-span-1 col-start-2 justify-center align-middle">{currentQuestion.question}</div>
				{
					currentQuestion.answers.map((answer, index) => (
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
			</div >
			<div className="score-container mt-30 grid grid-cols-3 grid-rows-3 min-w-unit-24">
				{score}
			</div>
			<Progress value={progress} />
		</>
	)

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
			className={`answer border-2 border-black px-10 py-10 m-5 transition-transform ease-in-out 
			${columnStart} ${rowStart} 
			${selectedAnswer === answer ? "selected" : ""} ${isCorrect && selectedAnswer === answer ? "correct" : ""
				} ${!isCorrect && selectedAnswer === answer ? "wrong" : ""}`}
			onClick={() => handleAnswer(answer)}
		>
			{answer}
		</Button>
	);
}
