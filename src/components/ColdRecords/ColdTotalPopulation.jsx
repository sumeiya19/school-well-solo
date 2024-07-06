import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

function ColdTotalPopulation() {
    const dispatch = useDispatch();
    const totalPopulation = useSelector((state) => state.totalPopulationReducer);
    const coldList = useSelector((state) => state.coldRecordsReducer);

    const totalIncidences = coldList.length;

    const incidenceRate = totalPopulation > 0 ? (totalIncidences / totalPopulation) * 1000 : 0;

    useEffect(() => {
        dispatch({ type: "FETCH_TOTAL_POPULATION" });
    }, [dispatch]);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={4}>
            <div>
                <p><b>Cold Incidence Statistics</b></p>
                <p>Total Population: {totalPopulation}</p>
                <p>Total Incidences: {totalIncidences}</p>
                <p>Incidence Rate: {incidenceRate.toFixed(2)} per 1000</p>
            </div>
        </Box>
    );
}

export default ColdTotalPopulation;
