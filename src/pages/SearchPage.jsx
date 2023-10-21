import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PlaceItem from "../feature/search/PlaceItem";
import axios from "../config/axios";
import useSearch from "../hooks/use-search";
import LoadingPage from "../components/LoadingPage";
import SearchBar from "../feature/search/SearchBar";
import { useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import calculateDistance from "../utils/calculate-distance";

function SearchPage() {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { form, setForm } = useSearch();
  const [input, setInput] = useState(form);
  const [minMax, setMinMax] = useState([input.minPrice, input.maxPrice]);
  const [search, setSearch] = useState("");
  const isMountingRef = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const isStartDateValid = () => {
    return (
      input.start === null || input.end === null || input.start <= input.end
    );
  };

  const increase = (where) => {
    setInput({ ...input, [where]: input[where] + 1 });
  };

  const decrease = (where) => {
    setInput({ ...input, [where]: input[where] - 1 });
  };

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setMinMax([Math.min(newValue[0], minMax[1] - 0), minMax[1]]);
    } else {
      setMinMax([minMax[0], Math.max(newValue[1], minMax[0] + 0)]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setForm(input);
  };

  useEffect(() => {
    if (isMountingRef.current) {
      const id = setTimeout(
        () =>
          setForm({
            ...form,
            minPrice: minMax[0],
            maxPrice: minMax[1],
            search,
          }),
        1500
      );
      return () => clearTimeout(id);
    }
  }, [minMax, search]);

  useEffect(() => {
    const getPlace = async () => {
      try {
        setIsLoading(true);
        const {
          data: { places },
        } = await axios.post("/search/", form);
        if (!form.province) {
          places.sort(() => Math.random() * 10 - 5);
          return setPlaces(places);
        }
        const newPlaces = places.filter((place) => {
          const distance = calculateDistance(
            form.lat,
            form.lng,
            place.lat,
            place.lng
          );
          return distance <= 5;
        });
        newPlaces.sort(() => Math.random() * 10 - 5);
        setPlaces(newPlaces);
      } catch (err) {
        toast.error(err.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPlace();
  }, [form]);

  useEffect(() => {
    isMountingRef.current = true;
    if (type) {
      setForm({ ...form, type: type });
    }
  }, []);

  return (
    <div className="flex justify-center py-10 relative">
      {isLoading && <LoadingPage />}
      <SearchBar
        setSelected={(selected) => setInput({ ...input, ...selected })}
        isStartDateValid={isStartDateValid}
        handleSearch={handleSearch}
        input={input}
        setInput={setInput}
        increase={increase}
        decrease={decrease}
      />
      <div className="container grid grid-cols-4 px-20 pt-14">
        <div className="col-span-1 pt-10 flex flex-col gap-10 max-w-[230px] items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-fontGray rounded-md outline-none"
            type="text"
            placeholder="ใส่คำค้นหา"
          />
          <div className="self-stretch">
            <Slider
              value={minMax}
              min={0}
              max={30000}
              onChange={handleChange}
              valueLabelDisplay="on"
              disableSwap
            />
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          {places.map((place) => (
            <PlaceItem
              onClick={() => navigate(`/${place.id}`)}
              key={place.id}
              place={place}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
