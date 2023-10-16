import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ErrorMessage from "../../components/ErrorMessage";

function DateInput({ form, setForm }) {
  const isStartDateValid = () => {
    return form.start === null || form.end === null || form.start <= form.end;
  };
  return (
    <div className="col-span-3 bg-white px-8 py-4 rounded-xl flex flex-col items-center gap-3">
      <div className="flex gap-2">
        <DatePicker
          disableToolbar
          closeOnSelect
          disablePast
          label="Start"
          defaultValue={form.start}
          onChange={(start) => setForm({ ...form, start: start })}
        />
        <DatePicker
          closeOnSelect
          disablePast
          onChange={(end) => setForm({ ...form, end: end })}
          label="End"
        />
      </div>
      {!isStartDateValid() && <ErrorMessage text="วันจองไม่ถูกต้อง" />}
    </div>
  );
}

export default DateInput;
