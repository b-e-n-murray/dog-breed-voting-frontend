import axios from "axios";
import { Image } from "../App";
import { formatBreedname } from "../utils/formatBreedname";

export const url =
  process.env.NODE_ENV === "production"
    ? "https://dog-breed-voting-backend.onrender.com"
    : "http://localhost:4000";

export interface BreedData {
  id: number;
  breedname: string;
  score: number;
}

interface HomePageProps {
  fetchAndStoreImages: () => Promise<void>;
  image1: Image;
  image2: Image;
}
function HomePage({
  fetchAndStoreImages,
  image1,
  image2,
}: HomePageProps): JSX.Element {
  async function submitVote(ImageBreedName: string) {
    console.log("calling submit vote, breed:", ImageBreedName);
    await axios.patch(`${url}/dogs/breed/vote`, { breedname: ImageBreedName });
    fetchAndStoreImages();
  }

  return (
    <>
      <div className="wholePage">
        <h1>Dog Breed Voting App</h1>
        <div className="dogPage">
          <span className="dogCard">
            <div onClick={() => submitVote(image1.breedname)}>
              <img
                src={image1.url}
                alt="random dog"
                className="voteImage"
              ></img>
              <h4 className="breedname-txt">
                {image1.breedname && formatBreedname(image1.breedname)}
              </h4>
            </div>
          </span>
          <span className="dogCard">
            <div onClick={() => submitVote(image2.breedname)}>
              <img
                src={image2.url}
                alt="random dog"
                className="voteImage"
              ></img>
              <h4 className="breedname-txt">
                {" "}
                {image2.breedname && formatBreedname(image2.breedname)}
              </h4>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default HomePage;
