import { useState } from "react";
import Input from "../../components/Input";
import ButtonForm from "./ButtonForm";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function RoomForm({
  errorMessage,
  onClose,
  handleSubmit,
  isLoading,
  info,
  isEdit,
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
        {isEdit && (
          <>
            <Input
              err={errorMessage.remaining}
              onChange={handleChange}
              text="จำนวนห้องคงเหลือ"
              id="remaining"
              value={input}
            />
            {errorMessage?.remaining && (
              <ErrorMessage text={errorMessage.remaining} />
            )}
          </>
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
        <ButtonForm onClose={onClose} />
      </form>
    </div>
  );
}

export default RoomForm;
