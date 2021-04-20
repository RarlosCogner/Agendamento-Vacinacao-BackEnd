const express = require('express');
const mongoose = require('mongoose')

const Routes = require("./Routes")

mongoose.connect('mongodb://localhost/Schedules', {useMongoClient: true});

const app = express();

app.use(express.json());
app.use(Routes);


app.get('/', (req, res) => {
    res.send("Funcionando")
})



app.listen(5000)

