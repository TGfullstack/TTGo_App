'use client';
/** Auth Context
 * ? What is Context?
 * A React hook that offers a way to manage state globally
 *
 * * Provides a way to share data between components without manually passing props through
 * * each level of the component tree
 *
 * Auth Context
 * - Centralized access to user and isLoggedIn
 * - Login/Logout functions available app-wide
 * - Cleaner, reusable auth logic
 * - Easier redirection and protected route handling
 */

const jwtDecode = require('jwt-decode');
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error('Token decode error', err);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to access context
export const useAuth = () => useContext(AuthContext);
