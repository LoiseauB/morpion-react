import { useContext } from "react";
import EndGame from "./EndGame";
import ScoreHistory from "./ScoreHistory";
import HistoryContext from "../contexts/HistoryContext";

export default function EndGameWrap () {
  const {localScoreHistory} = useContext(HistoryContext);
  return (
    <>
      <EndGame />
      <ScoreHistory scores={localScoreHistory}/>
    </>
  )
}