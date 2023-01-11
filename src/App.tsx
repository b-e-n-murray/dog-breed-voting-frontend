import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import HomePage, { BreedData } from "./components/HomePage";
import Leaderboard from "./components/LeaderBoard";
import NavBar from "./components/NavBar";
import { url } from "./components/HomePage";
import { randomiseBreed } from "./utils/randomiseBreed";
import "./App.css";

export interface Image {
  breedname: string;
  url: string;
}
function App(): JSX.Element {
  const [allBreeds, setAllBreeds] = useState<string[]>([]);
  const [image1, setImage1] = useState<Image>({ breedname: "", url: "" });
  const [image2, setImage2] = useState<Image>({ breedname: "", url: "" });
  const [view, setView] = useState<"VotePage" | "LeaderboardPage">("VotePage");

  const fetchAllData = useCallback(async () => {
    const fetchedData = await axios.get(`${url}/dogs/breeds`);
    const allData = fetchedData.data;
    const breedNames = allData.map((breedData: BreedData) => {
      return breedData.breedname;
    });
    setAllBreeds(breedNames);
    console.log(breedNames);
    fetchAndStoreImages(breedNames);
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  //get all data - will run on every initial launch

  //take 2 random breeds and make sure they are different-> breeds, breed[0], breed[1], randomiseBreed()[0]
  async function fetchAndStoreImages(breedNames: string[]) {
    const breedIndeces = randomiseBreed(); // => [x, y]
    const breedOne = breedNames[breedIndeces[0]];
    const breedTwo = breedNames[breedIndeces[1]];
    const image1 = await axios.get(
      `https://dog.ceo/api/breed/${breedOne}/images/random`
    );
    const image2 = await axios.get(
      `https://dog.ceo/api/breed/${breedTwo}/images/random`
    );
    console.log(image1);
    setImage1({ breedname: breedOne, url: image1.data.message });
    setImage2({ breedname: breedTwo, url: image2.data.message });
  }

  return (
    <>
      <NavBar setView={setView} />
      {view === "VotePage" ? (
        <HomePage
          fetchAndStoreImages={() => fetchAndStoreImages(allBreeds)}
          image1={image1}
          image2={image2}
        />
      ) : (
        <Leaderboard />
      )}
    </>
  );
}

export default App;
