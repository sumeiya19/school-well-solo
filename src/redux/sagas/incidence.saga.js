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
}

function* deleteIncidence(action) {
    try {
        yield axios.delete(`/api/incidence/${action.payload}`);
        yield put({ type: 'FETCH_INCIDENCE'});
    } catch (error) {
        console.error('Error with shelf DELETE request', error);
    }
}