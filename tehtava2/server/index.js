const express = require("express");
const fs = require("fs");
const path = require("path");

var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Content-type", "application/json");

  next();
});

//Hae suomenkielisen sana vastine query parametrilla
app.get("/sanakirja/:sana", (req, res) => {
  const suomisana = req.params.sana;
  if (!suomisana) {
    // Jos sanaa ei annettu, lähetetään virheviesti
    return res.status(400).json({ error: "Anna suomi sana query-parametrina" });
  }
  const data = fs.readFileSync("./sanakirja.txt", {
    encoding: "utf8",
    flag: "r",
  });
  const lines = data.trim().split(/\r?\n/);
  /*TÃ¤ssÃ¤ voisi kÃ¤ydÃ¤ silmukassa lÃ¤pi lines:ssa jokaisen rivin*/
  const dictionary = lines.map((line) => {
    const parts = line.split(" ");
    const s = parts[0];
    const e = parts[1];
    return { s, e };
  });
  const match = dictionary.find(
    (line) => line.s.toLowerCase() === suomisana.toLowerCase()
  );
  if (match) return res.json(match.e);
  else return res.status(404).json({ error: "sanaa ei löytynyt sanakirjasta" });
});

// Lisää uusi sana sanakirjaan
app.post("/sanakirja", (req, res) => {
  const { suomi, englanti } = req.body;

  // Tarkista, että molemmat sanat on annettu
  if (!suomi || !englanti) {
    // Jos sanoja ei ole annettu, lähetetään virheviesti
    return res
      .status(400)
      .json({ error: "Anna sekä suomi että englanti sana" });
  }

  // Lue tiedosto synkronisesti
  const data = fs.readFileSync("./sanakirja.txt", {
    encoding: "utf8",
    flag: "r",
  });

  // Jaetaan tiedoston sisältö riveiksi
  const lines = data.trim().split(/\r?\n/);

  // Luodaan sanakirjaobjekti riveistä
  const dictionary = lines.map((line) => {
    const parts = line.split(" ");
    const s = parts[0];
    const e = parts[1];
    return { s, e };
  });

  // Tarkistetaan, onko sana jo olemassa sanakirjassa
  const match = dictionary.find(
    (line) => line.s.toLowerCase() === suomi.toLowerCase()
  );

  if (match) {
    // Jos sana löytyy jo, palautetaan virhe
    return res.status(409).json({ error: "Sana on jo sanakirjassa" });
  }

  // Lisätään uusi sanapari sanakirjaan
  const newEntry = `${suomi} ${englanti}`;
  const updatedData = `${data.trim()}\n${newEntry}`;

  // Kirjoitetaan päivitetty sanakirja takaisin tiedostoon
  fs.writeFileSync("./sanakirja.txt", updatedData, {
    encoding: "utf8",
    flag: "w",
  });

  // Lähetetään onnistumisviesti
  return res.status(201).json({ message: "Sana lisätty onnistuneesti" });
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
