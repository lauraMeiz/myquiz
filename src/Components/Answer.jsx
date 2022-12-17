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
          <li key={i}>
            <div>{letterMapping[index]}</div>
            <OneAnswer
              click={click}
              correctAnswer={correctAnswer}
              correct={correct}
              incorrect={incorrect}
              m={m}
              setReponse={setReponse}
              letterMapping={letterMapping}
            ></OneAnswer>
          </li>
        </>
      ))}
    </>
  );
}
