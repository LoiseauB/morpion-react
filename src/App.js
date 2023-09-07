import './style/App.css';
import InputNameUser from './components/InputNameUser'
import { useState, createContext, useEffect } from 'react';
import Board from './components/Board';
import EndGame from './components/EndGame';
import History from './components/History';

export const PlayerContext = createContext(null);

function App() {
  const [player1, setPlayer1] = useState(JSON.parse(localStorage.getItem("player1")) || '');
  const [player2, setPlayer2] = useState(JSON.parse(localStorage.getItem("player2")) || '');
  const [isEndGame, setIsEndGame] = useState(false);
  const [boardState, setBoardState] = useState(JSON.parse(localStorage.getItem("boardState")) || Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);

  useEffect(() => {
    localStorage.setItem("boardState", JSON.stringify(boardState));
}, [boardState]);

  useEffect(() => {
    localStorage.setItem("player1", JSON.stringify(player1));
    localStorage.setItem("player2", JSON.stringify(player2));
    
  }, [player1, player2]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
}, [history]);

  return (
    <div className="App">
      <main>
        <PlayerContext.Provider value={{player1, setPlayer1, player2, setPlayer2, boardState, setBoardState, isEndGame, setIsEndGame, winner, setWinner, history, setHistory}}>
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
             </>
          )}
          {isEndGame && (
            <EndGame winner={winner}/>
          )}
        </PlayerContext.Provider>
        
        {/* 2 calls of InputNameUser component*/}
        {/* call Board component*/}
        {/*  9 calls of Square component*/}
      </main>
    </div>
  );
}

export default App;
