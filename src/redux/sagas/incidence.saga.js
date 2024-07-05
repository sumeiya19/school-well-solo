import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* addIncidence(action) {
    try {
        yield call(axios.post, '/api/incidence', action.payload);
        yield put({ type: 'FETCH_INCIDENCE' }); // Fetch updated incidence list
    } catch (error) {
        console.error('Error with incidence POST request', error);
    }
}

function* fetchIncidence() {
    try {
        const response = yield call(axios.get, '/api/incidence');
        yield put({ type: 'SET_INCIDENCE', payload: response.data });
    } catch (error) {
        console.error('Error fetching incidence:', error);
    }
}

function* fetchCold() {
    try {
        const response = yield call(axios.get, '/api/cold');
        yield put({ type: 'SET_COLD', payload: response.data });
    } catch (error) {
        console.error('Error fetching incidence:', error);
    }
}

function* addCold(action) {
    try {
        yield call(axios.post, '/api/cold', action.payload);
        yield put({ type: 'FETCH_COLD' }); // Fetch updated incidence list
    } catch (error) {
        console.error('Error with incidence POST request', error);
    }
}

function* fetchFlu() {
    try {
        const response = yield call(axios.get, '/api/flu');
        yield put({ type: 'SET_FLU', payload: response.data });
    } catch (error) {
        console.error('Error fetching flu:', error);
    }
}

function* addFlu(action) {
    try {
        yield call(axios.post, '/api/flu', action.payload);
        yield put({ type: 'FETCH_FLU' }); // Fetch updated incidence list
    } catch (error) {
        console.error('Error with FLU POST request', error);
    }
}
export default function* rootSaga() {
    yield takeLatest('ADD_INCIDENCE', addIncidence);
    yield takeLatest('FETCH_INCIDENCE', fetchIncidence);
    yield takeLatest('DELETE_ITEM', deleteIncidence)
    yield takeLatest('FETCH_STUDENT', fetchStudent)
    yield takeLatest('ADD_STUDENT', addStudent)
    yield takeLatest('FETCH_TOTAL_POPULATION', fetchTotalPopulation)
    yield takeLatest('FETCH_RECORD', fetchRecord)
    yield takeLatest('ADD_RECORD', addRecord)
    yield takeLatest('FETCH_COLD', fetchCold)
    yield takeLatest('ADD_COLD', addCold)
    yield takeLatest('DELETE_COLD', deleteCold)
    yield takeLatest('FETCH_FLU', fetchFlu)
    yield takeLatest('ADD_FLU', addFlu)
    yield takeLatest('DELETE_FLU', deleteFlu)
}

function* deleteIncidence(action) {
    try {
        yield axios.delete(`/api/incidence/${action.payload}`);
        yield put({ type: 'FETCH_INCIDENCE'});
    } catch (error) {
        console.error('Error with shelf DELETE request', error);
    }
}

function* deleteCold(action) {
    try {
        yield axios.delete(`/api/cold/${action.payload}`);
        yield put({ type: 'FETCH_COLD'});
    } catch (error) {
        console.error('Error with Cold DELETE request', error);
    }
}

function* deleteFlu(action) {
    try {
        yield axios.delete(`/api/flu/${action.payload}`);
        yield put({ type: 'FETCH_FLU'});
    } catch (error) {
        console.error('Error with FLU DELETE request', error);
    }
}

function* fetchStudent() {
    try {
        const response = yield call(axios.get, '/api/student');
        yield put({ type: 'SET_STUDENT', payload: response.data });
    } catch (error) {
        console.error('Error fetching student:', error);
    }
}

function* addStudent(action) {
    try {
        yield call(axios.post, '/api/student', action.payload);
        yield put({ type: 'FETCH_STUDENT' }); // Fetch updated student list
    } catch (error) {
        console.error('Error with student POST request', error);
    }
}

function* addRecord(action) {
    try {
        yield call(axios.post, '/api/record', action.payload);
        yield put({ type: 'FETCH_RECORD' }); // Fetch updated incidence list
    } catch (error) {
        console.error('Error with student POST request', error);
    }
}

function* fetchRecord(action) {
    try {
        const response = yield call(axios.get, '/api/record');
        yield put({ type: 'SET_RECORD', payload: response.data });
    } catch (error) {
        console.error('Error fetching student:', error);
    }
}


function* fetchTotalPopulation(action) {
    try {
        const response = yield call(axios.get, '/api/student/total_pop'); 
        yield put({ type: 'SET_TOTAL_POPULATION', payload: response.data });
    } catch (error) {
        console.error('Error fetching total population:', error);
    }
}



