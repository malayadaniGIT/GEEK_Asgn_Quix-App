import React, { useState, useEffect } from 'react';
import Question from './Question';
import './styles.css';

const Quiz = ({ questionsData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false); // Add startQuiz state

  const handleOptionClick = (option) => {
    if (startQuiz && !showCorrectAnswer && !quizFinished) {
      setSelectedOption(option);
      const currentQuestion = questionsData[currentQuestionIndex];

      if (currentQuestion.correct === option) {
        setScore(score + 1);
      } else {
        setWrongAnswer(currentQuestion);
      }

      setShowCorrectAnswer(true);

      setTimeout(() => {
        if (currentQuestionIndex < questionsData.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setQuizFinished(true);
        }
        setSelectedOption(null);
        setShowCorrectAnswer(false);
        setWrongAnswer(null);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!startQuiz) {
      questionsData.sort(() => Math.random() - 0.5);
      setStartQuiz(true); // Start the quiz after shuffling questions
    }
  }, [questionsData, startQuiz]);

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <div>
      <h1>Quiz App</h1>
      {quizFinished ? (
        <div className="quiz-finished">
          Quiz Finished! Your Score: {score} out of {questionsData.length}
        </div>
      ) : (
        <>
          <p>Question {currentQuestionIndex + 1} of {questionsData.length}</p>
          <p>Current Score: {score}</p>
          {currentQuestion ? (
            <Question
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedOption={selectedOption}
              handleOptionClick={handleOptionClick}
              showCorrectAnswer={showCorrectAnswer}
            />
          ) : null}
        </>
      )}
      {showCorrectAnswer && wrongAnswer && (
        <div className="results">
          <p className="wrong-answer">
            Your Answer for "{wrongAnswer.question}": {selectedOption} | Correct Answer: {wrongAnswer.correct}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
