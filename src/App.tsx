import axios from "axios";
import { useEffect, useState } from "react";
import HomePage, { BreedData } from "./components/HomePage";
import Leaderboard from "./components/LeaderBoard";
import NavBar from "./components/NavBar";
import { url } from "./components/HomePage";

function App(): JSX.Element {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [allBreeds, setAllBreeds] = useState<string[]>([]);
  const [view, setView] = useState<"VotePage" | "LeaderboardPage">("VotePage");
  const [leaderboard, setLeaderboard] = useState<BreedData[]>([]);
  const randomiseBreed = (): number[] => {
    let different = true;
    let index1 = 0;
    let index2 = 0;
    while (different) {
      index1 = Math.floor(Math.random() * 181);
      index2 = Math.floor(Math.random() * 181);
      if (index1 !== index2) {
        different = false;
      }
    }
    return [index1, index2];
  };
  useEffect(() => {
    fetchAllData();
    fetchAndStoreImages();
  }, []);
  //get all data - will run on every initial launch
  async function fetchAllData() {
    const fetchedData = await axios.get(`${url}/dogs/breeds`);
    const allData = fetchedData.data;
    const breedNames = allData.map((breedData: BreedData) => {
      return breedData.breedname;
    });
    const allLeaderboardData = await axios.get(`${url}/dogs/leaderboard`);
    const leaderboardData = allLeaderboardData.data;
    setAllBreeds(breedNames);
    setLeaderboard(leaderboardData);
    console.log(breedNames);
  }
  //take 2 random breeds and make sure they are different-> breeds, breed[0], breed[1], randomiseBreed()[0]
  async function fetchAndStoreImages() {
    // {allBreeds[randomiseBreed()[1]]}
    const breedIndeces = randomiseBreed();
    const image1 = await axios.get(
      `https://dog.ceo/api/breed/${allBreeds[breedIndeces[0]]}/images/random`
    );
    const image2 = await axios.get(
      `https://dog.ceo/api/breed/${allBreeds[breedIndeces[1]]}/images/random`
    );
    console.log(image1);
    setImage1(image1.data.message);
    setImage2(image2.data.message);
  }

  return (
    <>
      <NavBar setView={setView} />
      {view === "VotePage" ? (
        <HomePage
          fetchAndStoreImages={fetchAndStoreImages}
          image1={image1}
          image2={image2}
        />
      ) : (
        <Leaderboard leaderboard={leaderboard} />
      )}
    </>
  );
}

export default App;
