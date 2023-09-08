import { useContext, useState} from 'react'
import  PlayerContext  from '../contexts/PlayerContext';
import { useNavigate } from 'react-router-dom';


export default function InputNameUser({playerNumber}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const { setPlayer1, setPlayer2 } = useContext(PlayerContext);
  console.log(PlayerContext);

  const handleSubmit = event => {
    event.preventDefault();
    if(playerNumber === 1){
      setPlayer1(username);
      setUsername("")
      return navigate("/input/player2")
    }
    if(playerNumber === 2){
      setPlayer2(username);
      return navigate("/game")
    }
  }

  return (
    <form className={"inputUser"} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Player {playerNumber} :</label>
      <input
        type='text'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </form>
  )
}