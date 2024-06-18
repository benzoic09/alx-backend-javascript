const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.trim().split('\n').filter(line => line);

    if (lines.length < 2) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    // Total number of students
    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    // Group students by field
    const fields = {};
    students.forEach((line) => {
      const studentData = line.split(',');
      const field = studentData[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(studentData[0]);
    });

    // Log the number of students in each field and their names
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
