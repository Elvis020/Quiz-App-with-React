import React, {useState} from 'react'

function QuestionBox({question, options}) {
    const [answer, setAnswer] = useState(options)
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text,id) => (
                <button key={id} className="answerBtn" onClick={() => setAnswer([text])}> {text} </button>
            ))}
        </div>
    )
}

export default QuestionBox;
