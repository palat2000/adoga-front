import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

function IsPlacer({ children }) {
  const { user } = useAuth();
  if (user?.isPlacer) {
    return children;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Navigate to="/" />;
}

export default IsPlacer;
