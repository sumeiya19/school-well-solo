// Reducer example for coldRecords
const strepReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STREP':
            return action.payload;
        case 'ADD_STREP':
            return [...state, action.payload];
        default:
            return state;
    }
}; 



export default strepReducer