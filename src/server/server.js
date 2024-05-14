/*const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/questions', async (req, res) => {
  try {
    const questions = await db.getQuizQuestions();
    res.json(questions);
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

const express = require('express');
const app = express();
const path = require('path');
const { getQuizQuestions, addQuizQuestion, updateQuizQuestion, deleteQuizQuestion } = require('./db');

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Handle GET request to fetch quiz questions
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await getQuizQuestions();
    res.json(questions);
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle POST request to add a new quiz question
app.post('/api/questions', async (req, res) => {
  try {
    // Assuming request body contains the new question object
    const newQuestion = req.body;
    await addQuizQuestion(newQuestion);
    res.status(201).json({ message: 'Question added successfully' });
  } catch (error) {
    console.error('Error adding quiz question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle PUT request to update a quiz question by ID
app.put('/api/questions/:id', async (req, res) => {
  try {
    const questionId = req.params.id;
    const updatedQuestion = req.body; // Assuming request body contains updated question data
    await updateQuizQuestion(questionId, updatedQuestion);
    res.json({ message: 'Question updated successfully' });
  } catch (error) {
    console.error('Error updating quiz question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle DELETE request to delete a quiz question by ID
app.delete('/api/questions/:id', async (req, res) => {
  try {
    const questionId = req.params.id;
    await deleteQuizQuestion(questionId);
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    console.error('Error deleting quiz question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
