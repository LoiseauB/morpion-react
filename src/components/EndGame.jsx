import { useContext } from "react"
import { PlayerContext } from "../App"

export default function EndGame ({winner}) {
  const { setPlayer1, setPlayer2, setIsEndGame, setMoveHistory} = useContext(PlayerContext);
  return (
    <>
      <p>{winner !== 'Match nul' ? `${winner} a gagné !` : 'Match nul'}</p>
      <button onClick={() => {
        setIsEndGame(false);
        setMoveHistory([]);
        }}>
          Revanche !
      </button>

      <button onClick={() =>{
        setPlayer1('');
        setPlayer2('');
        setIsEndGame(false);
        setMoveHistory([]);
      }}>
        Nouvelle partie
      </button>
    </>
  )
}