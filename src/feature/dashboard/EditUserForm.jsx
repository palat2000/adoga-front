import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import ButtonForm from "./ButtonForm";

function EditUserForm({ isLoading, handleSubmit, err, setIsEdit }) {
  const [input, setInput] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  return (
    <div className="relative container w-full lg:w-[50%]">
      {isLoading && <Loading />}
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(input);
        }}
      >
        <Input
          text="ชื่อ"
          err={err?.firstName}
          onChange={handleChange}
          value={input}
          id="firstName"
        />
        <ErrorMessage text={err?.firstName} />
        <Input
          text="นามสกุล"
          err={err?.lastName}
          onChange={handleChange}
          value={input}
          id="lastName"
        />
        <ErrorMessage text={err?.lastName} />
        <ButtonForm who="user" onClose={() => setIsEdit(false)} />
      </form>
    </div>
  );
}

export default EditUserForm;
