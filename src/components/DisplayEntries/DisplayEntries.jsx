import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function DisplayEntries() {
    const dispatch = useDispatch();
    const incidenceList = useSelector((state) => state.incidenceReducer);

    useEffect(() => {
        dispatch({ type: "FETCH_INCIDENCE" });
    }, [dispatch]);

    return (
        <div>
            <h1>Submitted Entries</h1>
            {incidenceList.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Grade</th>
                            <th>Illness</th>
                            <th>Symptoms</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {incidenceList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.last_name}</td>
                                <td>{item.first_name}</td>
                                <td>{item.grade}</td>
                                <td>{item.name}</td>
                                <td>{item.symptoms}</td>
                                <td>{new Date(item.illness_date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No entries to display</p>
            )}
        </div>
    );
}

export default DisplayEntries;
