import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../config/axios";
import LoadingPage from "../components/LoadingPage";
import SearchBar from "../feature/search/SearchBar";
import useSearch from "../hooks/use-search";
import { GOOGLE_API_KEY } from "../config/env";
import Room from "../feature/search/Room";

function PlacePage() {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { form, setForm } = useSearch();
  const navigate = useNavigate();
  const [input, setInput] = useState(form);
  const { placeId } = useParams();
  //   const [libraries, setLibraries] = useState(["places"]);

  const center = { lat: +place.lat, lng: +place.lng };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const isStartDateValid = () => {
    return (
      input.start === null || input.end === null || input.start <= input.end
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (isStartDateValid()) {
      return;
    }
    navigate("/search-place");
    setForm(input);
  };

  const increase = (where) => {
    setInput({ ...input, [where]: input[where] + 1 });
  };

  const decrease = (where) => {
    setInput({ ...input, [where]: input[where] - 1 });
  };

  useEffect(() => {
    const getPlaceById = async () => {
      try {
        setIsLoading(true);
        const {
          data: { place },
        } = await axios.get(`/search/place/${placeId}`);
        setPlace(place);
      } catch (err) {
        toast.error(err.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPlaceById();
  }, []);

  return (
    <div className="relative flex justify-center pt-36 pb-16">
      {isLoading && <LoadingPage />}
      <SearchBar
        isStartDateValid={isStartDateValid}
        handleSearch={handleSearch}
        input={input}
        setInput={setInput}
        increase={increase}
        decrease={decrease}
      />
      <div className="container flex flex-col gap-10 justify-center">
        <div className="flex justify-center w-full overflow-hidden h-52 bg-bgPrimary">
          {place.imagePlaces && (
            <img
              className="w-full "
              src={place.imagePlaces[0]?.image}
              alt="place"
            />
          )}
        </div>
        {isLoaded && (
          <GoogleMap
            center={center}
            mapContainerStyle={{ width: "100%", height: "300px" }}
            zoom={14}
            options={{
              streetViewControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
              zoomControl: false,
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        )}
        <div className="flex flex-col items-center gap-4">
          {place.rooms &&
            place.rooms.map((room) => <Room room={room} key={room?.id} />)}
        </div>
      </div>
    </div>
  );
}

export default PlacePage;
