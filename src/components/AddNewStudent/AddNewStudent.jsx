import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddNewStudent() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');
    const dispatch = useDispatch();

    const studentList = useSelector((store) => store.studentReducer);

    useEffect(() => {
        dispatch({ type: "FETCH_STUDENT" });
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Dispatch action with payload
        dispatch({
            type: 'ADD_STUDENT',
            payload: {
                last_name: lastName,
                first_name: firstName,
                grade,
            }
        });

        // Clear input fields
        setLastName('');
        setFirstName('');
        setGrade('');
    };

    return (
        <>
            <h1>Add New Student</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />

                <input
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />

                <input
                    type='number'
                    placeholder='Grade'
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                
                <button type='submit'>Add Student</button>
            </form>

            {studentList && studentList.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((student, index) => (
                            <tr key={index}>
                                <td>{student.last_name}</td>
                                <td>{student.first_name}</td>
                                <td>{student.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No students available</p>
            )}
        </>
    );
}

export default AddNewStudent;
