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

// Initialize the PouchDB database
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
