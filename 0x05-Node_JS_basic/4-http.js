const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
module.exports = app;