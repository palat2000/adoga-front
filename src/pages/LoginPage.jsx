import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginForm from "../feature/auth/LoginForm";
import Box from "../components/Box";
import Button from "../components/Button";
import useAuth from "../hooks/use-auth";

function LoginPage() {
  const [isloginPlace, setIsLoginPlace] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFail, setIsfail] = useState(false);
  const navigate = useNavigate();
  const { login, loginPlace } = useAuth();

  const handleLogin = async (input) => {
    try {
      setIsfail(false);
      setIsLoading(true);
      await login(input);
      navigate("/");
    } catch (err) {
      setIsfail(true);
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginPlace = async (input) => {
    try {
      setIsfail(false);
      setIsLoading(true);
      await loginPlace(input);
      navigate("/user-place");
    } catch (err) {
      setIsfail(true);
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-bgPrimary h-full flex justify-center items-center py-10">
      <Box>
        <h2 className="text-2xl">เข้าสู่ระบบ{loginPlace && "จัดการที่พัก"}</h2>
        <p>
          {!isloginPlace
            ? "เพื่อความปลอดภัย กรุณาล็อกอินเข้าสู่ระบบเพื่อดูรายระเอียดของท่าน"
            : "ต้องการจัดการข้อมูลที่พักของท่าน? เข้าสู่ระบบเพื่อจัดการข้อมูลที่พักของท่าน"}
        </p>
        {!isloginPlace ? (
          <LoginForm
            isFail={isFail}
            isLoading={isLoading}
            handleSubmit={handleLogin}
            classButton="bg-primary"
          />
        ) : (
          <LoginForm
            isFail={isFail}
            isLoading={isLoading}
            handleSubmit={handleLoginPlace}
            classButton="bg-secondary"
          />
        )}
        <span
          onClick={() =>
            navigate(isloginPlace ? "/register-place" : "/register")
          }
          className={`${
            isloginPlace ? "text-secondary" : "text-primary"
          } cursor-pointer self-start`}
        >
          สร้างบัญชีผู้ใช้
        </span>
        <hr className="border border-gray-200 mx-4" />
        {!isloginPlace ? (
          <Button
            onClick={() => setIsLoginPlace(true)}
            className="text-secondary border border-secondary hover:text-white hover:bg-secondary transition-all"
          >
            เข้าสู่ระบบจัดการที่พัก
          </Button>
        ) : (
          <Button
            onClick={() => setIsLoginPlace(false)}
            className="text-primary border border-primary hover:text-white hover:bg-primary transition-all"
          >
            เข้าสู่ระบบผู้ใช้งาน
          </Button>
        )}
      </Box>
    </div>
  );
}

export default LoginPage;
