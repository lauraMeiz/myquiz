import AllA from "./AllA";

export default function AllQ({ ques, all }) {
  const unshuffledAnswers = [all.correctAnswer, ...all.incorrectAnswers];
  console.log(unshuffledAnswers);
  return (
    <>
      <div className="question">{ques}</div>

      {unshuffledAnswers.map((res, ind) => (
        <>
          <AllA
            key={ind}
            res={res}
            resIncorrect={all.incorrectAnswers}
            resCorrect={all.correctAnswer}
          ></AllA>
        </>
      ))}
    </>
  );
}
