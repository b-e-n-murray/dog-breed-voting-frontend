import { BreedData } from "./HomePage";
import {useState} from "react"
import axios from "axios"
import { url } from "./HomePage";

// const topDogs = [
//   { id: 10, name: "pug", score: 100 },
//   { id: 20, name: "spaniel", score: 50 },
//   { id: 5, name: "retriever", score: 30 },
// ];

// interface LeaderboardProps {
//   leaderboard: BreedData[];
// }

function Leaderboard(): JSX.Element {

const [leaderboard, setLeaderboard] = useState<BreedData[]>([]);

  async function fetchLeaderboard() {
    const allLeaderboardData = await axios.get(`${url}/dogs/leaderboard`);
    const leaderboardData = allLeaderboardData.data;
    setLeaderboard(leaderboardData);
  }
    
  return (
    <>
      <h1>Leaderboard</h1>
      <button onClick = {fetchLeaderboard}>Refresh Leaderboard</button>
      <table>
        <tr>
          <th>Breed</th>
          <th>Score</th>
        </tr>
        {leaderboard.map((dog) => (
          <tr key={dog.id}>
            <td>{dog.breedname}</td>
            <td>{dog.score}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Leaderboard;
