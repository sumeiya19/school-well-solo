const editCold = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_STUDENT':
            return {
                ...state,
                ...action.payload
            };

        case 'EDIT_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            };

        case 'EDIT_CLEAR':
            return {}; // Return an empty object to clear all properties

        default:
            return state;
    }
};

export default editCold;

