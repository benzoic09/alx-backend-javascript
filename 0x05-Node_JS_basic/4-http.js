const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content-Type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response body as "Hello Holberton School!"
    res.end('Hello Holberton School!\n');
});

// Start the HTTP server and listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running and listening on port ${PORT}`);
});

// Export the app variable for external use
module.exports = app;
