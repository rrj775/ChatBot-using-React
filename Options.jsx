import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "STSK Property Management",
      handler: props.actionProvider.handleJavascriptQuiz,id: 1,
    },
    { text: "STSK iGuard", handler: () => {}, id: 2 },
    { text: "STSK Infotech", handler: () => {}, id: 3 },
    { text: "STSK Agro", handler:() => {}, id: 4},
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;