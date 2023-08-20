import { useEffect, useState } from "react";
import HangmanImg from "./components/HangmanImage";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import CategoryBtn from "./components/CategoryBtn";
import Element from "./components/Element";
import { fetchCategories, fetchWords } from "./utils/fetchFunctions";
import useKeyboard from "./hooks/useKeyboard";
import ThemeContextComponent from "./hooks/ThemeContextComponent";
import Styles from "./HangmanGame.module.css"
import refreshIcon from "./assets/refresh.svg"

export default function HangmanGame() {
    const [categories, setCategories] = useState({ categories: {}, loading: true, error: null })
    const [selectedCategory, setSelectedCategory] = useState("random")
    const [randomWord, setRandomWord] = useState({ randomWord: "", category: "", info: null, loading: true, error: null })
    const [selectedLetters, setSelectedLetters] = useState([])
    
    const wordLetters = randomWord.randomWord.split("")
    const wrongLetters = selectedLetters.filter(letter => !wordLetters.includes(letter))
    
    const isWinner = wordLetters.every(letter => selectedLetters.includes(letter))
    const hasAttempts = wrongLetters.length < 6


    function startNewGame() {
        setSelectedLetters(() => [])
        fetchWords(selectedCategory, handleWordData)
    }

    function handleWordData(data) {
        setRandomWord((prevValue) => {
            return ({ ...prevValue, randomWord: data.word, category: data.category, info: data.info, loading: false })
        })
    }

    function handleCategories(data) {
        setCategories(() => {
            return ({ categories: [...data, "random", "chemical elements"], loading: false })
        })
    }
    
    function handleCategorySelection(category) {
        setSelectedCategory(() => category)
        fetchWords(category, handleWordData)
        setSelectedLetters(() => [])
    }
    
    function addToSelected(letter) {
        if (selectedLetters.includes(letter)){
            return
        }
        setSelectedLetters((prevSelected) => [...prevSelected, letter])
    }

    useEffect(() => {
        fetchCategories(handleCategories)
        startNewGame()
    }, [])

    useKeyboard("keydown", event => {
        const key = event.key
        if ((/^[a-zA-Z]$/).test(key)) {
            
            if (selectedLetters.includes(key)) {
                console.log("Selected letters includes key.")
                return
            }
            if (isWinner || !hasAttempts) {
                console.log("Is winner or has no attempts.")
                return
            }
            addToSelected(key)
        }
    })


    return (
        <>
            
                {/* ------------ Side panel - category selection ------------ */}
                {categories.loading ? <h1>Loading . . . </h1> :

                    <div className={Styles.wrapper}>

                        <h1>Select category</h1>

                        {categories.categories.map((item) =>
                            <CategoryBtn key={item} btnFunction={handleCategorySelection} btnLabel={item} currentCategory={selectedCategory} />
                        )}

                        <button
                            title="Refresh"
                            className={Styles.categoryBtn}
                            onClick={() => startNewGame()} > 
                            refresh
                        </button>

                        
                        Toggle theme: <ThemeContextComponent />

                    </div>
                }

                {/* --------------------- The game area --------------------- */}
                {randomWord.loading ? <h1>Loading . . .</h1> :
                    <div className={Styles.wrapper}>
                        <h1 style={{ display: "inline" }}>
                            {isWinner ? "You Won" : (hasAttempts ? "The Hangman Game" : "You Lost")}
                        </h1>
                        <HangmanImg wrongLettersCount={wrongLetters.length} />
                        <Word wordLetters={wordLetters} selectedLetters={selectedLetters} gameFinished={isWinner || !hasAttempts} />
                        <Keyboard wordLetters={wordLetters} selectedLetters={selectedLetters} addToSelected={addToSelected} gameFinished={isWinner || !hasAttempts} />
                    </div>
                }

                {/* ------------------------ element info ------------------------- */}
                
                {(isWinner || !hasAttempts) && randomWord.info &&
                    <div className={Styles.wrapper}>
                        <Element info={randomWord.info} />
                    </div>
                }
            
        </>
    );
}


