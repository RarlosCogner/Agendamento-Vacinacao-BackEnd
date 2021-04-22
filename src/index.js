const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Routes = require("./Routes/schedule.route");
require("dotenv").config();

const {MONGO_URL, HTTP_PORT} = process.env;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(cors())
app.use(express.json());
app.use('/api', Routes);


app.get('/', (req, res) => {
    res.send("Funcionando")
})



app.listen(HTTP_PORT, () => {
    console.log("Servidor Rodando")
});

