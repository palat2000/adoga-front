import dayjs from "dayjs";
import { useState } from "react";
import TotalPeopleInput from "./TotalPeopleInput";
import DateInput from "./DateInput";

function SearchForm() {
  const [form, setForm] = useState({
    start: dayjs(),
    end: null,
    room: 1,
    people: 2,
  });

  const increase = (where) => {
    setForm({ ...form, [where]: form[where] + 1 });
  };

  const decrease = (where) => {
    setForm({ ...form, [where]: form[where] - 1 });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-bgGray relative grid grid-cols-6 gap-3 pt-6 pb-12 px-8 rounded-xl"
    >
      <input className="bg-white col-span-6 rounded-xl px-8 py-4 outline-none text-2xl" />
      <DateInput form={form} setForm={setForm} />
      <TotalPeopleInput form={form} increase={increase} decrease={decrease} />
      <button className="absolute cursor-pointer border border-primary hover:bg-white hover:text-primary transition-all bg-primary px-40 text-2xl py-3 rounded-md text-white left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
        ค้นหา
      </button>
    </form>
  );
}

export default SearchForm;
