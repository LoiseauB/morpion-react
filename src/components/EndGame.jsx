import { useContext } from "react"
import  PlayerContext  from "../contexts/PlayerContext"
import BoardContext from "../contexts/BoardContext";
import HistoryContext from "../contexts/HistoryContext";
import { useNavigate } from "react-router-dom";

export default function EndGame () {
  const { setPlayer1, setPlayer2} = useContext(PlayerContext);
  const {setIsEndGame, winner} = useContext(BoardContext);
  const {setMoveHistory} = useContext(HistoryContext);
  const navigate = useNavigate();
  return (
    <>
      <p>{winner !== 'Match nul' ? `${winner} a gagné !` : 'Match nul'}</p>
      <button onClick={() => {
        setIsEndGame(false);
        setMoveHistory([]);
        return navigate("/game")
        }}>
          Revanche !
      </button>

      <button onClick={() =>{
        setPlayer1('');
        setPlayer2('');
        setIsEndGame(false);
        setMoveHistory([]);
        return navigate("/input/player1")
      }}>
        Nouvelle partie
      </button>
    </>
  )
}