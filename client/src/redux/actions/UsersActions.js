export const setName = (name) => {
  return {
    type: 'SET_NAME',
    payload: name,
  };
};

export const incrementScore = () => {
  return {
    type: 'INCREMENT_SCORE',
    payload: null,
  };
};
