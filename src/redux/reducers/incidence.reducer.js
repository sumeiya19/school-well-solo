
const incidenceReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INCIDENCE':
            return action.payload; 
        case 'ADD_INCIDENCE':
            return [...state, action.payload]; 
        default:
            return state;
    }
};


export default incidenceReducer;
