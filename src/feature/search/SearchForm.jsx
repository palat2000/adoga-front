import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSearch from "../../hooks/use-search";
import TotalPeopleInput from "./TotalPeopleInput";
import DateInput from "./DateInput";
import useGoogle from "../../hooks/use-google";
import LoadingPage from "../../components/LoadingPage";
import SearchMap from "../map/SearchMap";

function SearchForm() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const { form, setForm, increase, decrease } = useSearch();
  const { isLoaded } = useGoogle();

  const isStartDateValid = () => {
    return form.start === null || form.end === null || form.start <= form.end;
  };

  if (!isLoaded) {
    return <LoadingPage />;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setForm({
          ...form,
          type: null,
          minPrice: 0,
          maxPrice: 30000,
          where: selected,
        });
        navigate("/search-place");
      }}
      className="bg-bgGray relative grid grid-cols-6 gap-3 pt-6 pb-12 px-8 rounded-xl"
    >
      <SearchMap setSelected={setSelected} />
      <DateInput
        isStartDateValid={isStartDateValid}
        form={form}
        setForm={setForm}
      />
      <TotalPeopleInput form={form} increase={increase} decrease={decrease} />
      <button
        disabled={!isStartDateValid() && true}
        className="absolute cursor-pointer border border-primary hover:bg-white hover:text-primary transition-all bg-primary px-40 text-2xl py-3 rounded-md text-white left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 disabled:bg-fontGray disabled:border-none disabled:hover:text-white"
      >
        ค้นหา
      </button>
    </form>
  );
}

export default SearchForm;
