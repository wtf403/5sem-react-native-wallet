import React, { createContext, useState } from "react";
import PasscodeScreen from "../screens/authScreens/PasscodeScreen";

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
      {user ? children : <PasscodeScreen />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
