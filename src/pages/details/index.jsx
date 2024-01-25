// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './details.module.css';

const DetailsPage = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Retrieve the form data from localStorage
    const storedFormData = localStorage.getItem('formData');
    
    if (storedFormData) {
      // Parse the JSON string back into an object
      const parsedFormData = JSON.parse(storedFormData);
      
      // Set the retrieved form data to the state
      setFormData(parsedFormData);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Registration Details</h1>
      {formData ? (
        <div>
          <p>
            <strong>First Name:</strong> {formData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {formData.phoneNumber}
          </p>
        </div>
      ) : (
        <p className="no-data-message">No registration data available.</p>
      )}

<button type="submit" className="button1">
          Update Data
        </button>
    </div>
  );
};

export default DetailsPage;