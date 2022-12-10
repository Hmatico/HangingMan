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
    <>
    <Hangman/>
    <Word word={wordToGuess} />
    <KeyBoard />
    </>
  );
}

export default App;
