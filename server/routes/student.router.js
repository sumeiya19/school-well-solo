const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// Get Router for 'Add Student Page'

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

// Post Router for 'Add Student Page'

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('User is authenticated?:', req.isAuthenticated());
    console.log("Current user is:", req.user.username);
    console.log("Current request body is:", req.body);

    const { last_name, first_name, grade } = req.body;
    const queryText = `
        INSERT INTO "student" ("last_name", "first_name", "grade", "user_id")
        VALUES ($1, $2, $3, $4)
    `;
    const values = [last_name, first_name, grade, req.user.id];

    pool.query(queryText, values)
        .then(() => {
            res.sendStatus(201); // 201 Created for successful creation
        })
        .catch((error) => {
            console.log('Error making POST insert for student record:', error);
            res.sendStatus(500);
        });
});

router.get('/total_pop', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('User is authenticated?:', req.isAuthenticated());
        console.log("Current user is: ", req.user.username);
        
        const sqlText = `SELECT COUNT(*) FROM student`; 
        pool.query(sqlText)
            .then((result) => {
                const totalPopulation = result.rows[0].count;
                res.json(totalPopulation);
            })
            .catch((error) => {
                console.error('Error fetching total population:', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(401);
    }
});

// Update student details
router.put('/:id', (req, res) => {
    const studentId = req.params.id;
    const { last_name, first_name, grade } = req.body;

    const updateStudentQuery = `
        UPDATE "student"
        SET "last_name" = $1, "first_name" = $2, "grade" = $3
        WHERE "id" = $4
    `;

    const values = [last_name, first_name, grade, studentId];

    pool.query(updateStudentQuery, values)
        .then((result) => {
            console.log(`Student with ID ${studentId} updated successfully`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(`Error updating student with ID ${studentId}`, error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const studentId = req.params.id;

    const deleteStudentQuery = `
        DELETE FROM "student"
        WHERE "id" = $1
    `;

    pool.query(deleteStudentQuery, [studentId])
        .then((result) => {
            console.log(`Student with ID ${studentId} deleted successfully`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(`Error deleting student with ID ${studentId}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;