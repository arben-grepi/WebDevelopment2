const express = require("express");
const app = express();
app.use(express.json()); //käytetään json -muotoista dataa
app.use(express.urlencoded({ extended: true })); //käytetään tiedonsiirrossa laajennettua muotoa
app.get("/", (req, res) => res.json({ hope: "loop" }));
app.post("/", (req, res) => {
  const { name } = req.body;
  /*On löydyttävä parametri name ja siinä on oltava arvo. Jos ei -> palautetaan virhekoodi 400 = bad
input request*/
  if (!name || name === undefined) {
    res.sendStatus(400);
  } else {
    res.json({ input: name });
  }
});
/*halutaan tehdä testi ulkopuolisessa tiedostossa joten app pitää näkyä ulospäin.*/
module.exports = app;
