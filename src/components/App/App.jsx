import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from '../HomePage/HomePage';
import AddIncidence from '../AddIncidence/AddIncidence';
// import AddNewStudent from '../AddNewStudent/AddNewStudent';
import AddIncidenceForm from '../AddIncidenceForm/AddIncidenceForm';
import Results from '../Results/Results';
import DisplayEntries from '../DisplayEntries/DisplayEntries';
import EditForm from '../AddIncidence/EditForm';
import TotalPopulation from '../AddIncidence/TotalPopulation';
import IncidenceRecord from '../IncidenceRecord/IncidenceRecord';
import ColdRecords from '../ColdRecords/ColdRecords';
import EditColdRecord from '../ColdRecords/EditColdRecord';
import FluRecords from '../FluRecords/FluRecords';
import EditFlu from '../FluRecords/EditFlu';
import StomachFlu from '../StomachFlu/StomachFlu';
import EditStomachFlu from '../StomachFlu/EditStomachFlu';
import StrepRecords from '../StrepRecords/StrepRecords';
import EditStrep from '../StrepRecords/EditStrep';
import PinkEyeRecords from '../PinkEyeRecords/PinkEyeRecords';
import EditPinkEye from '../PinkEyeRecords/EditPinkEye';
import ColdTotalPopulation from '../ColdRecords/ColdTotalPopulation';
import FluTotal from '../FluRecords/FluTotal';
import PinkEyeTotal from '../PinkEyeRecords/PinkEyeTotal';
import StomachFluTotal from '../StomachFlu/StomachFluTotal';
import StrepTotal from '../StrepRecords/StrepTotal';
import SendEmailButton from '../ColdRecords/NotifyAdmin';
import editStudent from '../../redux/reducers/editstudent.reducer';

import './App.css';
import EditStudent from '../InfoPage/EditStudent';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:5173/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/home">
            <HomePage/>
          </ProtectedRoute>

          <ProtectedRoute exact path = "/results">
            <Results />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/addincidenceform">
            <AddIncidenceForm />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/edit">
        <EditForm />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/editcold">
        <EditColdRecord />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/display">
            <DisplayEntries />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/addnewincidence">
            <AddIncidence />
            <TotalPopulation />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/newrecord">
           <IncidenceRecord />
          </ProtectedRoute>  

          {/* <ProtectedRoute exact path = "/addnewstudent">
            <AddNewStudent />
          </ProtectedRoute> */}

          <ProtectedRoute exact path = "/coldrecords">
            <ColdRecords />
            <ColdTotalPopulation />
            <SendEmailButton />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/flurecords">
            <FluRecords />
            <FluTotal />
            <SendEmailButton />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/editflu">
            <EditFlu />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/stomachflu">
            <StomachFlu />
            <StomachFluTotal />
            <SendEmailButton />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/editstomachflu">
            <EditStomachFlu />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/strep">
            <StrepRecords />
            <StrepTotal />
            <SendEmailButton />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/editstrep">
            <EditStrep />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/pinkeye">
            <PinkEyeRecords />
            <PinkEyeTotal />
            <SendEmailButton />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/editpinkeye">
            <EditPinkEye />
          </ProtectedRoute>

          <ProtectedRoute exact path = "/editstudent">
            <EditStudent />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
