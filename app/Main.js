import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QuizService from "./components/QuizService";
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

function App() {
  const [questionBank, setQuestionBank] = useState([]);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState(0);


  //   Mounting the getQuestiion function
  useEffect(() => {
    getQuestion();
  }, []);

  //   Function to get questions from the Quiz service api
  const getQuestion = () => {
    QuizService().then((question) => {
      setQuestionBank(question);
    });
  };


    // Function to compute the Answer
    const computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer){
            setScore(() => score+1)
        }
        setResponse(response < 5 ? response + 1 : 5)
    }


    // Function to reset the game
    const playAgain = () => {
      getQuestion();
      setScore(0)
      setResponse(0)

    }
  return (
    <>
      <div>
        <div className="container">
          <div className="title">QuizApp</div>
          {questionBank.length > 0 && response < 5 && questionBank.map(({ question, answers, correct, questionId }) => (
              <QuestionBox key={questionId} question={question} selected={answer => computeAnswer(answer, correct)} options={answers} />
          ))}


          {response === 5 ? (<Result score={score} playAgain={playAgain} />) : null}
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

// Dont edit this part Spacey 😜

if (module.hot) {
  module.hot.accept();
}
