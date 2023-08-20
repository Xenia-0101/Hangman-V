import Styles from "./Keyboard.module.css"

export default function Keyboard(props) {
    const {wordLetters, selectedLetters, addToSelected, gameFinished} = props
    const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
  return (
    <>
    <div>
    <div className={Styles.keyboardWrapper}>
        <div className={Styles.keyboard}>
            {allLetters.map((letter, index) => {
                return(
                    <button 
                        key={index} 
                        name={letter}
                        className={`${Styles.btn} ${selectedLetters.includes(letter) && (wordLetters.includes(letter) ? Styles.correct : Styles.incorrect)}`} 
                        disabled={selectedLetters.includes(letter) || gameFinished}
                        onClick={(event) => addToSelected(event.target.name)}>
                            {letter}
                    </button>
                )
            })}

        </div>
        </div></div>
    </>
  )
}
