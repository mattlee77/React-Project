import React, { useState, useEffect } from 'react';
import '../styles/PracticalExperience.css';

function PracticalExperience({data, updateData}) {
    const [experienceList, setExperienceList] = useState(
        data.length > 0 ? data : [{
            id: Date.now(),
            company: '',
            position: '',
            responsibilities: '',
            startDate: '',
            endDate: ''
        }]
    );

    const handleChange = (id, e) => {
        const {name, value} = e.target;
        const updatedList = experienceList.map(item => {
            if (item.id === id) {
                return {...item, [name]: value};
            }
            return item;
        });
        setExperienceList(updatedList);
    };

    const addExperience = () => {
        setExperienceList([
            ...experienceList,
            {
                id: Date.now(),
                company: '',
                position: '',
                responsibilities: '',
                startDate: '',
                endDate: ''
            }
        ]);
    };

    const removeExperience = (id) => {
        setExperienceList(experienceList.filter(item => item.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(experienceList);
        alert('Practical experience updated!');
    };

    return (
        <div className="practical-experience">
            <h2>Practical Experience</h2>
            <form onSubmit={handleSubmit}>
                {experienceList.map((experience, index) => (
                    <div key={experience.id} className="experience-entry">
                        <h3>Experience #{index+1}</h3>

                        <div className="form-group">
                            <label htmlFor={`company-${experience.id}`}>Company Name:</label>
                                <input 
                                    type="text" 
                                    id={`company-${experience.id}`}
                                    name="company"
                                    value={experience.company}
                                    onChange={(e) => handleChange(experience.id, e)}
                                    placeholder="Enter company name"
                                />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`position-${experience.id}`}>Position Title:</label>
                                <input 
                                    type="text" 
                                    id={`position-${experience.id}`}
                                    name="position"
                                    value={experience.position}
                                    onChange={(e) => handleChange(experience.id, e)}
                                    placeholder="Enter position title"
                                />
                        </div>

                        <div className="form-group">
                            <label htmlFor={`responsibilities-${experience.id}`}>Responsibilities:</label>
                                <textarea
                                    id={`responsibilities-${experience.id}`}
                                    name="responsibilities"
                                    value={experience.responsibilities}
                                    onChange={(e) => handleChange(experience.id, e)}
                                    placeholder="Enter your main responsibilities"
                                />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor={`startDate-${experience.id}`}>Start Date:</label>
                                    <input 
                                        type="date" 
                                        id={`startDate-${experience.id}`}
                                        name="startDate"
                                        value={experience.startDate}
                                        onChange={(e) => handleChange(experience.id, e)}
                                        placeholder = "MM/YYYY"
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`endDate-${experience.id}`}>End Date:</label>
                                    <input 
                                        type="date" 
                                        id={`endDate-${experience.id}`}
                                        name="endDate"
                                        value={experience.endDate}
                                        onChange={(e) => handleChange(experience.id, e)}
                                        placeholder = "MM/YYYY"
                                    />
                            </div>
                        </div>

                        {experienceList.length > 1 && (
                            <button
                                type="button"
                                className = "remove-btn"
                                onClick={() => removeExperience(experience.id)}
                            >
                                Remove Experience
                            </button>
                        )}
                    </div>
                ))}

                <button type="button" className="add-btn" onClick={addExperience}>
                    Add Another Experience
                </button>

                <button type="submit" className="update-btn">
                    Update Experience
                </button>
            </form>
        </div>
    );

}

export default PracticalExperience;