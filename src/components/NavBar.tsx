
interface NavBarProps {
    setView: React.Dispatch<React.SetStateAction<"VotePage" | "LeaderboardPage">>
}

function NavBar({setView} : NavBarProps): JSX.Element {
    return (
        <>
            <button onClick={() => {setView("VotePage")}}>Vote</button>
            <button onClick={() => {setView("LeaderboardPage")}}>Leaderboard</button>
        </>
    )
}

export default NavBar