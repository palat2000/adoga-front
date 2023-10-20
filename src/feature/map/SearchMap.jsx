import useGoogle from "../../hooks/use-google";

function SearchMap({ setSelected }) {
  const { usePlacesAutocomplete, getGeocode, getLatLng } = useGoogle();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    const res = await getGeocode({ address });
    const { lat, lng } = getLatLng(res[0]);
    const location = res[0].address_components.filter(
      (el) => el.types[0] === "administrative_area_level_1"
    );
    setSelected({
      province: location[0].long_name,
      location: { lat: lat, lng: lng },
    });
  };

  const handleInput = (e) => {
    setValue(e.target.value);
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
    <div className="z-30 relative flex flex-col col-span-6">
      <input
        className="border border-gray-300 rounded-xl px-8 py-4 outline-none text-2xl"
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
  );
}

export default SearchMap;
