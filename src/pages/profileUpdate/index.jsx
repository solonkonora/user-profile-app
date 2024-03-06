import React, { useContext } from "react";
import { RegistrationContext } from "./context";

function Update() {
  const { formData, storeFormData } = useContext(RegistrationContext);

  const handleFormUpdate = () => {
    // Update form data using storeFormData function
    const updatedData = {
      ...formData,
      firstName: "Updated First Name",
      lastName: "Updated Last Name",
    };
    storeFormData(updatedData);
  };

  return (
    <div>
      {/* Update form using the context values */}
      <h2>Update</h2>
      <input
        type="text"
        value={formData.firstName}
        onChange={(e) => storeFormData({ ...formData, firstName: e.target.value })}
      />
      <input
        type="text"
        value={formData.lastName}
        onChange={(e) => storeFormData({ ...formData, lastName: e.target.value })}
      />
      <button onClick={handleFormUpdate}>Update</button>
    </div>
  );
}

export default Update;