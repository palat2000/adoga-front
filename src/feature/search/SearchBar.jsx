import { DatePicker } from "@mui/x-date-pickers";
import SmallTotalPeopleInput from "./SmallTotalPeopleInput";
import SearchMap from "../map/SearchMap";
import useGoogle from "../../hooks/use-google";
import LoadingPage from "../../components/LoadingPage";

function SearchBar({
  setSelected,
  handleSearch,
  input,
  increase,
  decrease,
  setInput,
  isStartDateValid,
  isPlacePage,
}) {
  const { isLoaded } = useGoogle();

  if (!isLoaded) return <LoadingPage />;

  return (
    <div className=" absolute top-0 left-0 right-0 bg-darkBlue justify-center py-2">
      <form
        onSubmit={handleSearch}
        className="flex gap-5 justify-center items-center"
      >
        {!isPlacePage && (
          <SearchMap setSelected={setSelected} classNameInput="px-4 py-2" />
        )}
        <div
          className={`bg-white rounded-xl py-2 px-2 ${
            !isStartDateValid() && "border border-red-500"
          }`}
        >
          <DatePicker
            className="w-[150px]"
            disableToolbar
            closeOnSelect
            disablePast
            label="Start"
            defaultValue={input.start}
            onChange={(start) => setInput({ ...input, start: start })}
          />
          <DatePicker
            className="w-[150px]"
            disableToolbar
            closeOnSelect
            disablePast
            label="End"
            defaultValue={input.end}
            onChange={(end) => setInput({ ...input, end: end })}
          />
        </div>
        <SmallTotalPeopleInput
          input={input}
          increase={increase}
          decrease={decrease}
        />
        <button
          disabled={!isStartDateValid() && true}
          className="bg-primary text-white px-4 py-2 rounded-xl disabled:bg-fontGray"
        >
          ค้นหา
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
