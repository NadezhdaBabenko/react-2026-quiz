import { useEffect, useState } from "react";
import { useQuiz } from "../store/QuizContext";

function Progress({ duration }) {
  const { currentQuestionAnswered } = useQuiz();
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    setRemainingTime(duration);

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 100) {
          clearInterval(interval);
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <progress
      className={currentQuestionAnswered ? "progress answered" : "progress"}
      value={remainingTime}
      max={duration}
    ></progress>
  );
}

export default Progress;
