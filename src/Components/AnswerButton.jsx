import GoodAnswer from "./GoodAnswer";
import datas from "../datas.js";
import { useState } from "react";
import AllQ from "./AllQ";

export default function AnswerButton() {
  const [allData, setAllData] = useState(datas);
  const [modal, setModal] = useState(false);

  const show = () => {
    setAllData(allData);
    setModal(true);
  };

  return (
    <>
      <button onClick={show}>All Answers</button>
      {modal &&
        allData.map((all, ind) => (
          <>
            <AllQ all={all} ques={all.question}></AllQ>
          </>
        ))}
    </>
  );
}
