import { shuffleAnswers } from "../helper.js";
import OneAnswer from "./OneAnswer";
export default function Answer({
  question,
  i,
  setReponse,
  correctAnswer,
  correct,
  click,
}) {
  const letterMapping = ["A", "B", "C", "D"];

  const answers = shuffleAnswers(question);

  return (
    <>
      <div className="neutre">
        <div>
          {answers.map((m, i) => (
            <>
              <div>{letterMapping[i]}</div>
              <OneAnswer
                click={click}
                correctAnswer={correctAnswer}
                key={i}
                correct={correct}
                m={m}
                setReponse={setReponse}
              ></OneAnswer>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
