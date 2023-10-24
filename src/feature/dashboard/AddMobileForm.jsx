import { toast } from "react-toastify";
import { useState } from "react";
import ButtonForm from "./ButtonForm";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";

function AddMobileForm({ setIsEdit, err, handleSubmit }) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await handleSubmit(input);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative container w-full lg:w-[50%]">
      {isLoading && <Loading />}
      <form onSubmit={handleAdd}>
        <div className="flex flex-col gap-2">
          <label htmlFor="mobile">หมายเลขโทรศัพท์</label>
          <input
            className={`outline-none px-4 py-1 border border-gray-300 rounded-sm ${
              err && "border-red-300"
            }`}
            onChange={handleChange}
            id="mobile"
            value={input}
            placeholder="หมายเลขโทรศัพท์"
          />
        </div>
        <ErrorMessage text={err} />
        <ButtonForm who="user" onClose={() => setIsEdit(false)} />
      </form>
    </div>
  );
}

export default AddMobileForm;
