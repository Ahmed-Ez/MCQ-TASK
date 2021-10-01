require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
const Question = require('./models/Question');

const PORT = process.env.PORT || 5000;

connectDB();

app.get('/api/questions', async (req, res) => {
  try {
    let questions = await Question.find();
    questions = questions.sort(() => Math.random() - 0.5);
    questions.forEach((question) => {
      question.answers.sort(() => Math.random() - 0.5);
    });
    return res.status(200).json(questions.slice(0, 5));
  } catch (error) {
    console.log(err.msg);
    return res.status(500).json({ msg: 'error' });
  }
});

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
