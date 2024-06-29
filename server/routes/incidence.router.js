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

    const { last_name, first_name, grade, name, symptoms, illness_date } = req.body;

    const insertStudentQuery = `
        INSERT INTO "student" ("last_name", "first_name", "grade", "user_id")
        VALUES ($1, $2, $3, $4)
        RETURNING id
    `;

    const insertIllnessQuery = `
        INSERT INTO "illness" ("name")
        VALUES ($1)
        RETURNING id
    `;

    const insertIllnessInputQuery = `
        INSERT INTO "illness_input" ("illness_id", "symptoms", "illness_date", "student_id")
        VALUES ($1, $2, $3, $4)
    `;

    const studentValues = [last_name, first_name, grade, req.user.id];
    const illnessValues = [name];

    // Insert into student table
    pool.query(insertStudentQuery, studentValues)
        .then((studentResult) => {
            const studentId = studentResult.rows[0].id;

            // Insert into illness table
            return pool.query(insertIllnessQuery, illnessValues)
                .then((illnessResult) => {
                    const illnessId = illnessResult.rows[0].id;
                    const illnessInputValues = [illnessId, symptoms, illness_date, studentId];

                    // Insert into illness_input table
                    return pool.query(insertIllnessInputQuery, illnessInputValues)
                        .then(() => {
                            // Success response if all inserts are successful
                            res.sendStatus(201);
                        })
                        .catch((error) => {
                            console.error('Error inserting into illness_input:', error);
                            res.sendStatus(500);
                        });
                })
                .catch((error) => {
                    console.error('Error inserting into illness:', error);
                    res.sendStatus(500);
                });
        })
        .catch((error) => {
            console.error('Error inserting into student:', error);
            res.sendStatus(500);
        });
});








module.exports = router;
