import React, { useState, useEffect } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo({data, updateData}) {
      // ===== LOCAL STATE =====
  // We maintain local form state so we don't update parent on every keystroke
  // Only when user clicks "Update" do we send data to parent
    const [formData, setFormData] = useState({
        name: data.name || '',
        email: data.email ||'',
        phone: data.phone || ''
    });

    // useEffect(() => {
    //     setFormData({
    //         name: data.name || '',
    //         email: data.email || '',
    //         phone: data.phone || ''
    //     });
    // }, [data]);

      // ===== EVENT HANDLERS =====
  
  // Update local state as user types
  // This creates a "controlled component" - React controls the input value
    const handleChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from input
        console.log('Changing:', name, value);
        setFormData({
            ...formData,
            [name]: value
        });
    };

     // Send local state to parent when user clicks Update
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh (default form behavior)
        updateData(formData); // Send data up to parent
        console.log('Submit clicked! Form data:', formData); // Debug log
        alert('Update button clicked! Check console for data.');
    };

     // Simple test button to check if state is working
    // const testState = () => {
    // console.log('Current formData:', formData);
    // alert(`Current form data: Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`);
    //  };

    return (
        <div className="general-info">
            <h2>General Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    {/* Each input is a "controlled component" - value comes from state, changes update state */}
                    <input 
                    type="text"
                    id="name" // Associates with label's htmlFor
                    name="name" // Matches state property name
                    value={formData.name} // Controlled by React state
                    onChange={handleChange} // Update state on every keystroke
                    placeholder="Enter your full name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    />
                </div>
                {/* <button type="button" onClick={testState} className="test-btn" style={{backgroundColor: '#ff9800', marginRight: '10px'}}>
                    Test State
                </button> */}
                <button type="submit" className="update-btn">Update General Info</button>
                 {/* <div style={{marginTop: '20px', padding: '10px', backgroundColor: '#e0e0e0'}}>
                    <strong>Debug Info:</strong><br/>
                    Name: {formData.name}<br/>
                    Email: {formData.email}<br/>
                    Phone: {formData.phone}
                </div> */}
            </form>
        </div>
        
    );
}

export default GeneralInfo;