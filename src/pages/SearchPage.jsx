import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PlaceItem from "../feature/search/PlaceItem";
import axios from "../config/axios";

function SearchPage() {
  const [place, setPlace] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamsValue = queryParams.get("type");

  useEffect(() => {
    const getPlace = async () => {
      try {
        const {
          data: { places },
        } = await axios.get(`/search?type=${queryParamsValue.toUpperCase()}`);
        console.log(places);
        setPlace(places);
      } catch (err) {
        console.log(err);
      }
    };
    getPlace();
  }, [queryParamsValue]);

  return (
    <div className="flex justify-center py-10">
      <div className="container grid grid-cols-4 px-20">
        <div className="col-span-1">search</div>
        <div className="col-span-3 flex flex-col gap-6">
          {place.map((place) => (
            <PlaceItem key={place.id} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
