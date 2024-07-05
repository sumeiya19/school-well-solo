import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PinkEyeRecords () {

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');
    const [name, setName] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [illnessDate, setIllnessDate] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const pinkEyeList = useSelector((store) => store.pinkEyeReducer);
    console.log('Pink Eye Records:', pinkEyeList);

    useEffect(() => {
        dispatch({ type: "FETCH_PINK_EYE" });
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior


        // Dispatch action with payload
        dispatch({
            type: 'ADD_PINK_EYE',
            payload: {
                last_name: lastName,
                first_name: firstName,
                grade,
                name,
                symptoms,
                illness_date: illnessDate
            }
        });

        // Clear input fields
        setLastName('');
        setFirstName('');
        setGrade('');
        setName('');
        setSymptoms('');
        setIllnessDate('');
    };

    const handleDelete = (id) => {
        console.log("Deleting item with ID:", id);
        dispatch({ type: 'DELETE_PINK_EYE', payload: id });
    };

    const handleEditClick = (item) => {
        // dispatch to the store, the student being edited.
        // using SET_EDIT_STUDENT action
        dispatch({ type: 'SET_EDIT_STUDENT', payload: item });

        // Push user to edit page
        history.push('/editpinkeye');
    };

    return (<>
     <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)} />

                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)} />

                <input
                    type="number"
                    placeholder="Grade"
                    value={grade}
                    onChange={(event) => setGrade(event.target.value)} />

                <input
                    type="text"
                    placeholder="Illness Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />

                <input
                    type="text"
                    placeholder="Symptoms"
                    value={symptoms}
                    onChange={(event) => setSymptoms(event.target.value)} />

                <input
                    type="date"
                    placeholder="Illness Date"
                    value={illnessDate}
                    onChange={(event) => setIllnessDate(event.target.value)} />

                <button type="submit">Add Incidence</button>
            </form>

            <p>Incidence available here</p>

            <table>
                <thead>
                    <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Grade</th>
                        <th>Illness</th>
                        <th>Symptoms</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pinkEyeList.length > 0 ? (
                        pinkEyeList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.last_name}</td>
                                <td>{item.first_name}</td>
                                <td>{item.grade}</td>
                                <td>{item.illness}</td>
                                <td>{item.symptoms}</td>
                                <td>{new Date(item.illness_date).toLocaleDateString()}</td>
                                <td>
                                    <button onClick={() => handleEditClick(item)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td>No incidences to display</td>
                        </tr>
                    )}
                </tbody>
            </table>

</> )
}

export default PinkEyeRecords