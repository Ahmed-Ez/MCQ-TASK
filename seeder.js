require('dotenv').config();
const connectDB = require('./config/db');
const questions = require('./data/Questions');
const Question = require('./models/Question');

connectDB();

const seedData = async () => {
  try {
    await Question.deleteMany();
    await Question.insertMany(questions);
    console.log('seeded');
    process.exit(1);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

seedData();
