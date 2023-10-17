import { useContext } from "react";
import { SearchContext } from "../context/SearchContextProvider";

function useSearch() {
  return useContext(SearchContext);
}

export default useSearch;
