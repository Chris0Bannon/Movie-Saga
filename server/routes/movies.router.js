const express = require('express');
const pool = require('../modules/pool');

const router =express.Router();

router.get('/', (req,res) => {
    let queryText = `SELECT * FROM "movies";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)
    });
});

router.get(`/:id`, (req, res) => {
    let details = req.params.id
    let queryText = `SELECT * FROM "movies" WHERE "id" = $1;`;
    pool.query(queryText, [details])
    .then((result) => {
        console.log(result);
        res.send(result.rows[0])
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500)
    });
});

module.exports = router;