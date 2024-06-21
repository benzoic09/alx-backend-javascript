const http = require('http');
const path = require('path');
const countStudents = require('./3-read_file_async'); // Importing the countStudents function

// Define the path to the database CSV file
const databasePath = process.argv[2] || path.join(__dirname, 'database.csv');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Determine the URL path
  const { url } = req;

  // Set the response HTTP header with HTTP status and Content-Type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handling different URL paths
  if (url === '/') {
    // Endpoint: /
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    // Endpoint: /students
    // Call the countStudents function asynchronously
    countStudents(databasePath)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch(() => {
        res.end('Cannot load the database\n');
      });
  } else {
    // Handle other endpoints
    res.statusCode = 404;
    res.end('Endpoint not found\n');
  }
});

// Start the HTTP server and listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app variable for external use
module.exports = app;
