import { useState } from "react";
import Joi from "joi";
import Button from "../../components/Button";
import LoginInput from "./LoginInput";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const loginSchema = Joi.object({
  mobileOrEmail: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ]).required(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim(),
});

function LoginForm() {
  const [input, setInput] = useState({ mobileOrEmail: "", password: "" });
  const [errMessage, setErrMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = loginSchema.validate(input, { abortEarly: false });
    if (error) {
      const whereError = error.details.reduce((acc, el) => {
        acc[el.path[0]] = el.message;
        return acc;
      }, {});
      return setErrMessage(whereError);
    }
    setErrMessage({});
    await login(input);
    setIsLoading(false);
    navigate("/");
  };

  return (
    <div className="relative">
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="mobileOrEmail">โทรศัพท์มือถือหรืออีเมล</label>
            <LoginInput
              err={errMessage.mobileOrEmail}
              onChange={handleChange}
              value={input}
              type="text"
              id="mobileOrEmail"
              placeholder="โทรศัพท์มือถือหรืออีเมล"
            />
            {errMessage.mobileOrEmail && (
              <span className="text-sm text-red-500">Invalid format</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">รหัสผ่าน</label>
            <LoginInput
              err={errMessage.password}
              onChange={handleChange}
              value={input}
              type="password"
              id="password"
              placeholder="รหัสผ่าน"
            />
            {errMessage.password && (
              <span className="text-sm text-red-500">Invalid format</span>
            )}
          </div>
        </div>
        <Button className="bg-primary text-white">เข้าสู่ระบบ</Button>
      </form>
    </div>
  );
}

export default LoginForm;
