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

app.all('*', (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Can't find ${req.originalUrl} on this server`
    })
});

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
});

const port = 3002;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});