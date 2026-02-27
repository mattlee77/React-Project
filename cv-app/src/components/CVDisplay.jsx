import React, { useState } from 'react';
import '../styles/CVDisplay.css';

function CVDisplay({ data }) {
    const { general, education, experience } = data;

    return (
        <div className="cv-display">
            <h2>Your CV</h2>

            <section className="cv-section">
                <h3>General Information</h3>
                <div className="cv_content">
                    <p><strong>Name:</strong> {general.name || 'Not provided'}</p>
                    <p><strong>Email:</strong> {general.email || 'Not provided'}</p>
                    <p><strong>Phone:</strong> {general.phone || 'Not provided'}</p>
                </div>
            </section>

            <section className="cv-section">
                <h3>Education</h3>
                <div className="cv-content">
                    {education.length > 0 ? (
                        education.map((edu, index) => (
                            <div key={edu.id} className="cv-item">
                                <h4>Education #{index+1}</h4>
                                <p><strong>School:</strong> {edu.school || 'Not provided'}</p>
                                <p><strong>Degree:</strong> {edu.degree || 'Not provided'}</p>
                                <p><strong>Dates:</strong> {edu.startDate || '?'} - { edu.endDate || 'Present'}</p>
                            </div>
                        ))
                    ) : (
                        <p>No education added</p>
                    )}
                </div>
            </section>

            <section className="cv-section">
                <h3>Work Experience</h3>
                <div className="cv-content">
                    {experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <div key={exp.id} className="cv-item">
                                <h4>Experience #{index+1}</h4>
                                <p><strong>Company:</strong> {exp.company || 'Not provided'}</p>
                                <p><strong>Position:</strong> {exp.position || 'Not provided'}</p>
                                <p><strong>Responsibilities:</strong> {exp.responsibilities || 'Not provided'}</p>
                                <p><strong>Dates:</strong> {exp.startDate || '?'} - { exp.endDate || 'Present'}</p>
                            </div>
                        ))
                    ) : (
                        <p>No work experience added</p>
                    )
                }
                </div>
                </section>
        </div>
    );
}

export default CVDisplay;