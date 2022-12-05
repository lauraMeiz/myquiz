import { useState } from "react";
import data from "../data";
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
  console.log(answers);

  return (
    <>
      {/* <div>negeras{incorrect}</div> */}
      <li>
        <div>
          {" "}
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
                {}
                {/* <div
                    className={
                      click && m === correctAnswer ? "correct" : "incorrect"
                    }
                  >
                    {m}
                  </div> */}
                {/* </div> */}
              </>
            ))}
          </div>
        </div>
      </li>
    </>
  );
}
