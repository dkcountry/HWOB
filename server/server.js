import { createConnection } from 'mysql';

var con = createConnection({
    host: "35.224.5.246",
    user: "root",
    password: "Hackersnoborders2018"
  });

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
    // con.query("CREATE DATABASE test", (err, result) => {
    //   if (err) throw err;
    //   console.log("Database created");
    //   console.log(result)
    // });
});


console.log("Hellllldfafdafdafadllo")