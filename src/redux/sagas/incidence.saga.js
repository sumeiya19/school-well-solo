import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* addIncidence(action) {
    try {
        yield call(axios.post, '/api/incidence', action.payload);
        yield put({ type: 'ADD_INCIDENCE_SUCCESS' });
        // Optionally, fetch updated incidence list
        yield put({ type: 'FETCH_INCIDENCE' });
    } catch (error) {
        console.error('Error with incidence POST request', error);
        yield put({ type: 'ADD_INCIDENCE_FAILURE', error });
    }
}

function* fetchIncidence() {
    try {
        const response = yield call(axios.get, '/api/incidence');
        yield put({ type: 'SET_INCIDENCE', payload: response.data });
    } catch (error) {
        console.error('Error with incidence GET request', error);
    }
}

// function* deleteShelfItem(action) {
//     try {
//         yield axios.delete(`/api/incidence/${action.payload}`);
//         yield put({ type: ''});
//     } catch (error) {
//         console.error('Error with shelf DELETE request', error);
//     }
// }

export default function* rootSaga() {
    yield takeLatest('ADD_INCIDENCE', addIncidence);
    yield takeLatest('FETCH_INCIDENCE', fetchIncidence);
}
