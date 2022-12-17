export default function OneAnswer({
  m,
  correct,
  setReponse,
  click,
  correctAnswer,
  select,
  setSelect,
  letterMapping,
  index,
}) {
  console.log(correctAnswer, m, correct);
  return (
    <>
      <li className="answer" onClick={() => setReponse(m)}>
        <div className="answer-letter">{letterMapping[index]}</div>
        <div className="oneAnswer">{m}</div>
      </li>
    </>
  );
}
