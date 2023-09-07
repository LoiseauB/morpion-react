import './App.css';
import InputNameUser from './InputNameUser'
import { useState, createContext, useEffect } from 'react';
import Board from './Board';
import EndGame from './EndGame';

export const PlayerContext = createContext(null);

function App() {
  const [player1, setPlayer1] = useState(JSON.parse(localStorage.getItem("player1")) || '');
  const [player2, setPlayer2] = useState(JSON.parse(localStorage.getItem("player2")) || '');
  const [isEndGame, setIsEndGame] = useState(false);
  const [boardState, setBoardState] = useState(JSON.parse(localStorage.getItem("boardState")) || Array(9).fill(null));

  useEffect(() => {
    localStorage.setItem("boardState", JSON.stringify(boardState));
}, [boardState]);
useEffect(() => {
  localStorage.setItem("player1", JSON.stringify(player1));
  localStorage.setItem("player2", JSON.stringify(player2));
  
}, [player1, player2]);


  return (
    <div className="App">
      <main>
        <PlayerContext.Provider value={{player1, setPlayer1, player2, setPlayer2, boardState, setBoardState, isEndGame, setIsEndGame}}>
          {player1 === '' && player2 === '' && (
            <InputNameUser playerNumber={1} />
          )}
          {player1 !== '' && player2 === '' && (
            <InputNameUser playerNumber={2} />
          )}
          {player1 !== '' && player2 !== '' && !isEndGame && (
             <Board />
          )}
          {isEndGame && (
            <EndGame />
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
