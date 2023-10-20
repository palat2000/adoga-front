import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { GOOGLE_API_KEY } from "../config/env";

const useGoogle = () => {
  const [libraries, setLibraries] = useState(["places"]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
  });

  return {
    GoogleMap,
    isLoaded,
    Marker,
    usePlacesAutocomplete,
    getGeocode,
    getLatLng,
  };
};

export default useGoogle;
