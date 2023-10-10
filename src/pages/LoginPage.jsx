import LoginForm from "../feature/auth/LoginForm";
import Box from "../components/Box";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-bgPrimary h-full flex justify-center items-center">
      <Box>
        <h2 className="text-2xl">เข้าสู่ระบบ</h2>
        <p>เพื่อความปลอดภัย กรุณาล็อกอินเข้าสู่ระบบเพื่อดูรายระเอียดของท่าน</p>
        <LoginForm />
        <span
          onClick={() => navigate("/register")}
          className="text-primary cursor-pointer self-start"
        >
          สร้างบัญชีผู้ใช้
        </span>
      </Box>
    </div>
  );
}

export default LoginPage;
