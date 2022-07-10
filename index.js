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
// const fs = require("fs");
// let inputData = process.argv;
// Write file sync takes two params from which first is for file name (which file to create) & second is the text comes on the fil
// if (inputData[2] === "add") {
//   return fs.writeFileSync(inputData[3], inputData[4]);
// }
// if (inputData[2] === "remove") {
//   return fs.unlinkSync(inputData[3]);
// }

// return console.log("unhandled operation");

//Reading File Directory
// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");

// for (i = 0; i <= 5; i++) {
//   fs.writeFileSync(`${dirName}/test${i}.txt`, "test call");
// }

// fs.readdir(dirName, (err, files) => {
//   files.forEach((file) => console.log(file));
// });

// CRUD Operation in File System

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "Crud");
// const fileDir = `${dirPath}/test.txt`;

// // Step 1: Creating a file with writeFileSync method of file system
// fs.writeFileSync(fileDir, "this is a test call");

// // Step 2: Reading a file with readFile method of file system
// fs.readFile(fileDir, "utf8", (err, data) => {
//   if (!err) return console.log(data);
// });

// // Step 3: appending some text in file with append method of file system
// fs.appendFile(fileDir, " append data", (err) => {
//   if (!err) return console.log("data appended");
// });

// // Step 4: updating file name  with rename method of file system
// fs.rename(fileDir, `${dirPath}/hello.txt`, (err) => {
//   if (!err) console.log("file updated successfully!!");
// });

// // Step 5: deleting file  with unlinkSync method of file system
// fs.unlinkSync(`${dirPath}/hello.txt`);
// fs.writeFileSync(`${dirPath}/test.txt`, "test call");
// fs.appendFile(`${dirPath}/test.txt`, " & data added", (err) => {
//   if (!err) return console.log("data added");
// });

// .appendFile & rename methods take a call back with takes error
// readFile & readDir take a call back with err & data apart from them readFile take a utf8 from saving buffer
// Buffer is what nodejs takes some memory for the operation perfomance.

// // Promises

let x = 100;
let y = 0;

let rightSolution = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(50);
  }, 3000);
});

rightSolution.then((y) => {
  console.log(x - y);
});
