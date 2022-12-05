import data from "../data";
import { shuffleAnswers } from "../helper.js";
export default function Answer({ question, i }) {
  const letterMapping = ["A", "B", "C", "D"];
  //   const unshuffledAnswers = [data.correctAnswer, ...data.incorrectAnswers];
  const answers = shuffleAnswers(question);
  return (
    <>
      <li>
        <div>
          {" "}
          {console.log(answers)}
          <div>
            {answers.map((m, i) => (
              <>
                <div>{letterMapping[i]}</div>
                <div>{m}</div>
              </>
            ))}
          </div>
        </div>
      </li>
    </>
  );
}
