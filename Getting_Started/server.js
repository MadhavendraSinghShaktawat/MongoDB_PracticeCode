const express = require('express')
const {MongoClient, ServerApiVersion} = require('mongodb')
const app = express()
const PORT = 5000

//user: marvelcomicuniverse12
//password: Ucz8QvgjQ4JIu8QW
//connectionString: mongodb+srv://marvelcomicuniverse12:<db_password>@firstproject-cluster.bfi3d.mongodb.net/FirstProject-cluster
const url = 'mongodb+srv://marvelcomicuniverse12:Ucz8QvgjQ4JIu8QW@firstproject-cluster.bfi3d.mongodb.net/Students-Db'


//* Connecting to MongoDB

//? 1. Create the client
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

//? 2. Function to connect
const connectDB = async ()=> {
    try {
        await client.connect();
        console.log('MongoDb is Connected Successfully');
        
    } catch (error) {
        console.log(error);
        
    }
}

connectDB();

//* Starting the server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))