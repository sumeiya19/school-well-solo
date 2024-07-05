// Reducer example for coldRecords
const coldRecordsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COLD':
            return action.payload;
        case 'ADD_COLD':
            return [...state, action.payload];
        default:
            return state;
    }
}; 



export default coldRecordsReducer