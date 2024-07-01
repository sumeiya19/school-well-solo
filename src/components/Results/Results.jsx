import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Results () {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [grade, setGrade] = useState('');
    const [name, setName] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [illnessDate, setIllnessDate] = useState('');

    const incidenceList = useSelector((store) => store.incidenceReducer);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: "FETCH_INCIDENCE" });
    }, [dispatch]);

    const handleDelete = (id) => {
        console.log("Deleting item with ID:", id);
        dispatch({ type: 'DELETE_ITEM', payload: id });
    };

    return (<>

<h1>Recent Results</h1>

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
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {incidenceList.length > 0 ? (
            incidenceList.map((item) => (
                <tr key={item.id}>
                    <td>{item.last_name}</td>
                    <td>{item.first_name}</td>
                    <td>{item.grade}</td>
                    <td>{item.illness}</td>
                    <td>{item.symptoms}</td>
                    <td>{new Date(item.illness_date).toLocaleDateString()}</td>
                    <td>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan="7">No incidences to display</td>
            </tr>
        )}
    </tbody>
</table>

</>)
}

export default Results