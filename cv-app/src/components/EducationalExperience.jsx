import React, { useState, useEffect } from 'react';
import '../styles/EducationalExperience.css';

function EducationalExperience({ data, updateData }) {
      // ===== STATE =====
  // Each education entry needs:
  // - id: unique identifier for React keys
  // - school, degree, startDate, endDate: form fields
    const [educationList, setEducationList] = useState(
        // Start with one empty education entry for better UX
        data.length > 0 ? data : [{
            id: Date.now(), // Simple unique ID using timestamp
            school: '',
            degree: '',
            startDate: '',
            endDate: ''
        }]
    );

      // ===== HANDLERS =====
  
  // Update a specific field in a specific education entry
    const handleChange = (id, e) => {
        const { name, value } = e.target;
        // Map through array, find the item with matching id, update its field
        const updatedList = educationList.map(item => {
            if (item.id === id) {
                return { ...item, [name]: value };
            }
            return item;
        });
        setEducationList(updatedList);
    };
    // Add a new empty education entry
    const addEducation = () => {
        setEducationList([
            ...educationList,
            {
                id: Date.now(),
                school: '',
                degree: '',
                startDate: '',
                endDate: ''
            }
        ]);
    };

    const removeEducation = (id) => {
        setEducationList(educationList.filter(item => item.id !== id));

};
    // Submit all education data to parent
    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(educationList);
        alert('Educational experience updated!');
    };

    return (
        <div className="educational-experience">
            <h2>Educational Experience</h2>
            <form onSubmit={handleSubmit}>
                {/* Map through array to create a form section for each education entry */}
                {educationList.map((education, index) => (
                    <div key={education.id} className="education-entry">
                        <h3>Education #{index + 1}</h3>

                        <div className="form-group">
                            <label htmlFor={`school-${education.id}`}>School Name:</label>
                            <input
                                type="text"
                                id={`school-${education.id}`}
                                name="school"
                                value={education.school}
                                onChange={(e) => handleChange(education.id, e)}
                                placeholder="Enter school name"
                                />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`school-${education.id}`}>Degree/Title of Study:</label>
                            <input
                                type="text"
                                id={`degree-${education.id}`}
                                name="degree"
                                value={education.degree}
                                onChange={(e) => handleChange(education.id, e)}
                                placeholder="Enter degree or field of study"
                                />
                        </div>    
                            <div className = "form-row">
                                <div className="form-group">
                                    <label htmlFor={`startDate-${education.id}`}>Start Date:</label>
                                    <input
                                        type="text"
                                        id={`startDate-${education.id}`}
                                        name="startDate"
                                        value={education.startDate}
                                        onChange={(e) => handleChange(education.id, e)}
                                        placeholder="MM/YYYY"
                                    />
                                </div>  

                                <div className="form-group">
                                    <label htmlFor={`endDate-${education.id}`}>End Date:</label>
                                    <input
                                        type="text"
                                        id={`endDate-${education.id}`}
                                        name="endDate"
                                        value={education.endDate}
                                        onChange={(e) => handleChange(education.id, e)}
                                        placeholder="MM/YYYY"
                                    />
                                </div>
                        </div>                
                         {/* Only show remove button if there's more than one entry */}
                        {educationList.length > 1 && (
                            <button 
                                type="button"
                                className="remove-btn"
                                onClick={() => removeEducation(education.id)}
                            >
                                Remove Education
                            </button>
                        )}
                    </div>
                ))}

                <button type="button" className="add-btn" onClick={addEducation}>
                    Add Another Education
                </button>

                <button type="submit" className="update-btn">
                    Update Education
                </button>
            </form>
        </div>
    );
}

export default EducationalExperience;
