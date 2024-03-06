import React, { createContext, useState } from "react";

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [userImage, setUserImage] = useState("");

  const storeFormData = (data) => {
    setFormData(data);
  };

  const storeUserImage = (image) => {
    setUserImage(image);
  };

  return (
    <RegistrationContext.Provider  // the provider wraps around the components that need access to the context data and passes the values through its value prop.
      value={{
        formData,
        userImage,
        storeFormData,
        storeUserImage,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};