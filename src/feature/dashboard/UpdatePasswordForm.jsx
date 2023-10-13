import { useState } from "react";
import Loading from "../../components/Loading";
import ButtonForm from "./ButtonForm";
import Input from "../../components/Input";

function UpdatePasswordForm({
  handleSubmit,
  errorMessage,
  isLoading,
  setIsOpen,
}) {
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
      {isLoading && <Loading />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(input);
        }}
        className="flex flex-col gap-2"
      >
        <Input
          type="password"
          onChange={handleChange}
          value={input}
          id="password"
          text="รหัสผ่านปัจจุบัน"
          err={errorMessage.password}
        />
        {errorMessage.password && (
          <span className="text-red-500 text-xs">
            รหัสผ่านมีไม่น้อยกว่า 6 และไม่มากกว่า 30 ตัวอักษร
          </span>
        )}
        <Input
          type="password"
          onChange={handleChange}
          value={input}
          id="newPassword"
          text="รหัสผ่านใหม่"
          err={errorMessage.newPassword}
        />
        {errorMessage.newPassword && (
          <span className="text-red-500 text-xs">
            รหัสผ่านมีไม่น้อยกว่า 6 และไม่มากกว่า 30 ตัวอักษร
          </span>
        )}
        <Input
          type="password"
          onChange={handleChange}
          value={input}
          id="confirmNewPassword"
          text="ยืนยันรหัสใหม่"
          err={errorMessage.confirmNewPassword}
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
