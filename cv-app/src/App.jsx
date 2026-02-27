import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GeneralInfo from './components/GeneralInfo'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import CVDisplay from './components/CVDisplay'
import './App.css'

function App() {
  // ===== STATE MANAGEMENT =====
  // useState hook creates state variables that trigger re-renders when changed
  
  // Controls whether we show forms (editing mode) or the CV display (view mode)
  // Start with true so users see forms first
  //State to track if we are in Edit or View mode
  const [isEditing, setIsEditing] = useState(true);
  
  //State for all form data
  const [cvData, setCvData] = useState({
    general: {
      name: '',
      email: '',
      phone: ''
    },
    education: [],
    experience: []
  });
    // ===== EVENT HANDLERS =====
  // These functions update state and are passed down to child components
  
  // Called when user clicks "Submit CV" - switches to view mode
  //Handle submit button click
  const handleSubmit = () => {
    console.log('Submitting CV data:', cvData); // Debug log
    setIsEditing(false);
  };

  //Handle edit button click
  const handleEdit = () => {
    setIsEditing(true);
  };

  //Update general info
  const updateGeneralInfo = (generalData) => {
    console.log('App received general data:', generalData);
    setCvData({
      ...cvData,
      general: generalData
    });
  };

  //Update education array
  const updateEducation = (educationData) => {
    setCvData({
      ...cvData,
      education: educationData
    });
  };

  //Update experience array
  const updateExperience = (experienceData) => {
    setCvData({
      ...cvData,
      experience: experienceData
    });
  };

    // ===== RENDERING =====
  // Conditional rendering: Show different UI based on isEditing state
  return (
    <div className="App">
      <h1>CV Application</h1>
{/* 
      <div style={{backgroundColor: '#e3f2fd', padding: '15px', marginBottom: '20px', borderRadius: '5px'}}>
        <strong>App State Debug:</strong><br/>
        General: {cvData.general.name || 'empty'}, {cvData.general.email || 'empty'}, {cvData.general.phone || 'empty'}<br/>
        Education entries: {cvData.education.length}<br/>
        Experience entries: {cvData.experience.length}
      </div> */}

      {isEditing ? (
        //  {/* Pass data and update functions as props to child components */}
        <>
          <GeneralInfo
            data={cvData.general} // Pass current general data
            updateData={updateGeneralInfo} // Pass function to update general data
          />
          <EducationalExperience
            data={cvData.education}
            updateData={updateEducation}
          />
          <PracticalExperience
            data={cvData.experience}
            updateData={updateExperience}
          />
          <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <CVDisplay data={cvData} />
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
        </>
      )
    
    }
    </div>
  );
}

export default App
