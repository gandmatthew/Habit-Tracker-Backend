const express = require('express');
const router = express.Router();
const client = require('../mongoClient.js');

router.get('/account', async (req, res) => {
    try {
        // Ensure the client is connected
        await client.connect();

        const database = client.db('habittracker');
        const collection = database.collection('users');

        const document = await collection.findOne({});
        res.json(document);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving the document');
    }
});

module.exports = router;
