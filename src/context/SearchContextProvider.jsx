import dayjs from "dayjs";
import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();
function SearchContextProvider({ children }) {
  const [form, setForm] = useState({
    start: dayjs(),
    end: dayjs(new Date().getTime() + 172800000),
    room: 1,
    people: 2,
    type: null,
    minPrice: 0,
    maxPrice: 30000,
    search: null,
  });

  const increase = (where) => {
    setForm({ ...form, [where]: form[where] + 1 });
  };

  const decrease = (where) => {
    setForm({ ...form, [where]: form[where] - 1 });
  };

  return (
    <SearchContext.Provider value={{ form, setForm, increase, decrease }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
