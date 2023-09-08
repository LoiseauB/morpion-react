import { useContext } from "react";
import Board from "./Board";
import History from "./History";
import ScoreHistory from "./ScoreHistory";
import HistoryContext from "../contexts/HistoryContext";

export default function Game () {
  const { sessionScore } = useContext(HistoryContext)
  return (
    <>
      <Board />
      <div>
        <History />
      </div>
      <ScoreHistory scores={sessionScore}/>
    </>
  )
}