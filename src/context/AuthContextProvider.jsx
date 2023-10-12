import { useState, createContext } from "react";
import axios from "../config/axios";
import { useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      axios.get("/auth/me").then((res) => setUser(res.data.user));
    }
  }, []);

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

  const registerPlace = async (input) => {
    const {
      data: { placer },
    } = await axios.post("/auth/register/place", input);
    setUser(placer);
  };

  const logout = () => {
    localStorage.removeItem("TOKEN");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, registerPlace, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
