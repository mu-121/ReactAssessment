const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const form= require('./routes/formRoute');

app.use(bodyParser.urlencoded({ extended: true }));
const mongoose= require('mongoose')
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb+srv://usman53307:Usman51133@cluster1.rx2wxpi.mongodb.net/userform?retryWrites=true&w=majority&appName=Cluster1')
app.use("/user", form);

app.listen( () => {
    console.log(`Listening on port 3001`);
});

module.exports = app;
