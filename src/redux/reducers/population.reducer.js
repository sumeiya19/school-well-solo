const totalPopulationReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_TOTAL_POPULATION':
            return action.payload;
        default:
            return state;
    }
};

export default totalPopulationReducer;
