import { useState } from "react";
import RegisterInput from "./RegisterInput";
import Button from "../../components/Button";

function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <RegisterInput
          text="ชื่อ"
          type="text"
          placeholder="ชื่อ"
          id="firstName"
          value={input}
          onChange={handleChange}
        />
        <RegisterInput
          text="นามสกุล"
          type="text"
          placeholder="นามสกุล"
          id="lastName"
          value={input}
          onChange={handleChange}
        />
        <RegisterInput
          text="อีเมล"
          type="text"
          placeholder="อีเมล"
          id="email"
          value={input}
          onChange={handleChange}
        />
        <RegisterInput
          text="รหัสผ่าน"
          type="password"
          placeholder="รหัสผ่าน"
          id="password"
          value={input}
          onChange={handleChange}
        />
        <RegisterInput
          text="ยืนยันรหัสผ่าน"
          type="password"
          placeholder="ยืนยันรหัสผ่าน"
          id="confirmPassword"
          value={input}
          onChange={handleChange}
        />
      </div>
      <Button className="bg-primary text-white hover:opacity-80 transition-all">
        สมัครสมาชิก
      </Button>
    </form>
  );
}

export default RegisterForm;
