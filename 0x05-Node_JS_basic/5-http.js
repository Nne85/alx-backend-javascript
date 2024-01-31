const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then(() => res.end())
      .catch((error) => {
        res.write('Error: ' + error.message);
        res.end();
      });
  } else {
    res.write('Not Found');
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
