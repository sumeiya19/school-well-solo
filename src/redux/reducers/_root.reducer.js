import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import incidenceReducer from './incidence.reducer';
import studentReducer from './student.reducer';
import editIncidence from './edit.reducer';
import totalPopulationReducer from './population.reducer';
import recordReducer from './record.reducer';
import coldRecordsReducer from './cold.reducer';
import editCold from './editcold.reducer';
import fluReducer from './flu.reducer';
import editFlu from './editflu.reducer';
import stomachFluReducer from './stomachflu.reducer';
import editStomachFlu from './editstomachflu.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  incidenceReducer,
  studentReducer,
  editIncidence,
  totalPopulationReducer,
  recordReducer,
  coldRecordsReducer,
  editCold,
  fluReducer,
  editFlu,
  stomachFluReducer,
  editStomachFlu,
});

export default rootReducer;
