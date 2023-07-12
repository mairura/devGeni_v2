import React, { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext({
  user: null,
  isLoading: true,
  login: () => {},
});

export const AuthProvider: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = ({ children }) => {
  const [user, setuser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = () => {
    return (window.location.href = "http://localhost:8000/login");
  };

  const logout = () => {
    setuser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login }}>
      {children}
    </AuthContext.Provider>
  );
};
