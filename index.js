const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  res.write("harsh from backend side");
  res.end();
});

server.listen(port);
