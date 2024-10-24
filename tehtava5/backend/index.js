const express = require("express");
const fs = require("fs");

var app = express();
app.use(express.json()); // for parsing application/json

app.use(function (req, res, next) {
  // Allow any website to connect (CORS setup)
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Allowed methods
  res.setHeader("Access-Control-Allow-Methods", "GET");

  // Allowed headers
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );

  // Set content type as JSON
  res.setHeader("Content-type", "application/json");

  next();
});

// GET method to return all words from sanakirja.txt
app.get("/sanat", (req, res) => {
  const data = fs.readFileSync("./sanakirja.txt", {
    encoding: "utf8",
    flag: "r",
  });

  const lines = data.trim().split(/\r?\n/);

  // Create a dictionary object from the file lines
  const dictionary = lines.map((line) => {
    const parts = line.split(" ");
    const s = parts[0];
    const e = parts[1];
    return { suomi: s, englanti: e };
  });

  // Send the dictionary as a JSON response
  return res.json({ words: dictionary });
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
