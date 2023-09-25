
import Svg from "./Components/SvgImages"
import StartScreen from "./Components/StartScreen"
import GameScreen from "./Components/GameScreen"
import { useState } from "react"

function App() {
  const [start, setStart] = useState(true)

  function startGame() {
    setStart(!start)
  }

  return (
    <main>
        <Svg />
        {
          start ?
          <StartScreen start={start} startGame={startGame} /> 
          : 
          <GameScreen />
        }
    </main>
  )
}

export default App
