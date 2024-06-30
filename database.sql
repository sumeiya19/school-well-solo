-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "student" (
	"id" SERIAL PRIMARY KEY,
	"last_name" VARCHAR (80),
	"first_name" VARCHAR (80),
	"grade" INTEGER,
	"user_id" INT REFERENCES "user"
	
);

CREATE TABLE "illness"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80)
);

CREATE TABLE "illness_input" (
    "id" SERIAL PRIMARY KEY,
    "illness_id" INT REFERENCES "illness",
    "symptoms" VARCHAR(2080),
    "illness_date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "student_id" INT REFERENCES "student"
);

---INSERT STATEMENTS FOR TEST DATA

INSERT INTO "student" ("last_name", "first_name", "grade", "user_id")
VALUES 
('Doe', 'John', 10, 1),
('Smith', 'Jane', 11, 1);

INSERT INTO "illness" ("name")
VALUES 
('Flu'),
('Cold');

INSERT INTO "illness_input" ("illness_id", "symptoms", "illness_date", "student_id")
VALUES 
(1, 'Fever, Cough, Fatigue', '2024-06-26', 1),
(2, 'Sneezing, Runny Nose', '2024-06-27', 2);

--- SELECT STATEMENT

SELECT "user_id", "first_name", "last_name", "grade", "illness_date", "illness"."name", "illness_input"."symptoms"
FROM "user"
JOIN "student" ON "user_id" = "user"."id"
JOIN "illness_input" ON "student_id" = "student"."id"
JOIN "illness" ON "illness_id" = "illness"."id"


DROP TABLE "illness"

DROP TABLE "illness_input"

DROP TABLE "student"

