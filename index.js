// First Server
// const http = require("http");
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.write("harsh from backend side");
//   res.end();
// });

// server.listen(port);

// First Api

const http = require("http");
const port = 8000;

const data = require("./data/data");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "applicationjson" });
  res.write(JSON.stringify(data));
  res.end();
});

server.listen(port);
