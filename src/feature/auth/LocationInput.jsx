import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import Background from "../../components/Background";
import useGoogle from "../../hooks/use-google";

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

  if (selected) center = selected;

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
        center={selected || center}
        mapContainerStyle={containerStyle}
        zoom={14}
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          zoomControl: false,
        }}
      >
        {(clicked || selected) && <Marker position={selected || clicked} />}
      </GoogleMap>
    </div>
  );
}

function PlacesAutoComplete({ setSelected, setClicked, validateMessage }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const res = await getGeocode({ address });
    const { lat, lng } = getLatLng(res[0]);
    setSelected({ lat, lng });
    setClicked(null);
  };

  const renderSuggest = () => {
    return data.map(({ place_id, description }) => (
      <li
        onClick={() => handleSelect(description)}
        className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-sm text-sm"
        key={place_id}
      >
        {description}
      </li>
    ));
  };

  if (!ready) return null;

  return (
    <>
      <div className="z-30 relative flex flex-col">
        <input
          className={`outline-none px-4 py-1 border border-gray-300 rounded-xs ${
            validateMessage?.lat && "border-red-300"
          }`}
          placeholder="เลือกสถานที่"
          type="text"
          value={value}
          onChange={handleInput}
        />
        {status === "OK" && (
          <ul className="absolute top-[100%] border bg-white shadow-2xl rounded-sm w-full z-30 max-h-[100px] overflow-y-auto">
            {renderSuggest()}
          </ul>
        )}
      </div>
      {validateMessage?.lat && (
        <span className="text-red-500 text-xs">กรุณาเลือกที่อยู่ที่พัก</span>
      )}
    </>
  );
}

export default LocationInput;
