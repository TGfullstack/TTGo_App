'use client';
const jwtDecode = require('jwt-decode');
import { useEffect, useState } from 'react';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser(decoded); // this gives { id, iat, exp }
    } catch (err) {
      console.error('Invalid token', err);
      localStorage.removeItem('token');
      setUser(null);
    }
  }, []);

  return { user, isLoggedIn: !!user };
}
