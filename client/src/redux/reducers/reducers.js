import { combineReducers } from 'redux';
import QuestionsReducer from './QuestionsReducer';
import UsersReducer from './UsersReducer';

const allReducers = combineReducers({
  Questions: QuestionsReducer,
  User: UsersReducer,
});

export default allReducers;
