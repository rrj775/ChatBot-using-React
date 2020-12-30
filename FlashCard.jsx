import React, { useState, useEffect } from "react";

import "./Quiz.css";

const FlashCard = ({question, answer, incrementIndex }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => setShowAnswer(false), [question]);

  return (
    <React.Fragment>
      <div
        className="flashcard-container"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer && question}
        {showAnswer && answer}
      </div>
      {showAnswer && (
        <button onClick={incrementIndex} className="flashcard-button">
          Next question
        </button>
      )}
    </React.Fragment> 
  );
};

export default FlashCard;