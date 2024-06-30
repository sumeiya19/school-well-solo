import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddNewStudent () {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');
    const dispatch = useDispatch();

    const studentList = useSelector((store) => store.studentReducer);

    useEffect(() => {
        dispatch({ type: "FETCH_STUDENT" });
    }, [dispatch]);

    

    return (<>
        <h1>Add New Student</h1>
    


<input 
type='text'
placeholder='Last Name'
/>

<input 
type='text'
placeholder='First Name'
/>

<input 
type='number'
placeholder='Grade'
/> 
<button>Add Student</button>

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

        </> )
}

export default AddNewStudent