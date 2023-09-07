import { useContext } from "react"
import { PlayerContext } from "./App"

export default function EndGame ({winner}) {
  const { setPlayer1, setPlayer2, setIsEndGame} = useContext(PlayerContext);
  return (
    <>
      <p>{winner ? `${winner} a gagné !` : 'Match nul'}</p>
      <button onClick={() => setIsEndGame(false)}>Revanche !</button>
      <button onClick={() =>{
        setPlayer1('');
        setPlayer2('');
        setIsEndGame(false);
      }}>Nouvelle partie</button>
    </>
  )
}