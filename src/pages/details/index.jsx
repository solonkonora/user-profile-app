// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './details.module.css';
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  // Retrieve form data from localStorage
  const formData = JSON.parse(localStorage.getItem("formData"));

  const navigate = useNavigate();

  const handleUpdateData = (event) => {
    event.preventDefault();
    navigate("/profile-update");
  }

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
      <button className="button1" onClick={handleUpdateData}>Update Data</button>
    </div>
  );
}

export default DetailsPage;