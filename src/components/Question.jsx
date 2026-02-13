import Answer from "./Answer.jsx";

function Question({ data }) {
  return (
    <div id="question-overview">
      <div id="question">
        <h2>{data.text}</h2>
      </div>

      <ul id="answers">
        {data.answers.map((answer, index) => (
          <Answer answer={answer} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Question;
