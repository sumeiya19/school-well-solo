const editStudent = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_STUDENT':
            return action.payload;
        case 'EDIT_STUDENT_ONCHANGE':
            return {
                ...state,
                [action.payload.property]: action.payload.value,
            };
        case 'EDIT_STUDENT_CLEAR':
            return {};
        default:
            return state;
    }
};

export default editStudent;
