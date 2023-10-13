import { useState } from "react";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading";
import validate from "../../utils/validate";

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validateMessage, setValidateMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setValidateMessage({});
      setIsLoading(true);
      const res = validate(registerSchema, input);
      if (res) {
        return setValidateMessage(res);
      }
      await register(input);
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative">
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Input
            err={validateMessage.firstName}
            text="ชื่อ"
            type="text"
            id="firstName"
            value={input}
            onChange={handleChange}
          />
          {validateMessage.firstName && (
            <span className="text-xs text-red-500">
              โปรดกรอกข้อมูลให้ครบถ้วน
            </span>
          )}
          <Input
            err={validateMessage.lastName}
            text="นามสกุล"
            type="text"
            id="lastName"
            value={input}
            onChange={handleChange}
          />
          {validateMessage.lastName && (
            <span className="text-xs text-red-500">
              โปรดกรอกข้อมูลให้ครบถ้วน
            </span>
          )}
          <Input
            err={validateMessage.email}
            text="อีเมล"
            type="text"
            id="email"
            value={input}
            onChange={handleChange}
          />
          {validateMessage.email && (
            <span className="text-xs text-red-500">อีเมลไม่ถูกต้อง</span>
          )}
          <Input
            err={validateMessage.password}
            text="รหัสผ่าน"
            type="password"
            id="password"
            value={input}
            onChange={handleChange}
          />
          {validateMessage.password && (
            <span className="text-xs text-red-500">
              รหัสผ่านต้องไม่น้อยกว่า 6 และไม่มากกว่า 30 ตัวอักษร
            </span>
          )}
          <Input
            err={validateMessage.confirmPassword}
            text="ยืนยันรหัสผ่าน"
            type="password"
            id="confirmPassword"
            value={input}
            onChange={handleChange}
          />

          {validateMessage.confirmPassword && (
            <span className="text-xs text-red-500">รหัสผ่านไม่ตรงกัน</span>
          )}
        </div>
        <Button className="bg-primary text-white hover:opacity-80 transition-all">
          สมัครสมาชิก
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
