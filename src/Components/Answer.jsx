import data from "../data";
import { shuffleAnswers } from "../helper.js";
export default function Answer({ data, i }) {
  const letterMapping = ["A", "B", "C", "D"];
  //   const unshuffledAnswers = [data.correctAnswer, ...data.incorrectAnswers];

  return (
    <>
      <li>
        <div>{data.question}</div>
        <div className="answer-letter">{letterMapping[i]}</div>
        <div>{shuffleAnswers(data)}</div>
      </li>
    </>
  );
}
