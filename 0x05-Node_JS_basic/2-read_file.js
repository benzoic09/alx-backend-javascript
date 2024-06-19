const fs = require('fs');
// const path = require('path');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n');

    const students = lines
      .filter((line) => line.trim().length > 0)
      .slice(1);

    if (students.length === 0) {
      throw new Error('Cannot load the database');
    }

    console.log(`Number of students: ${students.length}`);

    const fieldCounts = {};
    const fieldNames = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldNames[field] = [];
        }
        fieldCounts[field] += 1;
        fieldNames[field].push(firstname);
      }
    });

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldNames[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
