const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

//? middle were
app.use(cors());
app.use(express.json());


//? listening to port
app.get('/', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => {
    console.log("Server is running at", port);
})