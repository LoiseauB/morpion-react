import { useContext, useEffect, useState } from "react"
import BoardContext from "../contexts/BoardContext";

export default function Square({symbol, onClick, value}) {
  const { boardState, setBoardState } = useContext(BoardContext);
  const [isDisable, setIsDisable] = useState(false);

  function handleClick() {
    const currentBoardState = boardState.slice();
    currentBoardState[value] = symbol ? 'O' : 'X';
    setBoardState(currentBoardState);
  }

  useEffect(() => {
    boardState[value] !== null ? setIsDisable(true) : setIsDisable(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[boardState[value]])

  return (
    <>
      <button
        disabled={isDisable}
        className={
          "square "
          + (boardState[value] === "O" ? "player1" : "")
          + (boardState[value] === "X" ? "player2" : "")
        }
        onClick={() => {handleClick(); onClick()}}>{boardState[value] !== null ? boardState[value] : '_'}
      </button>
    </>
  )
}