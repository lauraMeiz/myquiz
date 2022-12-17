import { shuffleAnswers } from "../helper.js";
import OneAnswer from "./OneAnswer";
export default function Answer({
  question,
  i,
  setReponse,
  correctAnswer,
  correct,
  click,
  incorrect,
}) {
  const letterMapping = ["A", "B", "C", "D"];

  const answers = shuffleAnswers(question);

  return (
    <>
      {answers.map((m, index) => (
        <>
          {/* <li className="answer" key={index}>
            <div className="answer-letter">{letterMapping[index]}</div> */}
          <OneAnswer
            click={click}
            correctAnswer={correctAnswer}
            correct={correct}
            incorrect={incorrect}
            m={m}
            setReponse={setReponse}
            letterMapping={letterMapping}
            index={index}
          ></OneAnswer>
          {/* </li> */}
        </>
      ))}
    </>
  );
}
