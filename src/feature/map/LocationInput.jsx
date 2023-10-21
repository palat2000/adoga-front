import Background from "../../components/Background";
import useGoogle from "../../hooks/use-google";
import PlacesAutoComplete from "./PlacesAutoComplete";

const containerStyle = { width: "100%", height: "400px" };
let center = { lat: 13.758181219991302, lng: 100.53499851133232 };

function LocationInput({
  clicked,
  handleClick,
  selected,
  setSelected,
  setClicked,
  validateMessage,
}) {
  const { GoogleMap, isLoaded, Marker } = useGoogle();

  if (selected) center = { lat: selected.lat, lng: selected.lng };

  if (!isLoaded) return <Background height="400px" />;

  return (
    <div className="flex flex-col gap-2 -mt-2">
      <div>ที่อยู่ของที่พัก</div>
      <PlacesAutoComplete
        validateMessage={validateMessage}
        setSelected={setSelected}
        setClicked={setClicked}
      />
      <GoogleMap
        onClick={handleClick}
        center={center}
        mapContainerStyle={containerStyle}
        zoom={14}
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          zoomControl: false,
        }}
      >
        {(clicked || selected) && (
          <Marker
            position={{
              lat: selected?.lat || clicked?.lat,
              lng: selected?.lng || clicked?.lng,
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
}

export default LocationInput;
