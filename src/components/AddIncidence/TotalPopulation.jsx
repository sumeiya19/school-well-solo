import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function TotalPopulation () {
    const dispatch = useDispatch();
    const totalPopulation = useSelector((state) => state.totalPopulationReducer);
    const incidenceList = useSelector((state) => state.incidenceReducer);

    const totalIncidences = incidenceList.length;

    const incidenceRate = totalPopulation > 0 ? (totalIncidences / totalPopulation) * 1000: 0;

    useEffect(() => {
        dispatch({ type: "FETCH_TOTAL_POPULATION" });
        // dispatch({ type: "FETCH_INCIDENCE" });
    }, [dispatch]);
    return (<>
        <div>
            <p>Total Population: {totalPopulation}</p>
            <p>Total Incidences: {totalIncidences}</p>
            <p>Incidence Rate: {incidenceRate.toFixed(2)} per 1000</p>
        </div>
</>)
}

export default TotalPopulation