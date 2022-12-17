export default function AllA({ res, resIncorrect, resCorrect }) {
  console.log(resIncorrect);
  return (
    <>
      <div className={res === resCorrect ? "correct" : "incorrect"}>{res}</div>
    </>
  );
}
