import './App.css'
import HangmanGame from './HangmanGame'
import {ThemeProvider} from "./hooks/ThemeContext"

function App() {

  return (
    <>
    <ThemeProvider>
      <div className="contentWrapper" >
        <HangmanGame />
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
