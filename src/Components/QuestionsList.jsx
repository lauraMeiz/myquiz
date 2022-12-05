import data from "../data";
import { useState } from "react";
import Answer from "./Answer";
export default function Questions() {
  //   const [questions, setQuestions] = useState([data]);
  //   const [data,setData]=useState([])
  //   const letterMapping = ["A", "B", "C", "D"];

  // s
  let i;
  return (
    <>
      <div>pradedam</div>

      <ul>
        {data.map((question, i) => (
          <>
            <div>{question.question}</div>

            <Answer key={i} question={question} i={i}></Answer>
          </>
        ))}
      </ul>
    </>
  );
}
