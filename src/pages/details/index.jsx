import React, { useContext } from "react";
import { RegistrationContext } from "./context";

function Details() {
  const { formData, userImage } = useContext(RegistrationContext);
  // Access formData and userImage here

  return (
    <div>
      {/* Display details using the context values */}
      <h2>Details</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <img src={userImage} alt="User" />
    </div>
  );
}

export default Details;