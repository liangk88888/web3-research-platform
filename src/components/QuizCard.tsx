'use client';

import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle } from 'lucide-react';

interface Quiz {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

interface Props {
    title: string;
    correctText: string;
    incorrectText: string;
    quizzes: Quiz[];
}

export default function QuizCard({ title, correctText, incorrectText, quizzes }: Props) {
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const quiz = quizzes[currentQuiz];

    const handleAnswer = (index: number) => {
        if (showResult) return;

        setSelectedAnswer(index);
        setShowResult(true);

        if (index === quiz.correctIndex) {
            setScore(score + 1);
        }
    };

    const nextQuiz = () => {
        if (currentQuiz < quizzes.length - 1) {
            setCurrentQuiz(currentQuiz + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            // End of quiz
            setCurrentQuiz(quizzes.length); // Out of bounds indicator
        }
    };

    const resetQuiz = () => {
        setCurrentQuiz(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
    };

    // Score Board
    if (currentQuiz >= quizzes.length) {
        return (
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-8 text-center animate-fade-in-up">
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Quiz Completed!</h3>
                <p className="text-gray-300 text-lg mb-8">
                    You scored <span className="font-bold text-white text-2xl">{score}</span> out of {quizzes.length}
                </p>
                <button
                    onClick={resetQuiz}
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-bold transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${((currentQuiz) / quizzes.length) * 100}%` }}
                />
            </div>

            <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <HelpCircle className="text-purple-400" />
                    {title}
                </h3>
                <span className="text-sm font-bold text-gray-500">
                    Question {currentQuiz + 1} of {quizzes.length}
                </span>
            </div>

            <div className="mb-8">
                <h4 className="text-2xl font-medium text-white leading-snug">{quiz.question}</h4>
            </div>

            <div className="space-y-3">
                {quiz.options.map((option, index) => {
                    let buttonStyle = "bg-black/40 border-white/10 hover:bg-white/5 text-gray-300"; // Default

                    if (showResult) {
                        if (index === quiz.correctIndex) {
                            buttonStyle = "bg-green-500/20 border-green-500/50 text-green-200 ring-2 ring-green-500/50"; // Correct!
                        } else if (selectedAnswer === index) {
                            buttonStyle = "bg-red-500/20 border-red-500/50 text-red-200 ring-2 ring-red-500/50"; // Wrong selected
                        } else {
                            buttonStyle = "bg-black/40 border-white/5 text-gray-600 opacity-50"; // Other
                        }
                    } else if (selectedAnswer === index) {
                        buttonStyle = "bg-white/10 border-white/20 text-white"; // Selected before checking (shouldn't happen as it checks instantly)
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            disabled={showResult}
                            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex justify-between items-center ${buttonStyle}`}
                        >
                            <span className="font-medium text-lg">{option}</span>
                            {showResult && index === quiz.correctIndex && <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />}
                            {showResult && selectedAnswer === index && index !== quiz.correctIndex && <XCircle size={20} className="text-red-400 flex-shrink-0" />}
                        </button>
                    );
                })}
            </div>

            {showResult && (
                <div className="mt-8 animate-fade-in-up">
                    <div className={`p-4 rounded-xl mb-6 ${selectedAnswer === quiz.correctIndex ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'} border`}>
                        <p className={`font-bold mb-2 ${selectedAnswer === quiz.correctIndex ? 'text-green-400' : 'text-red-400'}`}>
                            {selectedAnswer === quiz.correctIndex ? correctText : incorrectText}
                        </p>
                        <p className="text-gray-300 text-sm">{quiz.explanation}</p>
                    </div>

                    <button
                        onClick={nextQuiz}
                        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                        {currentQuiz < quizzes.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                </div>
            )}
        </div>
    );
}
