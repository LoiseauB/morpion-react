import {useContext} from "react"
import BoardContext from "../contexts/BoardContext";
import HistoryContext from "../contexts/HistoryContext";

export default function History () {
  const {setBoardState} = useContext(BoardContext);
  const {moveHistory} = useContext(HistoryContext);
  return (
    <>
      <h2>Come Back :</h2>
      {moveHistory.map((round, id) => {
        return (
          <button key={id} onClick={() => setBoardState(round)}>
          Move #{id + 1}
          </button>
        )
      })}
    </>
  )
}