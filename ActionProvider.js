class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }


    greet =() => {
      const message = this.createChatBotMessage("Welcome to Stsk")
      this.addMessageToState(message);

    };

    handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage("Awesome,here are your options!",
        {
          widget: "javascriptQuiz",
        }
      );

      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState(prevState => ({
        ...prevState,
        messages: [...prevState.messages, message],

      }));

    };
  }
  
  export default ActionProvider;
  