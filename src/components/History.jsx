import {useContext} from "react"
import BoardContext from "../contexts/BoardContext";
import HistoryContext from "../contexts/HistoryContext";
import {key} from "localforage";

export default function History () {
  const {setBoardState} = useContext(BoardContext);
  const {moveHistory, setMoveHistory} = useContext(HistoryContext);

  function handleClick(round, id) {
    setBoardState(round);
    setMoveHistory(moveHistory.slice(0, (id + 1)))
  }

  return (
    <>
      <h2>Come Back :</h2>
      {moveHistory.map((round, id) => {
        return (
          <button
            className={
              "historyButton " +
              (id % 2 === 0 ? "player1" : "player2")
            }
            key={id}
            onClick={() => handleClick(round, id)}
          >
          Move #{id + 1}
          </button>
        )
      })}
    </>
  )
}