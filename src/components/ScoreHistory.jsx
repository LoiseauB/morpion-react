export default function ScoreHistory ({scores}) {

  return (
    <>
    <h2>Score History</h2>
      {scores.map((score) =>( <p>{score ? score : 'Match Nul'}</p> ))}
    </>
  )
}