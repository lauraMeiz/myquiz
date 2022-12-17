import "./App.css";
import AnswerButton from "./Components/AnswerButton";
import GoodAnswer from "./Components/GoodAnswer";
import Questions from "./Components/Questions";

function App() {
  // const [data, setData] = useState(datas);
  return (
    <div className="App">
      <h1>Quiz</h1>
      <Questions></Questions>
      <AnswerButton></AnswerButton>
    </div>
  );
}

export default App;
