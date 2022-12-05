import data from "../data";
import { useState } from "react";
import Answer from "./Answer";
import unshuffledAnswers from "../helper";
export default function Questions() {
  const [correct, setCorrect] = useState(0);
  const [select, setSelect] = useState(0);
  //   const [incorrect, setIncorrect] = useState(0);
  const [click, setClick] = useState(false);

  const setReponse = (answer, i) => {
    data.filter(
      (f) =>
        f.correctAnswer === answer && setCorrect((correct) => (correct += 1))
    );
    setClick(true);
  };
  return (
    <>
      <div>pradedam</div>
      <div> kiek {correct}</div>
      <ul>
        {data.map((question, i) => (
          <>
            <div>{question.question}</div>

            <Answer
              key={i}
              question={question}
              correctAnswer={question.correctAnswer}
              incorrectAnswer={question.incorrectAnswers}
              setReponse={setReponse}
              correct={correct}
              click={click}
              i={i}
            ></Answer>
          </>
        ))}
      </ul>
    </>
  );
}
