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

// let x = 100;
// let y = 0;

// let rightSolution = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(50);
//   }, 3000);
// });

// rightSolution.then((y) => {
//   console.log(x - y);
// });

// Removing Url & Adding 404 page. Also sending file to server
// const express = require("express");
// const path = require("path");
// const dataPath = path.join(__dirname, "public");
// const app = express();

// // app.use(express.static(dataPath));
// app.get("/", (req, res) => {
//   res.sendFile(`${dataPath}/index.html`);
// });

// app.get("/about", (req, res) => {
//   res.sendFile(`${dataPath}/about.html`);
// });

// app.get("*", (req, res) => {
//   res.sendFile(`${dataPath}/pageNotFound.html`);
// });

// app.listen(5000);

// Dynamic Page with Ejs Template Engine

// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/profile", (req, res) => {
//   const user = {
//     name: "harsh",
//     email: "harsh90@gmail.com",
//     skills: ["react", "typescript", "node", "css"],
//   };

//   res.render("profile", { user });
// });

// app.listen(8000);

// Mddleware

// const express = require("express");
// const app = express();
// const filterRouting = require("./middleware/middleware");

// const route = express.Router();
// // app.use(filterRouting)

// route.use(filterRouting);

// app.get("/", (req, res) => {
//   res.send("Welcome to Home Page");
// });

// route.get("/user", (req, res) => {
//   res.send("Welcome to User Page");
// });

// app.use("/", route);

// app.listen(7000);

// Connect MongoDb with Node

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url); //inform node to connect with mongodb

const getData = async () => {
  let dbConnect = await client.connect(); //node connect with mongodb
  let getDb = dbConnect.db("StudentData"); //connect db
  let collections = getDb.collection("data"); //get collections
  let res = await collections.find().toArray(); //get results
  console.log(res);
};

getData();
