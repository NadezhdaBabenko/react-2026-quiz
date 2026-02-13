import { useQuiz } from "../store/QuizContext";
import summaryLogo from "./../assets/quiz-complete.png";

function Summary() {
  const { userAnswers } = useQuiz();

  const total = userAnswers.length;

  const correct = userAnswers.filter((a) => a.isCorrect === true).length;
  const wrong = userAnswers.filter((a) => a.isCorrect === false).length;
  const skipped = userAnswers.filter((a) => a.isCorrect === null).length;

  const result = [
    {
      id: "correct",
      title: "Answered correctly",
      amount: correct,
      percent: Math.round((correct / total) * 100),
    },
    {
      id: "wrong",
      title: "Answered incorrectly",
      amount: wrong,
      percent: Math.round((wrong / total) * 100),
    },
    {
      id: "skipped",
      title: "Skipped",
      amount: skipped,
      percent: Math.round((skipped / total) * 100),
    },
  ];

  function getAnswerClass(isCorrect) {
    switch (isCorrect) {
      case true:
        return "correct";
      case false:
        return "wrong";
      default:
        return "skipped";
    }
  }

  return (
    <div id="summary">
      <img src={summaryLogo} alt="Logo" />
      <h2>Quiz completed</h2>
      <ol id="summary-stats">
        {result.map(({ id, title, percent }) => (
          <li key={id}>
            <p className="number">{percent}%</p>
            <p className="text">{title}</p>
          </li>
        ))}
      </ol>

      <ol>
        {userAnswers.map(
          ({ question, questionIndex, selectedAnswer, isCorrect }) => (
            <li key={questionIndex}>
              <h3>{questionIndex + 1}</h3>
              <p className="question">{question}</p>
              <p className={`user-answer ${getAnswerClass(isCorrect)}`}>
                {isCorrect === null ? "No answer" : selectedAnswer}
              </p>
            </li>
          ),
        )}
      </ol>
    </div>
  );
}

export default Summary;
