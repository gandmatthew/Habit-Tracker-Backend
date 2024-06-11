const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountHandler = require('./routes/accountHandler.js');
const dataHandler = require('./routes/dataHandler.js');
const client = require('./mongoClient.js')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', dataHandler)
app.use('/', accountHandler)

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection22
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // console.log("CLOSED")
    // await client.close();
  }
}
run().catch(console.dir);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})