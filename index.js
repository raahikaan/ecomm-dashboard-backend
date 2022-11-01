const express = require('express');
const cors = require('cors');
const client = require('./db')
const app = express();

const port = process.env.DEV_PORT;

//*** client connection ***//
client.connect().then(() => console.log("🧑‍🚀 Db Connected successfully: 🧑‍🚀"))
    .catch(e => console.log("😌 Db Connection Failed! 😌", "\n", e));

//*** middleware ***//
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`🧑‍🚀 server started on port: ${port} 🧑‍🚀`)
})