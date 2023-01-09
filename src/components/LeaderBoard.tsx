
const topDogs = [{id:10,name: "pug", score: 100}, {id:20,name: "spaniel", score: 50}, {id: 5,name: "retriever", score: 30}]

function Leaderboard(): JSX.Element{
return(<>
<h1>Leaderboard</h1>
<table>
    <tr>
        <th>Breed</th>
        <th>Score</th>
    </tr>
    {topDogs.map(dog => 
    <tr key = {dog.id}>
        <td>{dog.name}</td>
        <td>{dog.score}</td>
    </tr>

    )}
    
</table>
</>)
}

export default Leaderboard