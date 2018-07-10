const express = require('express');
const router = express.Router({mergeParams: true});
import { createConnection } from 'mysql';


router.get("/:app_id", (req, res) => {
    const con = createConnection({
        host: "35.224.5.246",
        user: "root",
        password: "Hackersnoborders2018",
        database: "hwob"
    });
    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM applicants WHERE appId = '${req.params.app_id}' `, function (err, result) {
          if (err) throw err;
          console.log(req.params.app_id)
          res.send(result);
        });
      });
});

router.get("/", (req, res) => {
    const con = createConnection({
        host: "35.224.5.246",
        user: "root",
        password: "Hackersnoborders2018",
        database: "hwob"
    });
    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM applicants`, function (err, result) {
          if (err) throw err;
          res.send(result);
        });
      });
});

module.exports = router;
