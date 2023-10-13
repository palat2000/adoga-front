import { useState } from "react";
import Input from "../../components/Input";
import ButtonForm from "./ButtonForm";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function CreateRoomForm({ errorMessage, setIsOpen, handleSubmit, isLoading }) {
  const [input, setInput] = useState({
    price: "",
    desc: "",
    maximumNumberPeople: "",
    name: "",
    totalRoomCount: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  return (
    <div className="realtive">
      {isLoading && <Loading />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(input);
        }}
        className="flex flex-col gap-2"
      >
        <Input
          onChange={handleChange}
          text="ชื่อห้อง"
          id="name"
          value={input}
        />
        {errorMessage?.name && <ErrorMessage text="กรุณาใส่ชื่อห้อง" />}
        <Input
          onChange={handleChange}
          text="จำนวนห้อง"
          id="totalRoomCount"
          value={input}
        />
        {errorMessage?.totalRoomCount && (
          <ErrorMessage text="กรุณาใส่จำนวนห้อง" />
        )}
        <Input
          onChange={handleChange}
          text="เข้าพักได้สูงสุดคนต่อห้อง"
          id="maximumNumberPeople"
          value={input}
        />
        {errorMessage?.maximumNumberPeople && (
          <ErrorMessage text="กรุณาใส่จำนวนสูงสุด" />
        )}
        <Input
          onChange={handleChange}
          text="ราคาต่อคืน"
          id="price"
          value={input}
        />
        {errorMessage?.price && <ErrorMessage text="กรุณาใส่ราคา" />}
        <Input
          onChange={handleChange}
          text="รายละเอียดห้องพัก"
          id="desc"
          value={input}
        />
        {errorMessage?.desc && (
          <ErrorMessage text="กรุณาใส่รายละเอียดห้องพัก" />
        )}
        <ButtonForm setIsOpen={setIsOpen} />
      </form>
    </div>
  );
}

export default CreateRoomForm;
