import { useContext } from "react"
import { PlayerContext } from "../App"

export default function History () {
  const {moveHistory, setBoardState} = useContext(PlayerContext);
  return (
    <>
      <h2>Come Back :</h2>
      {moveHistory.map((round, id) => <button key={id} onClick={() => {setBoardState(round); window.location.reload();}}>Move #{id + 1}</button> )}
    </>
  )
}