import datas from "../datas.js";
import { useState } from "react";
import Answer from "./Answer";
import React from "react";

export default function Questions() {
  const [correct, setCorrect] = useState(0);
  const [click, setClick] = useState(false);
  const [next, setNext] = useState(0);
  const [data, setData] = useState(datas);

  const setReponse = (answer) => {
    setClick(true);
    const prev = [...data];

    prev.filter(
      (f) =>
        f.correctAnswer === answer && setCorrect((correct) => (correct += 1))
    );
    newQuestion();
  };
  const reset = () => {
    setNext(0);
    setCorrect(0);
    setClick(false);

    console.log(data);
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
      <div className="total">
        Total {correct}/{data.length}
      </div>

      <div>{correct === data.length ? "Wow, nice" : null}</div>
      <ul>
        {data.map((question, i) => (
          <>
            <div key={i} className="question-column">
              <div className="question">{i === next && question.question}</div>

              {i === next && (
                <Answer
                  question={question}
                  correctAnswer={question.correctAnswer}
                  incorrectAnswer={question.incorrectAnswers}
                  setReponse={setReponse}
                  correct={correct}
                  click={click}
                ></Answer>
              )}
            </div>
          </>
        ))}
      </ul>

      <button onClick={reset}>Try again</button>
    </>
  );
}
