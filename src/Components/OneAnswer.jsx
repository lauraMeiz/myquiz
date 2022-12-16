export default function OneAnswer({
  m,
  correct,
  setReponse,
  click,
  correctAnswer,
}) {
  return (
    <>
      <div
        className={
          click && m === correctAnswer && correct ? "correct" : "neutre"
        }
        onClick={() => setReponse(m)}
      >
        {m}
      </div>
    </>
  );
}
