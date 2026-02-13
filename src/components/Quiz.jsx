import { useEffect } from "react";

import { useQuiz } from "../store/QuizContext";

import Progress from "./Progress.jsx";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const TIMER = 5000;
const DELAY = 1500;

function Quiz() {
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    questions,
    setCurrentQuestionAnswered,
    currentQuestionAnswered,
    selectAnswer,
  } = useQuiz();

  // onChange
  useEffect(() => {
    setCurrentQuestionAnswered(false);
    const timer = setTimeout(() => {
      selectAnswer(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, TIMER); // 5 секунд
    return () => clearTimeout(timer); // очистка при размонтировании или новом рендере
  }, [currentQuestionIndex]); // каждый раз, когда индекс меняется — перезапускаем таймер

  useEffect(() => {
    if (!currentQuestionAnswered) return;

    const delay = setTimeout(() => {
      setCurrentQuestionIndex((prev) => prev + 1);
    }, DELAY); // пауза чтобы показать цвет

    return () => clearTimeout(delay);
  }, [currentQuestionAnswered]);

  return (
    <>
      {questions[currentQuestionIndex] ? (
        <div id="quiz">
          <Progress duration={!currentQuestionAnswered ? TIMER : DELAY} />
          <Question data={questions[currentQuestionIndex]} />
        </div>
      ) : (
        <Summary />
      )}
    </>
  );
}

export default Quiz;
