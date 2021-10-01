const UsersReducer = (state = { name: '', score: 0 }, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return (state = { name: action.payload, score: 0 });
    case 'INCREMENT_SCORE':
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
};

export default UsersReducer;
