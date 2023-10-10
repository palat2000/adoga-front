import { useState, createContext } from "react";
import axios from "../config/axios";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (input) => {
    try {
      const {
        data: { token, user },
      } = await axios.post("/auth/login", input);
      setUser(user);
      localStorage.setItem("token", token);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
