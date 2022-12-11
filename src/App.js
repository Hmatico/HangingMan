import { useCallback, useEffect, useState } from "react";
import Hangman from "./Hangman";
import Word from "./Word";
import KeyBoard from "./KeyBoard";
import wordList from "./words.json";

function App() {
  function getNewWord() {
    return wordList[Math.floor(Math.random()*wordList.length)]
  }
  const [wordToGuess, setWordToGuess] = useState(getNewWord())
  const [guessedLetters, setGuessedLetters] = useState([])
  const wrongGuesses = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = wrongGuesses.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((key) => {
    if (!guessedLetters.includes(key) && !isWinner && !isLoser) {
      setGuessedLetters(currentLetters => [...currentLetters, key])
    }
  }, [guessedLetters, isWinner, isLoser])
  
  useEffect(() => {
    const handler = (e) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e) => {
      const key = e.key
      if (key !== "Enter") return
      e.preventDefault()
      setWordToGuess(getNewWord)
      setGuessedLetters([])
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])
  
  return (
    <div style={{
      minWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    }}>
      <h1>
        {isWinner && "Winner! - Refresh to try again!"}
        {isLoser && "Nice try - Refresh to try again!"}
      </h1>
      <Hangman numberOfError = {wrongGuesses.length}/>
      <Word word={wordToGuess} guesses={guessedLetters} isLoser={isLoser}/>
      <div style={{ alignSelf: 'stretch'}}>
        <KeyBoard 
          disabled = {isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={guessedLetters.filter(letter => !wordToGuess.includes(letter))}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
