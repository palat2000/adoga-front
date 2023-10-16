import { useLocation } from "react-router-dom";
import PlaceItem from "../feature/search/PlaceItem";
import { useEffect } from "react";

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamsValue = queryParams.get("paramName");

  useEffect(() => {}, []);

  return (
    <div className="flex justify-center py-10">
      <div className="container grid grid-cols-4 px-20">
        <div className="col-span-1">search</div>
        <div className="col-span-3">
          <PlaceItem />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
