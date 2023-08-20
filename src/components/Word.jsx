
export default function Word(props) {
    const { wordLetters, selectedLetters, gameFinished } = props



    return (
        <>
            <div style={{ display: "flex", gap: "0.5rem", fontSize: "4rem", fontFamily: "monospace" }}>

                {wordLetters.map((letter, index) => {
                    return (

                        <div
                            key={index}
                            style={{ borderBottom: "0.25rem solid var(--text-primary)" }}>
                            <span style={{
                                visibility: (selectedLetters.includes(letter) || gameFinished) ? "visible" : "hidden",
                                color: selectedLetters.includes(letter) ? "var(--text-primary)" : "var(--accent2)"
                            }}>
                                {letter}
                            </span>
                        </div>
                    )
                })}
            </div>
        
        </>
    )
}
