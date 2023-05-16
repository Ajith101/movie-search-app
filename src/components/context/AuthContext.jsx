import React, { createContext, useContext, useState } from "react";

export const AuthData = createContext();

export const AuthContext = ({ children }) => {
  const authLocal = () => {
    const localAuth = localStorage.getItem("user");
    if (localAuth) {
      return true;
    } else {
      return false;
    }
  };

  const [auth, setAuth] = useState(authLocal());

  return (
    <AuthData.Provider value={{ auth, setAuth }}>{children}</AuthData.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthData);
};
