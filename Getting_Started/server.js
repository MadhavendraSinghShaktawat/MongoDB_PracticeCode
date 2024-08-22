const express = require('express')
const {MongoClient, ServerApiVersion} = require('mongodb')
const app = express()
const PORT = 5000


//* Connecting to MongoDB

//? 1. Create the client
const client = new MongoClient('some mongodb url', {
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


//* Starting the server
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))