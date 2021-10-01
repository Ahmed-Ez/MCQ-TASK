import axios from 'axios';
const baseUrl = '/api/questions';

export const getQuestions = () => async (dispatch) => {
  const { data } = await axios.get(baseUrl);
  dispatch({ type: 'GET_QUESTIONS', payload: data });
};

export const nextQuestion = () => {
  return {
    type: 'NEXT_QUESTION',
    payload: null,
  };
};
