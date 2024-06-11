const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://gandmatthew:F324mA1NDtbEtRQk@cs137.djjj46v.mongodb.net/?retryWrites=true&w=majority&appName=CS137";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = client;