import { useEffect } from "react";
import { useQuiz } from "../store/QuizContext.jsx";
import { use } from "react";

function Answer({ answer }) {
  const { userAnswers, selectAnswer, currentQuestionIndex } = useQuiz();

  const currentUserAnswer = userAnswers.find(
    (entry) => entry.questionIndex === currentQuestionIndex,
  );

  const isSelected = !!currentUserAnswer?.selectedAnswer;
  const isCorrect = currentUserAnswer?.isCorrect;

  function getAnswerClass() {
    if (!isSelected) return "";
    if (currentUserAnswer.selectedAnswer !== answer) return "";

    if (isCorrect === null) return "";
    return isCorrect ? "correct" : "wrong";
  }

  return (
    <li className="answer">
      <button
        onClick={() => selectAnswer(answer)}
        className={getAnswerClass()}
        disabled={!!currentUserAnswer}
      >
        {answer}
      </button>
    </li>
  );
}

export default Answer;
