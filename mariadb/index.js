const mysql = require("mysql");

// Luo yhteys MySQL-tietokantaan
const con = mysql.createConnection({
  host: "localhost",
  user: "opiskelija", // Käyttäjänimi
  password: "opiskelija1", // Salasana
  database: "restapi", // Tietokannan nimi
});

// Asynkroninen funktio tietokantakyselyjen suorittamiseen
const queryDatabase = (callback) => {
  // Yhdistä tietokantaan
  con.connect((err) => {
    if (err) {
      console.error("Error connecting to Db:", err);
      return;
    }
    console.log("Connection established");

    // Suorita kysely
    con.query("SELECT * FROM henkilot", (err, rows) => {
      if (err) {
        console.error("Error executing query:", err);
        callback(err, null);
        return;
      }
      console.log("Data received from Db:");
      rows.forEach((row) => {
        console.log(`${row.nimi}, puhelin on ${row.puhelin}`);
      });

      // Lopeta yhteys tietokantaan
      con.end((err) => {
        if (err) {
          console.error("Error ending the connection:", err);
        } else {
          console.log("Connection terminated gracefully");
        }
        callback(null, rows);
      });
    });
  });
};

// Kutsu queryDatabase-funktiota
queryDatabase((err, data) => {
  if (err) {
    console.error("Query failed:", err);
    return;
  }
  console.log("Query completed successfully.");
  //   data.map((row) => {
  //     console.log(`${row.nimi}, puhelin on ${row.puhelin}`);
  //   });
});
