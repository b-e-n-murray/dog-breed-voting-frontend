

export const url = "https://dog-breed-voting-backend.onrender.com";
//  : 'https://localhost:4000'
//  process.env.NODE_ENV === "production" ?
export interface BreedData {
  id: number;
  breedname: string;
  score: number;
}


interface HomePageProps{
  fetchAndStoreImages: ()=> Promise<void>;
  image1:string;
  image2:string;
}
function HomePage({fetchAndStoreImages, image1, image2}: HomePageProps): JSX.Element {

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
