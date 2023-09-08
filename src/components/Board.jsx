import { useContext, useState, useEffect } from "react"
import  PlayerContext  from "../contexts/PlayerContext"
import Square from "./Square";
import BoardContext from "../contexts/BoardContext";
import HistoryContext from "../contexts/HistoryContext";
import { useNavigate } from "react-router";

export default function Board() {
  const [whichPlayer, setWhichPlayer] = useState(true);
  const {player1, player2 } = useContext(PlayerContext);
  const { setWinner, setIsEndGame, boardState, setBoardState } = useContext(BoardContext);
  const { moveHistory, setMoveHistory, localScoreHistory, setLocalScoreHistory, sessionScore, setSessionScore } = useContext(HistoryContext);
  const navigate = useNavigate();

  console.log("render.board", boardState)
  
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
        console.log(...localScoreHistory)
        setLocalScoreHistory([...localScoreHistory,whichPlayer ? `Vainqueur: ${player1}` : `Vainqueur: ${player2}`])
        setSessionScore([...sessionScore,whichPlayer ? `Vainqueur: ${player1}` : `Vainqueur: ${player2}`])
        setIsEndGame(true);
        return navigate("/end-game")
      }
    })
    const boardFull = boardState.find((element) => element === null)
      if(boardFull === undefined){
        setBoardState(Array(9).fill(null));
        setWinner('Match nul')
        setLocalScoreHistory([...localScoreHistory,'Match nul'])
        setSessionScore([...sessionScore,'Match nul'])
        setIsEndGame(true);
        return navigate("/end-game")
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[boardState])

  function handleVictory (i) {
    const currentBoardState = boardState.slice();
    setWhichPlayer(!whichPlayer);
    currentBoardState[i] = whichPlayer ? 'O' : 'X';
    setBoardState(currentBoardState);
    setMoveHistory([...moveHistory,currentBoardState]);
  }

  // const [boardtest, setBoardtest] = useState([]);
  //
  // useEffect(() => {
  //   const currentBoard = boardState
  //   setBoardtest(currentBoard)
  // }, [boardState])

  return(
    <>
      <div className="playerWrap">
        <p>player 1: <span className={"player1"}>{player1}</span></p>
        <p>player 2: <span className={"player2"}>{player2}</span></p>
      </div>
      <p>C'est à {whichPlayer ? player1 : player2} de jouer !</p>
      <section className="grid">
        {/*@todo generate square with map*/}
        <div className="row">
          <Square symbol={whichPlayer} onClick={() => handleVictory(0)} value={0}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(1)} value={1}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(2)} value={2}/>
        </div>
        <div className="row">
          <Square symbol={whichPlayer} onClick={() => handleVictory(3)} value={3}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(4)} value={4}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(5)} value={5}/>
        </div>
        <div className="row">
          <Square symbol={whichPlayer} onClick={() => handleVictory(6)} value={6}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(7)} value={7}/>
          <Square symbol={whichPlayer} onClick={() => handleVictory(8)} value={8}/>
        </div>
      </section>
    </>
  )
}