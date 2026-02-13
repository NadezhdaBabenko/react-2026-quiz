import { createContext, useContext, useState } from "react";
import questions from "./../questions.js";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState(false);

  function selectAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].answers[0];

    const userAnswer = {
      question: questions[currentQuestionIndex].text,
      questionIndex: currentQuestionIndex,
      selectedAnswer: answer,
      isCorrect: answer === null ? null : answer === correctAnswer,
    };

    setUserAnswers((prev) => [...prev, userAnswer]);
    setCurrentQuestionAnswered(true);
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        currentQuestionAnswered,
        setCurrentQuestionAnswered,
        userAnswers,
        selectAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}
