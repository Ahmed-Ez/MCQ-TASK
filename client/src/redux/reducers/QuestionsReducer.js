const QuestionsReducer = (
  state = {
    questions: [],
    currentQuestion: { index: 0, question: {} },
  },
  action
) => {
  switch (action.type) {
    case 'GET_QUESTIONS': {
      return (state = {
        questions: action.payload,
        currentQuestion: { index: 0, question: action.payload[0] },
      });
    }
    case 'NEXT_QUESTION': {
      return {
        ...state,
        currentQuestion: {
          index: state.currentQuestion.index + 1,
          question: state.questions[state.currentQuestion.index + 1],
        },
      };
    }
    default:
      return state;
  }
};

export default QuestionsReducer;
