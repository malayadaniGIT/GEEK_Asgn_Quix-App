import React from 'react';

const Question = ({ question, options, selectedOption, handleOptionClick, showCorrectAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            className={showCorrectAnswer && option === selectedOption ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
  
export default Question;
