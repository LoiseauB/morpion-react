import { useContext, useState} from 'react'
import  PlayerContext  from '../contexts/PlayerContext';
import { useNavigate } from 'react-router-dom';


export default function InputNameUser({playerNumber}) {
  const navigate = useNavigate();
  const { player1, player2 } = useContext(PlayerContext);

  function handleClick () {
    player1 === "" || player2 === "" ? navigate("/input/player1") : navigate("/game")
  }

  return (
    <div className={"inputUser"}>
      <p>Welcome to Tic Tac Toe Game</p>
      <button className={"startButton"} onClick={handleClick}>Start the Game !</button>
    </div>

  )
}