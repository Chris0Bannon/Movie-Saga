const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();


router.get(`/:id`, (req, res) => {
    let genres = req.params.id;
    let queryText = `SELECT "genres".name
FROM "genres"
  JOIN "genres_movies" ON
"genres".id = "genres_movies".genres_id
WHERE "genres_movies".movies_id = $1;`;
pool.query(queryText, [genres])
.then((result) => {
    console.log(result);
    res.send(result.rows)
}).catch((error) => {
    res.sendStatus(500)
});
});

module.exports = router;