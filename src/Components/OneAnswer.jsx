export default function OneAnswer({
  m,
  correct,
  setReponse,
  click,
  correctAnswer,

  i,
}) {
  return (
    <>
      <div
        className={click && m === correctAnswer ? "correct" : "incorrect"}
        onClick={() => setReponse(m)}
      >
        {m}
      </div>
    </>
  );
}
