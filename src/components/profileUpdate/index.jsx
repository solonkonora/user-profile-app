// import React, { useState } from 'react';
// import styles from './update.modules.css'

// const ProfileUpdatePage = ({ profile, onUpdate }) => {
//   const [firstName, setFirstName] = useState(profile.firstName);
//   const [lastName, setLastName] = useState(profile.lastName);
//   const [email, setEmail] = useState(profile.email);
//   const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);

//   const handleUpdate = (event) => {
//     event.preventDefault();
//     const updatedProfile = {
//       ...profile,
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//     };
//     onUpdate(updatedProfile);
//   };

//   return (
//     <div>
//       <h1>Profile Update</h1>
//       <form onSubmit={handleUpdate}>
//         <input
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default ProfileUpdatePage;