import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

function Authen({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default Authen;
