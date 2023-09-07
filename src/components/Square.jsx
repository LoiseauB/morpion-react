import { useState } from "react"

export default function Square({symbol, onClick, value}) {
  const [fill, setFill] = useState(value);
  const [isDisable, setIsDisable] = useState(false);

  function handleClick() {
    setFill(symbol ? 'O' : 'X');
    setIsDisable(true);
  }
  return (
    <>
      <button disabled={isDisable} className="square" onClick={() => {handleClick(); onClick()}}>{fill ? fill : '_'}</button>
    </>
  )
}