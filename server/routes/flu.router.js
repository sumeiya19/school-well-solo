const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//Get Router for Flu Record
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT 
            "student"."id", 
            "student"."last_name", 
            "student"."first_name", 
            "student"."grade", 
            "flu_record"."illness_date", 
            "illness"."name" AS "illness", 
            "flu_record"."symptoms"
        FROM 
            "student"
        JOIN 
            "flu_record" ON "student"."id" = "flu_record"."student_id"
        JOIN "illness" ON "illness_id" = "illness"."id"
        WHERE 
            "student"."user_id" = $1;
    `;

    pool.query(queryText, [req.user.id])
        .then((result) => {
            res.json(result.rows);
        })
        .catch((error) => {
            console.error('Error retrieving data:', error);
            res.sendStatus(500);
        });
});

//Post Router for new Cold Record
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
        INSERT INTO "flu_record" ("illness_id", "symptoms", "illness_date", "student_id")
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

                    // Insert into cold_record table
                    const illnessInputValues = [illnessId, symptoms, illness_date, studentId];
                    return pool.query(insertIllnessInputQuery, illnessInputValues)
                        .then(() => {
                            res.sendStatus(201); // Success response if all inserts are successful
                        })
                        .catch((error) => {
                            console.error('Error inserting into flu_record:', error);
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

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const incidenceId = req.params.id;

    const deleteIncidenceQuery = `
        DELETE FROM "illness"
        WHERE id = $1
    `;

    pool.query(deleteIncidenceQuery, [incidenceId])
        .then(() => {
            console.log(`Deleted incidence with ID ${incidenceId}`);
            res.sendStatus(200); // OK status
        })
        .catch((error) => {
            console.error('Error deleting incidence:', error);
            res.sendStatus(500); // Server error status
        });
});

router.put('/:id', (req, res) => {
    const idToUpdate = req.params.id;
    const { last_name, first_name, grade, name, symptoms, illness_date } = req.body;

    console.log('Last Name', last_name);
    console.log('First', first_name);
    console.log('Req.body', req.body);

    const updateStudentQuery = `
        UPDATE "student"
        SET "last_name" = $1, "first_name" = $2, "grade" = $3
        WHERE "id" = $4
    `;

    const updateIllnessQuery = `
        UPDATE "illness"
        SET "name" = $1
        WHERE "id" = (SELECT "illness_id" FROM "flu_record" WHERE "student_id" = $2)
    `;

    const updateIllnessInputQuery = `
        UPDATE "flu_record"
        SET "symptoms" = $1, "illness_date" = $2
        WHERE "student_id" = $3
    `;

    const studentValues = [last_name, first_name, grade, idToUpdate];
    const illnessValues = [name, idToUpdate];
    const illnessInputValues = [symptoms, illness_date, idToUpdate];

    // Update student table
    pool.query(updateStudentQuery, studentValues)
        .then(() => {
            // Update illness table
            return pool.query(updateIllnessQuery, illnessValues);
        })
        .then(() => {
            // Update flu_record table
            return pool.query(updateIllnessInputQuery, illnessInputValues);
        })
        .then(() => {
            res.sendStatus(200); 
        })
        .catch((error) => {
            console.error('Error updating records:', error);
            res.sendStatus(500);
        });
});

module.exports = router;