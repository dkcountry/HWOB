const express = require('express');
const router = express.Router({mergeParams: true});
import { createConnection } from 'mysql';


router.get("/:user_id", (req, res) => {
    const con = createConnection({
        host: "35.224.5.246",
        user: "root",
        password: "Hackersnoborders2018",
        database: "hwob"
    });
    con.connect(function(err) {
        if (err) throw err;
        con.query(`SELECT * FROM users WHERE username = '${req.params.user_id}' `, function (err, result) {
          if (err) throw err;
          console.log(req.params.user_id)
          res.send(result);
        });
      });
});
  
module.exports = router;
