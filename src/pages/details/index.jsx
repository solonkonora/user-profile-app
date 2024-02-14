// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';
// import './details.module.css';
// import { useNavigate } from "react-router-dom";

// function DetailsPage() {
//   // Retrieving form data and image data from localStorage
//   const formData = JSON.parse(localStorage.getItem("formData"));
//   const userImage = localStorage.getItem("userImage");

//   const navigate = useNavigate();

//   const handleUpdateData = (event) => {
//     event.preventDefault();
//     navigate("/profile-update");
//   }

//   return (
//     <div className="container">
//       <h1 className="heading">Registration Details</h1>
//       {formData ? (
//         <div>
//           {userImage && ( // Display the stored image if available
//             <div>
//               <strong>Profile Image:</strong>
//               <img src={userImage} alt="user image" style={{ width: "200px", height: "200px" }} />
//             </div>
//           )}

//           <p>
//             <strong>First Name:</strong> {formData.firstName}
//           </p>
//           <p>
//             <strong>Last Name:</strong> {formData.lastName}
//           </p>
//           <p>
//             <strong>Email:</strong> {formData.email}
//           </p>
//           <p>
//             <strong>Phone Number:</strong> {formData.phoneNumber}
//           </p>
//         </div>
//       ) : (
//         <p className="no-data-message">No registration data available.</p>
//       )}
//       <button className="button1" onClick={handleUpdateData}>Update Data</button>
//     </div>
//   );
// }

// export default DetailsPage;




// eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react';
import './details.module.css';
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  // Retrieve form data from localStorage
  const formData = JSON.parse(localStorage.getItem("formData"));
  const userImage = localStorage.getItem("userImage"); // Retrieve the stored image data

  const navigate = useNavigate();

  const handleUpdateData = (event) => {
    event.preventDefault();
    navigate("/profile-update");
  }

  return (
    <div className="container">
      <h1 className="heading">Registration Details</h1>
      {formData ? (
        <div className="details-container">
          {userImage && ( // Display the stored image if available
            <div className="image-container">
              <strong className="image-heading">Profile Image:</strong>
              <img src={userImage} alt="user image" className="user-image" />
            </div>
          )}

          <div className="text-container">
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
        </div>
      ) : (
        <p className="no-data-message">No registration data available.</p>
      )}
      <button className="button1" onClick={handleUpdateData}>Update Data</button>
    </div>
  );
}

export default DetailsPage;