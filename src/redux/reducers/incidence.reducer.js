

const incidenceReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INCIDENCE':
            return action.payload;
        case 'ADD_INCIDENCE_SUCCESS':
            return state; 
        default:
            return state;
    }
};

export default incidenceReducer;
