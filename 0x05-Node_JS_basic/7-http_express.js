const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 1245;

// Function to count students
async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line);

    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1);

    const numberOfStudents = students.length;
    let result = `Number of students: ${numberOfStudents}\n`;

    const fields = {};
    students.forEach((line) => {
      const studentData = line.split(',');
      const field = studentData[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(studentData[0]);
    });

    for (const [field, names] of Object.entries(fields)) {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students endpoint
app.get('/students', async (req, res) => {
  const databasePath = path.join(__dirname, 'database.csv');

  try {
    const result = await countStudents(databasePath);
    res.send(`This is the list of our students\n${result}`);
  } catch (error) {
    res.send('Cannot load the database');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app for external use
module.exports = app;
