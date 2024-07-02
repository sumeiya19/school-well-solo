// hold only the single student object being edited
// const editReducer = (state  = {}, action) => {
//     if (action.type === 'SET_EDIT_STUDENT') {
//         return action.payload
//     } else if(action.type === 'EDIT_ONCHANGE') {
//         return {
//             // ! spreading previous state into a new object.
//             // * providing a key-value pair, which will:
//                 // If the kv pair exists, will override
//                 // If the kv pair doesnt exist, will add.
//             ...state,
//             // * github_name: someTextInput
//             [action.payload.property]: action.payload.value
//         }
//     } else if(action.type === 'EDIT_CLEAR') {
//         return {github_name: ''}
//     }
//     return state;
// } 

// export default editReducer