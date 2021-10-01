import userEvent from '@testing-library/user-event';
import React from 'react';
import { useSelector } from 'react-redux';

const Score = () => {
  const score = useSelector((state) => state.User.score);
  return (
    <div>
      <h1 class="mb-3">Congrats you finished the quiz !</h1>
      <h4 class="mb-3">You answered {score} questions correctly </h4>
    </div>
  );
};

export default Score;
