
const studentReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STUDENT':
            return action.payload;
        case 'ADD_STUDENT': // Added a colon here
            return [...state, action.payload]
        default:
            return state;
    }
}

export default studentReducer;
