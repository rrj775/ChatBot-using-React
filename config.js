import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
const config = {
  botName: "Stsk Proptech services",
  initialMessages: [createChatBotMessage(`Hello User,what would you like to inquire about`,{
    widget: "options",
  }),
],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
        widgetName: "javascriptQuiz",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
          question: [
            {
              question: "Tell me more about Stsk",
              answer:
              "STSK PropTech Pvt Ltd aims at providing the best service in terms of Property Management, Facilities Management, Information Technology, Agro and Care. Providng the best services to the clients based on their requirements have always reaped us well. With the intention of providing the best housing facility with the end to end services within a click of few buttons has been the main motive. Facilitating good health and upkeeping the lifestyle of individuals, STSK PropTech has emerged with their two brand new departments - Agro and Care, which would nuture the health and wellbeing of the society.",
              id: 1,


            },
            {
              question: "i would like to know about STSK property management ",
              answer:
              "The organization of residential properties, commercial and industrial real estate. Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. It is the basis of all security and about the only indestructible security.",
              id: 2,

            },

          ]
        }

    }
  ],
};

export default config;