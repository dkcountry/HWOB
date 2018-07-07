import { createConnection } from 'mysql';
import seedDB from './seedDB.js';
const express = require('express');
const bodyParser = require('body-parser');
const users = require("./routes/users");

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({dk: 'hiiii'});
});

app.use('/hwob/users', users);

app.listen(process.env.PORT || 3001, () => {
    console.log("HWOB Server Running..");
});