import { useLocation } from "react-router-dom";

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamsValue = queryParams.get("paramName");

  return (
    <div className="flex justify-center">
      <div className="container flex justify-between px-20">
        <div>search</div>
        <div>result</div>
      </div>
    </div>
  );
}

export default SearchPage;
