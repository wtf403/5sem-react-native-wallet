import { createContext, useContext, useState } from "react";

const userAvatar = require("@/media/TestUserAvatar.png");

export const AuthContext = createContext({
  user: {
    username: "wtf403",
    avatar: "",
  },
  setUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
