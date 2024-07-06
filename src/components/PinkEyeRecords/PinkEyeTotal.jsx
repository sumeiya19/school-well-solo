import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';

function PinkEyeTotal () {
    const dispatch = useDispatch();
    const totalPopulation = useSelector((state) => state.totalPopulationReducer);
    const pinkEyeList = useSelector((state) => state.pinkEyeReducer);

    const totalIncidences = pinkEyeList.length;

    const incidenceRate = totalPopulation > 0 ? (totalIncidences / totalPopulation) * 1000: 0;

    useEffect(() => {
        dispatch({ type: "FETCH_TOTAL_POPULATION" });
        // dispatch({ type: "FETCH_INCIDENCE" });
    }, [dispatch]);
    return (<>
  <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={4}>
            <div>
                <p><b>Pink Eye Incidence Statistics</b></p>
                <p>Total Population: {totalPopulation}</p>
                <p>Total Incidences: {totalIncidences}</p>
                <p>Incidence Rate: {incidenceRate.toFixed(2)} per 1000</p>
            </div>
        </Box>
</>)
}

export default PinkEyeTotal