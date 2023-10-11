import { useState, createContext } from "react";
import axios from "../config/axios";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (input) => {
    const {
      data: { token, user },
    } = await axios.post("/auth/login", input);
    setUser(user);
    localStorage.setItem("TOKEN", token);
  };

  const register = async (input) => {
    const {
      data: { token, user },
    } = await axios.post("/auth/register", input);
    setUser(user);
    localStorage.setItem("TOKEN", token);
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
