import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import QuizService from "./components/QuizService";
import QuestionBox from './components/QuestionBox';

function App() {
  const [questionBank, setQuestionBank] = useState([]);
  //   Mounting the
  useEffect(() => {
    getQuestion();
  }, []);

  //   Function to get questions from the Quiz service api
  const getQuestion = () => {
    QuizService().then((question) => {
      setQuestionBank(question);
    });
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="title">QuizApp</div>
          {questionBank.length > 0 && questionBank.map(({ question, answers, correct, questionId }) => (
              <QuestionBox key={questionId} question={question} options={answers} />
          ))}
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
