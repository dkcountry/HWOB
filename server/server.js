import seedDB from './seedDB.js';
const express = require('express');
const bodyParser = require('body-parser');
const users = require("./routes/users");
const applicants = require("./routes/applicants");

// seedDB();

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({dk: 'hiiii'});
});

app.use('/hwob/users', users);
app.use('/hwob/applicant', applicants);

app.listen(process.env.PORT || 3001, () => {
    console.log("HWOB Server Running..");
});