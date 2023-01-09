import axios from "axios"
import { useState } from "react"

function HomePage(): JSX.Element {
    const [image, setImage] = useState("")
    async function fetchAndStoreRandomImage() {
        const fetchedData = await axios.get('https://dog.ceo/api/breeds/image/random')
        // console.log(fetchedData)
        setImage(fetchedData.data.message)
    }
    
    return (
        <>
            <h1>Dog Breed Voting App</h1>
            <button onClick={fetchAndStoreRandomImage} >Get dog</button>
            <img src={image} alt="random dog"></img>
        </>
    )
}

export default HomePage