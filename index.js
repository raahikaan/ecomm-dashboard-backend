const express = require('express');
const cors = require('cors');
require('dotenv').config()
const sequelize = require('./configs/db')
const bodyParser = require('body-parser');
const app = express();

//*** Development port ***//
const port = process.env.DEV_PORT;

//*** sequelize connection ***//
sequelize.authenticate().then(() => {
    console.log("🧑‍🚀 sequelize Db Connected successfully: 🧑‍🚀")
}).catch((error) => {
    console.error('😌 Db Connection Failed! 😌', error);
});

//*** middleware ***//
//*** parse application/json ***//
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`🧑‍🚀 server started on : http://localhost:${port} 🧑‍🚀`)
})