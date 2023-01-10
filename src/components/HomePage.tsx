import axios from "axios";
import { useEffect, useState } from "react";

export const url = "https://dog-breed-voting-backend.onrender.com";
//  : 'https://localhost:4000'
//  process.env.NODE_ENV === "production" ?
interface BreedData {
  id: number;
  breedname: string;
  score: number;
}

function HomePage(): JSX.Element {
  

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [allBreeds, setAllBreeds] = useState<string[]>([]);
  const [leaderboard, setLeaderboard] = useState<BreedData[]>([])


  useEffect(() => {
    fetchAllData();
    fetchAndStoreImages();
  }, []);

  //get all data - will run on every initial launch
  async function fetchAllData() {
    const fetchedData = await axios.get(`${url}/dogs/breeds`);
    const allData = fetchedData.data
    const breedNames = allData.map((breedData: BreedData) => {
      return breedData.breedname;
    })
    setAllBreeds(breedNames);
    setLeaderboard(allData);
    console.log(breedNames)
  }



  const randomiseBreed = (): number[] => {
    let different = true
    let index1 = 0;
    let index2 = 0;
    while (different) {
      index1 = Math.floor(Math.random()*181); 
      index2 = Math.floor(Math.random()*181);
    if (index1 !== index2){
      different = false
    }
    }
    return [index1, index2]
  }

  //   //get top ten breeds from leaderboard table with their respective scores
  //   async function fetchAndStoreLeaderboard(): JSX.Element {
  //     const fetchedData = await axios.get(`${url}/dogs/leaderboard`)
  //     const allScores : LeaderboardData[] = fetchedData.map()
  //   }

  //take 2 random breeds and make sure they are different-> breeds, breed[0], breed[1], randomiseBreed()[0]
  async function fetchAndStoreImages() {
    // {allBreeds[randomiseBreed()[1]]}
    const breedIndeces = randomiseBreed()
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
      <h1>Dog Breed Voting App</h1>
      <button onClick={fetchAndStoreImages}>Get dog</button>
      <img src={image1} alt="random dog"></img>
      <img src={image2} alt="random dog"></img>
    </>
  );
}

export default HomePage;
