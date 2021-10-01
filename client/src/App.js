import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Question from './components/Question';
import Score from './components/Score';

const App = () => {
  return (
    <Router>
      <Container>
        <div class="p-5 text-center bg-light m-5">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/question">
              <Question />
            </Route>
            <Route path="/score">
              <Score />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

export default App;

{
  /* <Container className="name-form">
      <h1 className="lead center">Enter your name to start the quiz</h1>

      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Start !
        </Button>
      </Form>
    </Container> */
}
