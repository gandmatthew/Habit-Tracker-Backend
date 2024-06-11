const express = require('express');
const router = express.Router();
const client = require('../mongoClient.js');

router.use(express.json());

router.post('/createUser', async (req, res) => {
    try {
        const user = { email: req.body.email.toLowerCase(), password: req.body.password }
        await client.connect();
    
        const database = client.db('habittracker');
        const collection = database.collection('users');

        console.log(user)

        const result = await collection.insertOne(user);

        if (result.ops && result.ops.length > 0) {
            res.json('SUCCESS');
        } else {
            res.json('FAILED');
        }
    
    } catch (error) {
        console.error(error);
        res.json('FAILED');
    }
});


router.post('/loginUser', async (req, res) => {
    try {
        const user = { email: req.body.email.toLowerCase(), password: req.body.password }
        await client.connect();

        const database = client.db('habittracker');
        const collection = database.collection('users');

        const document = await collection.findOne({});

        console.log(user)

        if (document.email === user.email && document.password === user.password) {
            res.json('SUCCESS');
        } else {
            res.json('FAILED')
        }

    } catch (error) {
        console.error(error);
        res.json('FAILED');
    }
    
    // const user = { email: req.body.email, password: req.body.password }
    // if (users.has(user.email)) {
    //     console.log("SUCCESSS")
    //     res.json("SUCCESS")
    //     res.status(201).send()
    // } else {
    //     console.log("FAIL")
    //     res.json("FAIL")
    //     res.status(401).send()
    // }
}) 

module.exports = router;