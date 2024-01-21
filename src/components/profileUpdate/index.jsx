/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import styles from './update.module.css';

// const ProfileUpdatePage = ({ profile, onUpdate }) => {
//   const [firstName, setFirstName] = useState(profile.firstName);
//   const [lastName, setLastName] = useState(profile.lastName);
//   const [email, setEmail] = useState(profile.email);
//   const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedProfile = {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//     };
//     onUpdate(updatedProfile);
//   };

//   return (
//     <div>
//       <h1 className={styles.heading}>Update Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={handleFirstNameChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={handleLastNameChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//           />
//         </div>
//         <button type="submit" className={styles.button}>
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProfileUpdatePage;

import React, { useEffect, useState } from 'react';
import styles from './update.module.css';

const ProfileUpdatePage = ({ profile, onUpdate }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Retrieve the form data from localStorage
    const storedFormData = localStorage.getItem('formData');

    if (storedFormData) {
      // Parse the JSON string back into an object
      const parsedFormData = JSON.parse(storedFormData);

      // Set the retrieved form data to the state
      setFirstName(parsedFormData.firstName);
      setLastName(parsedFormData.lastName);
      setEmail(parsedFormData.email);
      setPhoneNumber(parsedFormData.phoneNumber);
    }
  }, []);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    onUpdate(updatedProfile);

    // Store the updated form data in localStorage
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <div>
      <h1 className={styles.heading}>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <button type="submit" className={styles.button}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdatePage;
