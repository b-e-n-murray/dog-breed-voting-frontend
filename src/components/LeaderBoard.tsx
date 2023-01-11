import { BreedData } from "./HomePage";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { url } from "./HomePage";
import "../App.css"


interface Iimage {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
}

function Leaderboard(): JSX.Element {
  const [leaderboard, setLeaderboard] = useState<BreedData[]>([]);
  const [images, setImages] = useState<Iimage>({
    imageOne: "",
    imageTwo: "",
    imageThree: "",
  });
 
  
  async function fetchLeaderboard(): Promise<BreedData[]> {
    const allLeaderboardData = await axios.get(`${url}/dogs/leaderboard`);
    const leaderboardData = allLeaderboardData.data;
    setLeaderboard(leaderboardData);
    return leaderboardData;
  }

  async function fetchTopThree(breedList: BreedData[]) {
    console.log(breedList, "breed list");
    console.log(breedList[0].breedname);
    const image1 = await axios.get(
      `https://dog.ceo/api/breed/${breedList[0].breedname}/images/random`
    );
    const image2 = await axios.get(
      `https://dog.ceo/api/breed/${breedList[1].breedname}/images/random`
    );
    const image3 = await axios.get(
      `https://dog.ceo/api/breed/${breedList[2].breedname}/images/random`
    );
    setImages({
      imageOne: image1.data.message,
      imageTwo: image2.data.message,
      imageThree: image3.data.message,
    });
  }

  const fetchAllData = useCallback(async () => {
    const newLeaderboard = await fetchLeaderboard();
    await fetchTopThree(newLeaderboard);
  }, [])
  useEffect(()=>{
    fetchAllData()
  }, [fetchAllData])

  return (
    <>
      <h1>Leaderboard</h1>
      <button onClick={fetchAllData}>Refresh Leaderboard</button>
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
      <>
        <div className = "leaderboard-img">
          <div>
          <img src={images?.imageOne} alt="" />
          <p>🥇</p>
          </div>
          <div>
          <img src={images?.imageTwo} alt="" />
          <p>🥈</p>
          </div>
          <div>
          <img src={images?.imageThree} alt="" />
          <p>🥉</p>
          </div>
        </div>
      </>
    </>
  );
}

// `https://dog.ceo/api/breed/${leaderboard[0].breedname}/images/random`
export default Leaderboard;
