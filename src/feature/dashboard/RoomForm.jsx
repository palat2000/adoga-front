import { useState, useRef } from "react";
import Input from "../../components/Input";
import ButtonForm from "./ButtonForm";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import Button from "../../components/Button";

function RoomForm({
  errorMessage,
  onClose,
  handleSubmit,
  isLoading,
  info,
  file,
  setFile,
}) {
  const [input, setInput] = useState(
    info || {
      price: "",
      desc: "",
      maximumNumberPeople: "",
      name: "",
      totalRoomCount: "",
    }
  );
  const inputRef = useRef();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  return (
    <div className="relative">
      {isLoading && <Loading />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(input);
        }}
        className="flex flex-col gap-2"
      >
        <Input
          err={errorMessage?.name}
          onChange={handleChange}
          text="ชื่อห้อง"
          id="name"
          value={input}
        />
        {errorMessage?.name && <ErrorMessage text="กรุณาใส่ชื่อห้อง" />}
        <Input
          err={errorMessage?.totalRoomCount}
          onChange={handleChange}
          text="จำนวนห้อง"
          id="totalRoomCount"
          value={input}
        />
        {errorMessage?.totalRoomCount && (
          <ErrorMessage text="กรุณาใส่จำนวนห้อง" />
        )}
        <Input
          err={errorMessage?.maximumNumberPeople}
          onChange={handleChange}
          text="เข้าพักได้สูงสุดคนต่อห้อง"
          id="maximumNumberPeople"
          value={input}
        />
        {errorMessage?.maximumNumberPeople && (
          <ErrorMessage text="กรุณาใส่จำนวนสูงสุด" />
        )}
        <Input
          err={errorMessage?.price}
          onChange={handleChange}
          text="ราคาต่อคืน"
          id="price"
          value={input}
        />
        {errorMessage?.price && <ErrorMessage text="กรุณาใส่ราคา" />}
        <Input
          err={errorMessage?.desc}
          onChange={handleChange}
          text="รายละเอียดห้องพัก"
          id="desc"
          value={input}
        />
        {errorMessage?.desc && (
          <ErrorMessage text="กรุณาใส่รายละเอียดห้องพัก" />
        )}
        <div className="pt-2 flex flex-col gap-2">
          <input
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
            ref={inputRef}
            className="hidden"
            type="file"
          />
          <Button
            onClick={() => inputRef.current.click()}
            className="self-start bg-secondary text-white"
            type="button"
          >
            เลือกรูป
          </Button>
          {errorMessage?.file && <ErrorMessage text={errorMessage.file} />}
        </div>
        {file && (
          <div className="relative self-start">
            <span
              onClick={() => setFile(null)}
              className="absolute right-2 text-lg font-bold cursor-pointer"
            >
              x
            </span>
            <img
              className="h-[200px] aspect-auto"
              src={URL.createObjectURL(file)}
              alt="place"
            />
          </div>
        )}
        <ButtonForm onClose={onClose} />
      </form>
    </div>
  );
}

export default RoomForm;
