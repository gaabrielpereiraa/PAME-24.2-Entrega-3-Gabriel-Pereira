"use client";
import { useEffect } from 'react';
import { useUser } from '../context/UserContext';

const UserInitializer: React.FC = () => {
  const { login } = useUser();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      if (token) {
        login(email, token);
      }
    }
  }, [login]);

  return null;
};

export default UserInitializer;
