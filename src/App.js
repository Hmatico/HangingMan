import { useState } from "react";
import Hangman from "./Hangman";
import Word from "./Word";
import KeyBoard from "./KeyBoard";
import wordList from "./words.json";

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random()*wordList.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState([])
  return (
    <div style={{
      minWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    }}>
      <h1>Win / Lose</h1>
      <Hangman/>
      <Word />
      <div style={{ alignSelf: 'stretch'}}>
        <KeyBoard />
      </div>
    </div>
  );
}

export default App;
