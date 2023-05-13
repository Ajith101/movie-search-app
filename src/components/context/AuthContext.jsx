import React, { createContext, useContext, useState } from "react";

export const AuthData = createContext();

export const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthData.Provider value={{ auth, setAuth }}>{children}</AuthData.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthData);
};
