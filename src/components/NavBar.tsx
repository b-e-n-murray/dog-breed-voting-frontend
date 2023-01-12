interface NavBarProps {
  setView: React.Dispatch<React.SetStateAction<"VotePage" | "LeaderboardPage">>;
}

function NavBar({ setView }: NavBarProps): JSX.Element {
  return (
    <>
    <div className = "navPage">
      <button className = "button-53"
        onClick={() => {
          setView("VotePage");
        }}
      >
        Vote
      </button>
      <button className = "button-53"
        onClick={() => {
          setView("LeaderboardPage");
        }}
      >
        Leaderboard
      </button>
      </div>
    </>
  );
}

export default NavBar;
