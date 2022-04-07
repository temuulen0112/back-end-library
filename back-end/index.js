const dotenv = require('dotenv').config();
const express = require("express");
const app = express();
const apiRoutes = require('./routes/api');
const connection = require('./database');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
app.use('/', apiRoutes);
app.use(cors());
app.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
});

app.all('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server`
    })
});

const port = 3002;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});