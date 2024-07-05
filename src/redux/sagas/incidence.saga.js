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

function* fetchStomachFlu() {
    try {
        const response = yield call(axios.get, '/api/stomach');
        yield put({ type: 'SET_STOMACH_FLU', payload: response.data });
    } catch (error) {
        console.error('Error fetching stomach flu:', error);
    }
}

function* addStomachFlu(action) {
    try {
        yield call(axios.post, '/api/stomach', action.payload);
        yield put({ type: 'FETCH_STOMACH_FLU' }); // Fetch updated incidence list
    } catch (error) {
        console.error('Error with STOMACH FLU POST request', error);
    }
}

function* fetchStrep() {
    try {
        const response = yield call(axios.get, '/api/strep');
        yield put({ type: 'SET_STREP', payload: response.data });
    } catch (error) {
        console.error('Error fetching stomach flu:', error);
    }
}

function* addStrep(action) {
    try {
        yield call(axios.post, '/api/strep', action.payload);
        yield put({ type: 'FETCH_STREP' }); // Fetch updated incidence list
    } catch (error) {
        console.error('Error with STREP POST request', error);
    }
}

function* fetchPinkEye() {
    try {
        const response = yield call(axios.get, '/api/pinkeye');
        yield put({ type: 'SET_PINK_EYE', payload: response.data });
    } catch (error) {
        console.error('Error fetching PINK EYE:', error);
    }
}

function* addPinkEye(action) {
    try {
        yield call(axios.post, '/api/pinkeye', action.payload);
        yield put({ type: 'FETCH_PINK_EYE' }); // Fetch updated incidence list
    } catch (error) {
        console.error('Error with PINK EYE POST request', error);
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
    yield takeLatest('FETCH_STOMACH_FLU', fetchStomachFlu)
    yield takeLatest('ADD_STOMACH_FLU', addStomachFlu)
    yield takeLatest('DELETE_STOMACH_FLU', deleteStomachFlu)
    yield takeLatest('FETCH_STREP', fetchStrep)
    yield takeLatest('ADD_STREP', addStrep)
    yield takeLatest('DELETE_STREP', deleteStrep)
    yield takeLatest('FETCH_PINK_EYE', fetchPinkEye)
    yield takeLatest('ADD_PINK_EYE', addPinkEye)
    yield takeLatest('DELETE_PINK_EYE', deletePinkEye)
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

function* deleteStomachFlu(action) {
    try {
        yield axios.delete(`/api/stomach/${action.payload}`);
        yield put({ type: 'FETCH_STOMACH_FLU'});
    } catch (error) {
        console.error('Error with STOMACH FLU DELETE request', error);
    }
}

function* deleteStrep(action) {
    try {
        yield axios.delete(`/api/strep/${action.payload}`);
        yield put({ type: 'FETCH_STREP'});
    } catch (error) {
        console.error('Error with STREP DELETE request', error);
    }
}

function* deletePinkEye(action) {
    try {
        yield axios.delete(`/api/pinkeye/${action.payload}`);
        yield put({ type: 'FETCH_PINK_EYE'});
    } catch (error) {
        console.error('Error with PINK EYE DELETE request', error);
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



