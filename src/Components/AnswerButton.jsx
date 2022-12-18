import AllQ from "./AllQ";

export default function AnswerButton({ modal, show, allData, close }) {
  return (
    <>
      <div className="modal">
        {modal ? (
          <button className="close" onClick={close}>
            Close
          </button>
        ) : (
          <button className="answers" onClick={show}>
            Answers
          </button>
        )}
        {modal &&
          allData.map((all, ind) => (
            <>
              <AllQ key={ind} all={all} ques={all.question}></AllQ>
            </>
          ))}
      </div>
    </>
  );
}
