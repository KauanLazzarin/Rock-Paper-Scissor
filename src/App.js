import ChooseScreen from "./components/choose-screen/ChooseScreen";
import Score from "./components/score/Score";

export default function App() {
  return (
    <div className="App">
      <Score />
      <ChooseScreen />
    </div>
  );
}