import { createContext, useContext, useState } from "react";

const userAvatar = require("@/media/TestUserAvatar.png");

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "wtf403",
    avatar: userAvatar,
  });

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
