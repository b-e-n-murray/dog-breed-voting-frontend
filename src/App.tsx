import { useState } from "react";
import HomePage from "./components/HomePage";
import Leaderboard from "./components/LeaderBoard";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  const [view, setView] = useState<"VotePage" | "LeaderboardPage">("VotePage")
  return (
    <>
      <NavBar setView = {setView}/>
      {view === "VotePage" ?
      <HomePage /> : <Leaderboard/>
      }
    </>
  );
}

export default App;
