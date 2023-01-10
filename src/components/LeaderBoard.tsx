import { BreedData } from "./HomePage";

// const topDogs = [
//   { id: 10, name: "pug", score: 100 },
//   { id: 20, name: "spaniel", score: 50 },
//   { id: 5, name: "retriever", score: 30 },
// ];

interface LeaderboardProps {
  leaderboard: BreedData[];
}

function Leaderboard(props: LeaderboardProps): JSX.Element {
  return (
    <>
      <h1>Leaderboard</h1>
      <table>
        <tr>
          <th>Breed</th>
          <th>Score</th>
        </tr>
        {props.leaderboard.map((dog) => (
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
