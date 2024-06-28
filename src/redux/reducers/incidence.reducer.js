const initialState = [];

const incidenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INCIDENCE':
            return action.payload;
        case 'ADD_INCIDENCE_SUCCESS':
            return state; // You might want to return a new state if needed
        default:
            return state;
    }
};

export default incidenceReducer;
