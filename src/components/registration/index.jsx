// import React, { useState } from 'react';
// // import styles from ".registration.module.css"

// const RegistrationPage = ({ onRegister }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleRegister = (event) => {
//     event.preventDefault();
//     const profile = {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//     };
//     onRegister(profile);
//   };

//   return (
//     <div>
//       <h1>Registration Page</h1>
//       <form onSubmit={handleRegister}>
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
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationPage;