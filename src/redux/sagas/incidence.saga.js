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

export default function* rootSaga() {
    yield takeLatest('ADD_INCIDENCE', addIncidence);
    yield takeLatest('FETCH_INCIDENCE', fetchIncidence);
    yield takeLatest('DELETE_ITEM', deleteIncidence)
    yield takeLatest('FETCH_STUDENT', fetchStudent)
    yield takeLatest('ADD_STUDENT', addStudent)
    yield takeLatest('FETCH_TOTAL_POPULATION', fetchTotalPopulation)
}

function* deleteIncidence(action) {
    try {
        yield axios.delete(`/api/incidence/${action.payload}`);
        yield put({ type: 'FETCH_INCIDENCE'});
    } catch (error) {
        console.error('Error with shelf DELETE request', error);
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
        yield put({ type: 'FETCH_STUDENT' }); // Fetch updated incidence list
    } catch (error) {
        console.error('Error with student POST request', error);
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



