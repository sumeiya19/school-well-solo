const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('User is authenticated?:', req.isAuthenticated());
        console.log("Current user is: ", req.user.username);
        
        const sqlText = `SELECT * FROM "student"`;
        pool
            .query(sqlText)
            .then((result) => {
                console.log(`GET from database`, result);
                res.send(result.rows);
            })
            .catch((error) => {
                console.log(`Error making database query ${sqlText}`, error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(401);
    }
});

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('User is authenticated?:', req.isAuthenticated());
    console.log("Current user is: ", req.user.username);
    console.log("Current request body is: ", req.body);

    const { last_name, first_name, grade } = req.body;

    const queryText = `
        INSERT INTO "student" ("last_name", "first_name", "grade", "user_id")
        VALUES ($1, $2, $3, $4)
    `;
    const values = [last_name, first_name, grade, req.user.id];
    pool
        .query(queryText, values)
        .then(() => {
            res.sendStatus(201); // Changed to 201 Created for successful creation
        })
        .catch((error) => {
            console.log('Error making POST insert for incidence record:', error);
            res.sendStatus(500);
        });
});

module.exports = router;
