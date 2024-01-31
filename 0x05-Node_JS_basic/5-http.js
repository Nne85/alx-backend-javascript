const http = require('http');
const countStudents = require('./3-read_file_async');

// Parse command line arguments to get the database path
const args = process.argv.slice(2);
const databasePath = args[0];

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Define the URL path
  const urlPath = req.url;

  // Handle different URL paths
  if (urlPath === '/') {
    res.end('Hello Holberton School!\n');
  } else if (urlPath === '/students') {
    // Call the countStudents function asynchronously
    countStudents(databasePath)
      .then(() => {
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.end(`Error: ${error.message}\n`);
      });
  } else {
    // Handle other paths
    res.end('Not Found\n');
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});

// Export the app variable
module.exports = app;
