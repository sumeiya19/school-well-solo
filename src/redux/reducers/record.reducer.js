
const recordReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECORD':
            return action.payload;
        case 'ADD_RECORD': // Added a colon here
            return [...state, action.payload]
        default:
            return state;
    }
}

export default recordReducer;