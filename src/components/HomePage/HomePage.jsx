import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css'; 

function HomePage() {
    const history = useHistory();

    const handleColdRecords = () => {
        history.push('/coldrecords');
    };

    const handleFluRecords = () => {
        history.push('/flurecords');
    };

    const handleStrepRecords = () => {
        history.push('/strep');
    };

    const handleStomachFluRecords = () => {
        history.push('/stomachflu');
    };

    const handlePinkEyeRecords = () => {
        history.push('/pinkeye');
    };

    return (
        <div className="home-container">
            <p className="welcome-message">
            Welcome to SchoolWell! Your digital tool designed to help school administrators manage and monitor students with contagious illnesses. Start recording incidents below!
            </p>

            <h3 className="section-title">Create New Incidence Records</h3>

            <button className="record-button" onClick={handleColdRecords}>Cold Records</button>
            <button className="record-button" onClick={handleFluRecords}>Flu Records</button>
            <button className="record-button" onClick={handleStrepRecords}>Strep Records</button>
            <button className="record-button" onClick={handleStomachFluRecords}>Stomach Flu Records</button>
            <button className="record-button" onClick={handlePinkEyeRecords}>Pink Eye Records</button>
        </div>
    );
}

export default HomePage;

