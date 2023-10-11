import { useState } from "react";
import Loading from "../../components/Loading";
import RegisterInput from "./RegisterInput";
import Button from "../../components/Button";
import TypeInput from "./TypeInput";
import { OPTION } from "../../config/constants";

function RegisterPlaceForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [validateMessage, setValidateMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative">
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <RegisterInput
            err={validateMessage.name}
            text="ชื่อที่พัก"
            type="text"
            placeholder="ชื่อที่พัก"
            id="name"
            value={input}
            onChange={handleChange}
          />
          {validateMessage.name && (
            <span className="text-xs text-red-500">
              โปรดกรอกข้อมูลให้ครบถ้วน
            </span>
          )}
          <RegisterInput
            err={validateMessage.email}
            text="อีเมล"
            type="text"
            placeholder="อีเมล"
            id="email"
            value={input}
            onChange={handleChange}
          />
          {validateMessage.email && (
            <span className="text-xs text-red-500">
              โปรดกรอกข้อมูลให้ครบถ้วน
            </span>
          )}
          <RegisterInput
            err={validateMessage.mobile}
            text="เบอร์โทรศัพท์"
            type="text"
            placeholder="เบอร์โทรศัพท์"
            id="mobile"
            value={input}
            onChange={handleChange}
          />
          {validateMessage.mobile && (
            <span className="text-xs text-red-500">อีเมลไม่ถูกต้อง</span>
          )}
          <TypeInput
            title="ประเภทที่พัก"
            defaultOption="ประเภทที่พัก..."
            option={OPTION}
          />
          <RegisterInput
            err={validateMessage.password}
            text="รหัสผ่าน"
            type="password"
            placeholder="รหัสผ่าน"
            id="password"
            value={input}
            onChange={handleChange}
          />
          {validateMessage.password && (
            <span className="text-xs text-red-500">
              รหัสผ่านต้องไม่น้อยกว่า 6 และไม่มากกว่า 30 ตัวอักษร
            </span>
          )}
          <RegisterInput
            err={validateMessage.confirmPassword}
            text="ยืนยันรหัสผ่าน"
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            id="confirmPassword"
            value={input}
            onChange={handleChange}
          />
        </div>
        {validateMessage.confirmPassword && (
          <span className="text-xs text-red-500">รหัสผ่านไม่ตรงกัน</span>
        )}
        <Button className="bg-secondary text-white hover:opacity-80 transition-all">
          สมัครสมาชิก
        </Button>
      </form>
    </div>
  );
}

export default RegisterPlaceForm;
