import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../config/axios";
import LoadingPage from "../components/LoadingPage";
import SearchBar from "../feature/search/SearchBar";
import useSearch from "../hooks/use-search";
import Room from "../feature/search/Room";
import useGoogle from "../hooks/use-google";
import Background from "../components/Background";

function PlacePage() {
  const [place, setPlace] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const isMountingRef = useRef(false);
  const navigate = useNavigate();
  const { placeId } = useParams();
  const { form, setForm } = useSearch();
  const { GoogleMap, isLoaded, Marker } = useGoogle();

  const center = { lat: +place.lat || 10, lng: +place.lng || 10 };

  const isStartDateValid = () => {
    return form.start === null || form.end === null || form.start <= form.end;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search-place");
  };

  const increase = (where) => {
    setForm({ ...form, [where]: form[where] + 1 });
  };

  const decrease = (where) => {
    setForm({ ...form, [where]: form[where] - 1 });
  };

  const getPlaceById = async () => {
    try {
      setIsLoading(true);
      const {
        data: { place },
      } = await axios.post(`/search/place/${placeId}`, form);
      setPlace(place);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isMountingRef.current && isStartDateValid()) {
      const id = setTimeout(() => getPlaceById(), 3000);
      return () => clearTimeout(id);
    }
  }, [form]);

  useEffect(() => {
    getPlaceById();
  }, []);

  useEffect(() => {
    isMountingRef.current = true;
  }, []);

  return (
    <div className="relative flex justify-center pt-36 pb-16">
      {isLoading && <LoadingPage />}
      <SearchBar
        isPlacePage={true}
        isStartDateValid={isStartDateValid}
        handleSearch={handleSearch}
        input={form}
        setInput={setForm}
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
        {isLoaded ? (
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
        ) : (
          <Background height="300px" />
        )}
        <div className="flex flex-col items-center gap-4">
          {place.rooms &&
            place.rooms.map((room) => (
              <Room
                isStartDateValid={isStartDateValid}
                room={room}
                key={room.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default PlacePage;
