export default function EndGame ({winner}) {
  return (
    <>
      <p>{winner ? `${winner} a gagné !` : 'Match nul'}</p>
    </>
  )
}