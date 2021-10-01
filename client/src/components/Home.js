import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setName } from '../redux/actions/UsersActions';
import { getQuestions } from '../redux/actions/QuestionsActions';
import { useHistory } from 'react-router';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, changeName] = useState('');
  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  const handleSubmit = () => {
    dispatch(setName(name));
    history.push('/question');
  };

  return (
    <div>
      <h1 class="mb-3">Enter your name to start the quiz</h1>
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={(e) => changeName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="submit-btn" onClick={handleSubmit}>
          Start !
        </Button>
      </Form>
    </div>
  );
};

export default Home;
