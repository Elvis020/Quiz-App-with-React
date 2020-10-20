import React from 'react'

function Result({score, playAgain}) {
    return (
        <div className="score-baord">
            <div className="score">
               🏅 You scored {score}/5 correct answers 🏅
            </div>
            <button className="playBtn" onClick={playAgain}> 🎲Play Again!🎲  </button>
        </div>
    )
}

export default Result
