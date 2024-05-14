/*const fs = require('fs');
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
};*/
import PouchDB from "pouchdb";
const db = new PouchDB("quiz_questions");

/**
 * Asynchronously retrieves quiz questions from the database.
 *
 * @async
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of quiz question documents.
 * @throws {Error} - Throws an error if there is a problem accessing the database.
 */
export async function getQuizQuestions() {
  try {
    const result = await db.allDocs({ include_docs: true });
    return result.rows.map((row) => row.doc);
  } catch (error) {
    console.error('Error retrieving quiz questions:', error);
    throw error;
  }
}

/**
 * Asynchronously adds a new quiz question to the database.
 *
 * @async
 * @param {Object} question - The quiz question object to add to the database.
 * @returns {Promise<Object>} - A promise that resolves to the added quiz question document.
 * @throws {Error} - Throws an error if there is a problem adding the question to the database.
 */
export async function addQuizQuestion(question) {
  try {
    const response = await db.post(question);
    return { ...question, _id: response.id, _rev: response.rev };
  } catch (error) {
    console.error('Error adding quiz question:', error);
    throw error;
  }
}

/**
 * Asynchronously updates a quiz question in the database.
 *
 * @async
 * @param {string} questionId - The ID of the quiz question to update.
 * @param {Object} updatedQuestion - The updated quiz question object.
 * @returns {Promise<Object>} - A promise that resolves to the updated quiz question document.
 * @throws {Error} - Throws an error if there is a problem updating the question in the database.
 */
export async function updateQuizQuestion(questionId, updatedQuestion) {
  try {
    const doc = await db.get(questionId);
    const response = await db.put({
      ...doc,
      ...updatedQuestion
    });
    return { ...doc, ...updatedQuestion, _rev: response.rev };
  } catch (error) {
    console.error('Error updating quiz question:', error);
    throw error;
  }
}

/**
 * Asynchronously deletes a quiz question from the database.
 *
 * @async
 * @param {string} questionId - The ID of the quiz question to delete.
 * @throws {Error} - Throws an error if there is a problem deleting the question from the database.
 */
export async function deleteQuizQuestion(questionId) {
  try {
    const doc = await db.get(questionId);
    const response = await db.remove(doc);
    return response;
  } catch (error) {
    console.error('Error deleting quiz question:', error);
    throw error;
  }
}