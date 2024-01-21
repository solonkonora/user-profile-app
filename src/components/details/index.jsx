import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Registration Details</h1>
      {formData ? (
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
        </div>
      ) : (
        <p>No registration data available.</p>
      )}
    </div>
  );
};

export default DetailsPage;
