const stomachFluReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STOMACH_FLU':
            return action.payload;
        case 'ADD_STOMACH_FLU':
            return [...state, action.payload];
        default:
            return state;
    }
}; 




export default stomachFluReducer