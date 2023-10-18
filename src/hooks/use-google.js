import { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../config/env";

const useGoogle = () => {
  const [libraries, setLibraries] = useState(["places"]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
  });

  return { GoogleMap, isLoaded, Marker };
};

export default useGoogle;
