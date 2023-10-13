import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function RedirectIfPlacer({ children }) {
  const { user } = useAuth();

  if (user?.isPlacer) {
    return <Navigate to="user-place" />;
  }
  return children;
}

export default RedirectIfPlacer;
