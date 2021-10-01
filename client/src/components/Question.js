import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementScore } from '../redux/actions/UsersActions';
import { nextQuestion } from '../redux/actions/QuestionsActions';
import { useHistory } from 'react-router';

const Question = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentQuestion = useSelector(
    (state) => state.Questions.currentQuestion
  );

  const handleClick = (index) => {
    if (currentQuestion.question.answers[index].isCorrect)
      dispatch(incrementScore());
    if (currentQuestion.index === 4) return history.push('/score');
    dispatch(nextQuestion());
  };
  if (currentQuestion.question.answers === undefined)
    return <div>There was an error</div>;
  else {
    return (
      <div>
        <h1 class="mb-3">Question {currentQuestion.index + 1}</h1>
        <h4 class="mb-3">{currentQuestion.question.text}</h4>
        <ol type="A">
          {currentQuestion.question.answers.map((answer, index) => (
            <li className="mb-2" key={index} onClick={() => handleClick(index)}>
              {answer.text}
            </li>
          ))}
        </ol>
      </div>
    );
  }
};

export default Question;
