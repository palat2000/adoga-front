import { useState } from "react";
import PasswordInput from "./PasswordInput";
import Loading from "../../components/Loading";
import ButtonForm from "./ButtonForm";

function UpdatePasswordForm({ handleSubmit, errorMessage, isLoad, setIsOpen }) {
  const [input, setInput] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  return (
    <div className="relative container w-full lg:w-[50%]">
      {isLoad && <Loading />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(input);
        }}
        className="flex flex-col gap-2"
      >
        <PasswordInput
          onChange={handleChange}
          value={input}
          id="password"
          title="รหัสผ่านปัจจุบัน"
        />
        {errorMessage.password && (
          <span className="text-red-500 text-xs">
            รหัสผ่านมีไม่น้อยกว่า 6 และไม่มากกว่า 30 ตัวอักษร
          </span>
        )}
        <PasswordInput
          onChange={handleChange}
          value={input}
          id="newPassword"
          title="รหัสผ่านใหม่"
        />
        {errorMessage.newPassword && (
          <span className="text-red-500 text-xs">
            รหัสผ่านมีไม่น้อยกว่า 6 และไม่มากกว่า 30 ตัวอักษร
          </span>
        )}
        <PasswordInput
          onChange={handleChange}
          value={input}
          id="confirmNewPassword"
          title="ยืนยันรหัสใหม่"
        />
        {errorMessage.confirmNewPassword && (
          <span className="text-red-500 text-xs">รหัสผ่านไม่ตรงกัน</span>
        )}
        <ButtonForm setIsOpen={setIsOpen} />
      </form>
    </div>
  );
}

export default UpdatePasswordForm;
