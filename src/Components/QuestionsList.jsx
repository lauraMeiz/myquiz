import data from "../data";
import { useState } from "react";
import Answer from "./Answer";
import unshuffledAnswers, { shuffleAnswers } from "../helper";
export default function Questions() {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [select, setSelect] = useState(0);
  const [click, setClick] = useState(false);
  const [next, setNext] = useState(0);

  const setReponse = (answer) => {
    const prev = [...data];

    prev.filter(
      (f) =>
        f.correctAnswer === answer && setCorrect((correct) => (correct += 1))
    );

    setClick(true);
  };

  const nextQuestion = () => {
    setNext((next) => (next += 1));
    return data[next];
  };

  const newQuestion = () => {
    nextQuestion();
    setClick(false);
  };

  return (
    <>
      <div>pradedam</div>
      <div>
        {" "}
        kiek {correct}/{data.length}
      </div>

      <ul>
        {data.map((question, i) => (
          <>
            <div>{i === next && question.question}</div>

            {i === next && (
              <Answer
                key={i}
                question={question}
                correctAnswer={question.correctAnswer}
                incorrectAnswer={question.incorrectAnswers}
                setReponse={setReponse}
                correct={correct}
                click={click}
              ></Answer>
            )}
          </>
        ))}
      </ul>
      <button onClick={newQuestion}>Next</button>
    </>
  );
}
