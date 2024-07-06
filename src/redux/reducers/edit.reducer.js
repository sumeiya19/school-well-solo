

const editIncidence = (state = {}, action) => {
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
            return '';

        default:
            return state;
    }
};

export default editIncidence