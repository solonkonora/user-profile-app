import { createContext, useContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useProfile() {
  return useContext(ProfileContext);
}

// eslint-disable-next-line react/prop-types
export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    // load from localStorage on first render
    const stored = localStorage.getItem('formData');
    return stored ? JSON.parse(stored) : {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    };
  });
  const [userImage, setUserImage] = useState(() => localStorage.getItem('userImage') || '');

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    if (userImage) localStorage.setItem('userImage', userImage);
  }, [userImage]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, userImage, setUserImage }}>
      {children}
    </ProfileContext.Provider>
  );
}
