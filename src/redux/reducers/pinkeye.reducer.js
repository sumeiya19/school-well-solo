const pinkEyeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PINK_EYE':
            return action.payload;
        case 'ADD_PINK_EYE':
            return [...state, action.payload];
        default:
            return state;
    }
}; 



export default pinkEyeReducer