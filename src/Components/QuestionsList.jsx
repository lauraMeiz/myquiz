import data from "../data";
import { useState } from "react";
import Answer from "./Answer";
export default function Questions() {
  //   const [questions, setQuestions] = useState([data]);
  //   const [data,setData]=useState([])
  // s
  let i;
  return (
    <>
      <div>pradedam</div>

      <ul>
        {data.map((data, i) => (
          <>
            <Answer key={i} data={data} i={i}></Answer>
          </>
        ))}
      </ul>
    </>
  );
}
