import {useContext, useState} from "react"
import { PlayerContext } from "../App"

export default function History () {
  const {moveHistory, setBoardState} = useContext(PlayerContext);
  const [test, setTest] = useState(false);
  return (
    <>
      <h2>Come Back :</h2>
      {moveHistory.map((round, id) => {
        return (
          <button key={id} onClick={() => {setBoardState(round); setTest(true)}}>
          Move #{id + 1}
          </button>
        )
      })}
    </>
  )
}