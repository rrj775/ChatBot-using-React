import React, { useState } from 'react';

import FlashCard from "./FlashCard";

const Quiz = (props) => {
  let [questionIndex, setQuestionIndex] = useState(0);

  const incrementIndex = () => 
    setQuestionIndex((prev) => (prev.questionIndex += 1));
  

  const currentQuestion = props.configProps.questions[questionIndex];
 
  if (!currentQuestion) {
    return <p>Quiz over.</p>;
  }

  return (
    <FlashCard
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      incrementIndex={incrementIndex}
    />
  );
};

export default Quiz;