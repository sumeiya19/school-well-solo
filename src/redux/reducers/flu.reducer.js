// Reducer example for coldRecords
const fluReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FLU':
            return action.payload;
        case 'ADD_FLU':
            return [...state, action.payload];
        default:
            return state;
    }
}; 



export default fluReducer