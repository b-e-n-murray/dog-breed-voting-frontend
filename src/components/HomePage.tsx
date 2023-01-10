import axios from "axios";
import { useEffect, useState } from "react";

export const url = 'https://dog-breed-voting-backend.onrender.com'
//  : 'https://localhost:4000'
//  process.env.NODE_ENV === "production" ? 
interface BreedData{
    id: number;
    breedname: string;
    score: number;
}

function HomePage(): JSX.Element {
  // const randomiseBreed = () =>{

  // }

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  useEffect(() => {
    fetchAndStoreBreeds()
  }, [])

  //get all data - will run on every initial launch
  async function fetchAndStoreBreeds() {
      const fetchedData = await axios.get(`${url}/dogs/breeds`)
      const allBreeds : string[] = fetchedData.data.map((breedData : BreedData) => {return(breedData.breedname)})

  console.log(fetchedData)
  console.log(allBreeds)
    //   setImage(fetchedData.data.message)
  }

//   //get top ten breeds from leaderboard table with their respective scores
//   async function fetchAndStoreLeaderboard(): JSX.Element {
//     const fetchedData = await axios.get(`${url}/dogs/leaderboard`)
//     const allScores : LeaderboardData[] = fetchedData.map()
//   }

  //take 2 random breeds and make sure they are different-> breeds, breed[0], breed[1], randomiseBreed()[0]
  async function fetchAndStoreImages() {
    const image1 = await axios.get(
      `https://dog.ceo/api/breed/pug/images/random`
    );
    const image2 = await axios.get(
      `https://dog.ceo/api/breed/boxer/images/random`
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
