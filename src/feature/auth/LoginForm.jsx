import { useState } from "react";
import Button from "../../components/Button";
import LoginInput from "./LoginInput";
import Loading from "../../components/Loading";

function LoginForm({ isLoading, handleSubmit, isFail, classButton }) {
  const [input, setInput] = useState({ mobileOrEmail: "", password: "" });

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
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="mobileOrEmail">โทรศัพท์มือถือหรืออีเมล</label>
            <LoginInput
              onChange={handleChange}
              value={input}
              type="text"
              id="mobileOrEmail"
              placeholder="โทรศัพท์มือถือหรืออีเมล"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">รหัสผ่าน</label>
            <LoginInput
              onChange={handleChange}
              value={input}
              type="password"
              id="password"
              placeholder="รหัสผ่าน"
            />
          </div>
          {isFail && (
            <span className="text-xs text-red-500">ข้อมูลผู้ใช้ไม่ถูกต้อง</span>
          )}
        </div>
        <Button
          className={`bg-primary text-white hover:opacity-80 transition-all ${classButton}`}
        >
          เข้าสู่ระบบ
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
