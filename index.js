const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000;
const app = express();

//? middle were
app.use(cors());
app.use(express.json());

//? Databse connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nmkhan.b6ko8eg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//? Server stablish
const server = async () => {
    try {
        client.connect();
        const database = client.db('nmkhan');
        const projectCollection = database.collection('projects')

        //? get all projects
        app.get('/projects', async (req, res) => {
            const cursor = projectCollection.find({});
            const result = await cursor.toArray();
            res.send(result)
        })
    }

    finally {
        //// client.close();
    }
}

server().catch(console.dir)


//? listening to port
app.get('/', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => {
    console.log("Server is running at", port);
})