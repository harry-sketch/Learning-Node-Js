// First Server
// const http = require("http");
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.write("harsh from backend side");
//   res.end();
// });

// server.listen(port);

// First Api
// const http = require("http");
// const port = 8000;

// const data = require("./data/data");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "applicationjson" });
//   res.write(JSON.stringify(data));
//   res.end();
// });

// server.listen(port);

// File System
const fs = require("fs");

let inputData = process.argv;
// Write file sync takes two params from which first is for file name (which file to create) & second is the text comes on the fil
if (inputData[2] === "add") {
  return fs.writeFileSync(inputData[3], inputData[4]);
}
if (inputData[2] === "remove") {
  return fs.unlinkSync(inputData[3]);
}

return console.log("unhandled operation");
