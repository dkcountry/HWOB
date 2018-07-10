import { createConnection } from 'mysql';

const seedDB = () => {
    let con = createConnection({
        host: "35.224.5.246",
        user: "root",
        password: "Hackersnoborders2018"
    });

    con.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        con.query("DROP DATABASE hwob", (err, result) => {
            if (err) console.log(err);
            console.log("hwob deleted");        

            con.query("CREATE DATABASE hwob", (err, result) => {
                if (err) throw err;
                console.log("Database hwob created");

                con = createConnection({
                    host: "35.224.5.246",
                    user: "root",
                    password: "Hackersnoborders2018",
                    database: "hwob"
                    });
        
                con.connect(function(err) {
                    if (err) throw err;
                    console.log("Connected!");

                    var sql = "CREATE TABLE users \
                        (firstName VARCHAR(255), lastName VARCHAR(255), username VARCHAR(255), password VARCHAR(255))";
                    con.query(sql, (err, result) => {
                        if (err) throw err;
                        console.log("Table users created");
                        var sql = "INSERT INTO users (firstName, lastName, username, password) VALUES ?";
                        var values = [
                            ['John', 'Smith', 'jsmith', 'pass123'],
                            ['Amy', 'Brooke', 'abrooke', 'pass234'],
                            ['Roxy', 'Rong', 'rrong', 'roxxxxxy'],
                        ];
                        con.query(sql, [values], function (err, result) {
                            if (err) throw err;
                            console.log("Number of records inserted: " + result.affectedRows);
                        });
                    });


                    var sql = "CREATE TABLE applicants \
                        (appId INTEGER, firstName VARCHAR(255), lastName VARCHAR(255), jobTitle VARCHAR(255))";
                    con.query(sql, (err, result) => {
                        if (err) throw err;
                        console.log("Table applicants created");
                        var sql = "INSERT INTO applicants (appId, firstName, lastName, jobTitle) VALUES ?";
                        var values = [
                            ['123','Clement', 'Garnier', 'Software Engineer II'],
                            ['92343','Toan', 'Phan', 'Software Engineer II'],
                            ['66','Stacy', 'Wu', 'Data Scientist'],
                        ];
                        con.query(sql, [values], function (err, result) {
                            if (err) throw err;
                            console.log("Number of records inserted: " + result.affectedRows);
                        });
                    });
                });

            });
        });
    });
}

export default seedDB;