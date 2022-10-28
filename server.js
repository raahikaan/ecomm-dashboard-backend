const express = require('express');
const cors = require('cors');
const pool = require('./db')

const app = express();

const PORT = 5000;

//*** pool connection ***//

pool.connect()
    .then(() => console.log("🧑‍🚀 Db Connected successfully: 🧑‍🚀"))
    .catch(e => console.log("😌 Db Connection Failed! 😌", "\n", e))
    .finally(() => pool.end());

//*** middleware ***//
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`🧑‍🚀 server started on port: ${PORT} 🧑‍🚀`)
})