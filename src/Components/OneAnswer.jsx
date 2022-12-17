export default function OneAnswer({
  m,
  correct,
  setReponse,
  click,
  correctAnswer,
  select,
  setSelect,
}) {
  return (
    <>
      <div key={m} onClick={() => setReponse(m)}>
        {m}
      </div>
    </>
  );
}
