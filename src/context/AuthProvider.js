import React, { createContext, useState } from "react";
import Passcode from "../screens/authScreens/Passcode";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {user ? children : <Passcode />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
