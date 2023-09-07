import { useContext, useState, useEffect } from "react"
import { PlayerContext } from "../App"
import Square from "./Square";

export default function Board() {
  const [whichPlayer, setWhichPlayer] = useState(true);
  const {
    player1,
    player2,
    setWinner,
    setIsEndGame,
    boardState, setBoardState,
    history,
    setHistory
  } = useContext(PlayerContext);

  
  useEffect(()=>{
    const victoryPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
    victoryPattern.forEach((pattern) => {
      if(boardState[pattern[0]] === boardState[pattern[1]] && boardState[pattern[1]] === boardState[pattern[2]] && boardState[pattern[0]] !== null){
        setBoardState(Array(9).fill(null));
        setWinner(whichPlayer ? player1 : player2)
        setIsEndGame(true);
      }
    })
    const boardFull = boardState.find((element) => element === null)
      if(boardFull === undefined){
        setBoardState(Array(9).fill(null));
        setIsEndGame(true);
      }
  },[boardState])

  function handleVictory (i) {
    const currentBoardState = boardState.slice();
    setWhichPlayer(!whichPlayer);
    currentBoardState[i] = whichPlayer ? 'O' : 'X';
    setBoardState(currentBoardState);
    setHistory([...history,currentBoardState]);
    
  }

  return(
    <>
    <p>player 1: {player1}</p>
    <p>player 2: {player2}</p>
    <p>C'est à {whichPlayer ? player1 : player2} de jouer !</p>
      <section className="grid">
        {/*@todo generate square with map*/}
        <div className="row">
          <Square symbol={whichPlayer} onClick={() => handleVictory(0)} value={boardState[0]}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(1)} value={boardState[1]}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(2)} value={boardState[2]}/>
        </div>
        <div className="row">
          <Square symbol={whichPlayer} onClick={() => handleVictory(3)} value={boardState[3]}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(4)} value={boardState[4]}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(5)} value={boardState[5]}/>
        </div>
        <div className="row">
          <Square symbol={whichPlayer} onClick={() => handleVictory(6)} value={boardState[6]}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(7)} value={boardState[7]}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(8)} value={boardState[8]}/>
        </div>
      </section>
    
    </>
  )
}