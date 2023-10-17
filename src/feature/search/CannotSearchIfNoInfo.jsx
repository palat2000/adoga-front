import { Navigate } from "react-router-dom";
import useSearch from "../../hooks/use-search";

function CannotSearchIfNoInfo({ children }) {
  const { form } = useSearch();
  if (form.type) {
    return children;
  }
  if (!form.start || !form.end || !form.room || !form.people) {
    return <Navigate to="/" />;
  }
  return children;
}

export default CannotSearchIfNoInfo;
