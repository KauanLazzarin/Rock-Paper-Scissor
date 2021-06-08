import ChooseScreen from "./components/choose-screen/ChooseScreen";
import Score from "./components/score/Score";
import WinnerScreen from "./components/winner-screen/WinnerScreen";
import GameContextProvider from "./contexts/GameContext";

export default function App () {

  return (
    <GameContextProvider>
      <Score />
      <ChooseScreen />
    </GameContextProvider>
  );
}