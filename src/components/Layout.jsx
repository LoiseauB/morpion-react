import { useEffect, useState } from "react";
import PlayerContext from "../contexts/PlayerContext";
import BoardContext from "../contexts/BoardContext";
import HistoryContext from "../contexts/HistoryContext";
import { Outlet } from "react-router-dom";

import "../style/App.css"


export default function Layout () {
  const [player1, setPlayer1] = useState(JSON.parse(localStorage.getItem("player1")) || '');
  const [player2, setPlayer2] = useState(JSON.parse(localStorage.getItem("player2")) || '');
  const [isEndGame, setIsEndGame] = useState(false);
  const [boardState, setBoardState] = useState(JSON.parse(localStorage.getItem("boardState")) || Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [moveHistory, setMoveHistory] = useState(JSON.parse(localStorage.getItem("moveHistory")) || []);
  const [localScoreHistory, setLocalScoreHistory] = useState(JSON.parse(localStorage.getItem('localScoreHistory')) || []);
  const [sessionScore, setSessionScore] = useState(sessionStorage.getItem("sessionScore") || []);

  useEffect(() => {
    localStorage.setItem("boardState", JSON.stringify(boardState));
}, [boardState]);

  useEffect(() => {
    localStorage.setItem("player1", JSON.stringify(player1));
    localStorage.setItem("player2", JSON.stringify(player2));
    
  }, [player1, player2]);

  useEffect(() => {
    localStorage.setItem("moveHistory", JSON.stringify(moveHistory));
}, [moveHistory]);

  useEffect(() => {
    localStorage.setItem("localScoreHistory", JSON.stringify(localScoreHistory));
    console.log(localScoreHistory)
  }, [localScoreHistory]);

  useEffect(() => {
    sessionStorage.setItem("sessionScoreHistory", JSON.stringify(sessionScore));
  }, [sessionScore]);

  return (
    <PlayerContext.Provider value={{player1, setPlayer1, player2, setPlayer2}}>
      <BoardContext.Provider value={{boardState, setBoardState, isEndGame, setIsEndGame, winner, setWinner}}>
        <HistoryContext.Provider value={{moveHistory, setMoveHistory, localScoreHistory, setLocalScoreHistory, sessionScore, setSessionScore}}>
          <main>
            <Outlet />
          </main>
        </HistoryContext.Provider>
      </BoardContext.Provider>
    </PlayerContext.Provider>
  )
}