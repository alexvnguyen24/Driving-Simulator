const fs = require('fs');
const path = require('path');

async function getQuizQuestions() {
  try {
    const data = await fs.promises.readFile(path.join(__dirname, 'questions.json'), 'utf8');
    const questions = JSON.parse(data);
    return questions;
  } catch (error) {
    console.error('Error retrieving quiz questions:', error);
    throw error;
  }
}

module.exports = {
  getQuizQuestions,
};