import { useContext, useState} from 'react'
import { PlayerContext } from '../App';


export default function InputNameUser({playerNumber}) {
  const [username, setUsername] = useState('');
  const { setPlayer1, setPlayer2 } = useContext(PlayerContext);
  
  
  const handleSubmit = event => {
    event.preventDefault();
    if(playerNumber === 1){
      setPlayer1(username);
    }
    if(playerNumber === 2){
      setPlayer2(username);
    }
  }

  return (
    <header>
      <form className={"inputUser"} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Player {playerNumber} :</label>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </form>
    </header>
  )
}