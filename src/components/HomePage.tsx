import axios from "axios"
import { useState } from "react"
import NavBar from "./NavBar"

function HomePage(): JSX.Element {
    const [image, setImage] = useState("")
    const [view, setView] = useState<"VotePage" | "LeaderboardPage">("VotePage")
    async function fetchAndStoreRandomImage() {
        const fetchedData = await axios.get('https://dog.ceo/api/breeds/image/random')
        // console.log(fetchedData)
        setImage(fetchedData.data.message)
    }
    
    console.log(view)
    return (
        <>
      <NavBar setView = {setView}/>
            <h1>Dog Breed Voting App</h1>
            <button onClick={fetchAndStoreRandomImage} >Get dog</button>
            <img src={image} alt="random dog"></img>
        </>
    )
}

export default HomePage