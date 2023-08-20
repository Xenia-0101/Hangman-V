
export default function HangmanImg(props) {
    const { wrongLettersCount: count } = props
    const head = <div key="head" style={{ position: "absolute", width: "50px", height: "50px", border: "10px solid var(--text-primary)", borderRadius: "50%", left: "160px", top: "110px" }} />
    const body = <div key="body" style={{ position: "absolute", width: "10px", height: "100px", background: "var(--text-primary)", left: "190px", top: "180px" }} />
    const rightArm = <div key="rightArm" style={{ position: "absolute", width: "10px", height: "70px", background: "var(--text-primary)", left: "215px", top: "170px", rotate: "45deg", msTransformOrigin: "top-left" }} />
    const leftArm = <div key="leftArm" style={{ position: "absolute", width: "10px", height: "70px", background: "var(--text-primary)", left: "165px", top: "170px", rotate: "-45deg", msTransformOrigin: "top-left" }} />
    const rightLeg = <div key="rightLeg" style={{ position: "absolute", width: "10px", height: "70px", background: "var(--text-primary)", left: "210px", top: "270px", rotate: "-35deg", msTransformOrigin: "top-left" }} />
    const leftLeg = <div key="leftLeg" style={{ position: "absolute", width: "10px", height: "70px", background: "var(--text-primary)", left: "170px", top: "270px", rotate: "35deg", msTransformOrigin: "top-left" }} />
    const hangman = [head, body, leftArm, rightArm, leftLeg, rightLeg]

    return (
        <>
            <div style={{ position: "relative" }}>
                {hangman.slice(0, count)}
                <div style={{ position: "relative", width: "10px", height: "50px", background: "var(--text-primary)", left: "190px", top: "60px" }} />
                <div style={{ position: "relative", width: "105px", height: "10px", background: "var(--text-primary)", left: "95px" }} />
                <div style={{ position: "relative", width: "10px", height: "350px", background: "var(--text-primary)", left: "95px" }} />
                <div style={{ position: "relative", width: "200px", height: "10px", background: "var(--text-primary)" }} />
            </div>
        </>
    )
}
