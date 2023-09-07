import { useContext } from "react"
import { PlayerContext } from "../App"

export default function History () {
  const {history, setBoardState} = useContext(PlayerContext);
  return (
    <>
      <h2>Come Back :</h2>
      {history.map((round, id) => <button key={id} onClick={() => {setBoardState(round); window.location.reload();}}>Move #{id + 1}</button> )}
    </>
  )
}