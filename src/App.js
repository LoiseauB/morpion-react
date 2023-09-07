import './style/App.css';
import InputNameUser from './components/InputNameUser'
import { useState, createContext, useEffect } from 'react';
import Board from './components/Board';
import EndGame from './components/EndGame';
import History from './components/History';
import ScoreHistory from './components/ScoreHistory';

export const PlayerContext = createContext(null);

function App() {
  const [player1, setPlayer1] = useState(JSON.parse(localStorage.getItem("player1")) || '');
  const [player2, setPlayer2] = useState(JSON.parse(localStorage.getItem("player2")) || '');
  const [isEndGame, setIsEndGame] = useState(false);
  const [boardState, setBoardState] = useState(JSON.parse(localStorage.getItem("boardState")) || Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [moveHistory, setMoveHistory] = useState(JSON.parse(localStorage.getItem("moveHistory")) || []);
  const [localScoreHistory, setLocalScoreHistory] = useState(localStorage.localScoreHistory || []);
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
    <div className="App">
      <main>
        <PlayerContext.Provider value={{player1, setPlayer1, player2, setPlayer2, boardState, setBoardState, isEndGame, setIsEndGame, winner, setWinner, moveHistory, setMoveHistory, localScoreHistory, setLocalScoreHistory, sessionScore, setSessionScore}}>
          {player1 === '' && player2 === '' && !isEndGame && (
            <InputNameUser playerNumber={1} />
          )}
          {player1 !== '' && player2 === '' && !isEndGame && (
            <InputNameUser playerNumber={2} />
          )}
          {player1 !== '' && player2 !== '' && !isEndGame && (
             <>
              <Board />
              <History />
              <ScoreHistory scores={sessionScore}/>
             </>
          )}
          {isEndGame && (
            <>
              <EndGame winner={winner}/>
              <ScoreHistory scores={localScoreHistory}/>
            </>
          )}
        </PlayerContext.Provider>
      </main>
    </div>
  );
}

export default App;
