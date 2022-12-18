import datas from "../datas.js";
import { useState } from "react";
import Answer from "./Answer";
import React from "react";
import AnswerButton from "./AnswerButton.jsx";

export default function Questions() {
  const [correct, setCorrect] = useState(0);
  const [click, setClick] = useState(false);
  const [next, setNext] = useState(0);
  const [allData, setAllData] = useState(datas);
  const [modal, setModal] = useState(false);

  const show = () => {
    setAllData(allData);
    setModal(true);
  };
  const close = () => {
    setModal(false);
  };
  const setReponse = (answer) => {
    setClick(true);
    const prev = [...allData];

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
    setModal(false);
  };

  const nextQuestion = () => {
    setNext((next) => (next += 1));
    return allData[next];
  };

  const newQuestion = () => {
    nextQuestion();
    setClick(false);
  };

  return (
    <>
      <div className="total">
        Total {correct}/{allData.length}
      </div>

      <div>{correct === allData.length ? "Wow, nice" : null}</div>
      <ul>
        {allData.map((question, i) => (
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
      <AnswerButton
        show={show}
        allData={allData}
        modal={modal}
        close={close}
      ></AnswerButton>
    </>
  );
}
