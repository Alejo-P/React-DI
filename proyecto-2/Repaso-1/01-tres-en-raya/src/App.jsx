import { useState } from "react"
import { Square } from "./components/Square"
import { TURNS, WINNER_COMBOS } from "./components/constants"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      // Buscar un ganador
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] &&  boardToCheck[a] === boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    // no hacer nada si no hay ganador
    return null
  }

  // Reinicar el estado del juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    // Verificar la existencia del elemento
    // en una posicion o ya se tiene un ganador
    if (board[index] || winner) return

    // Actualiza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Verificar si existen ganadores
    const newWinnew = checkWinner(newBoard)
    if (newWinnew){
      setWinner(newWinnew)
    }
    else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {
        winner != null && (
          <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false ? "Empate" : "Gano:"
                  }
                </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer className="">
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
          </section>
        )
      }
      
    </main>
  )
}

export default App
