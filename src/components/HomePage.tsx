import axios from "axios"
import { useState } from "react"

function HomePage(): JSX.Element {

    // const randomiseBreed = () =>{

    // }

    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")

    // async function fetchAndStoreBreeds() {
    //     const fetchedData = await axios.get('')
    //     const allBreeds :string[]= fetchedData.map(obj => {return(Object.breedName)})
        
        // console.log(fetchedData)
    //     setImage(fetchedData.data.message)
    // }
    
    //take 2 random breeds and make sure they are different-> breeds, breed[0], breed[1], randomiseBreed()[0]
    async function fetchAndStoreImages() {
        const image1 = await axios.get(`https://dog.ceo/api/breed/pug/images/random`)
        const image2 = await axios.get(`https://dog.ceo/api/breed/boxer/images/random`)
        console.log(image1)
        setImage1(image1.data.message)
        setImage2(image2.data.message)

    }


    return (
        <>
            <h1>Dog Breed Voting App</h1>
            <button onClick={fetchAndStoreImages} >Get dog</button>
            <img src={image1} alt="random dog"></img>
            <img src={image2} alt="random dog"></img>

        </>
    )
}

export default HomePage