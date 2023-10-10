import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import RegisterForm from "../feature/auth/RegisterForm";
import Button from "../components/Button";

function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-bgPrimary h-full flex justify-center items-center">
      <Box>
        <h2 className="text-2xl">สมัครสมาชิก</h2>
        <RegisterForm />
        <Button
          onClick={() => navigate("/login")}
          className="border border-primary text-primary hover:text-white hover:bg-primary transition-all"
        >
          มีบัญชีผู้ใช้อยู่แล้ว ? เข้าสู่ระบบ
        </Button>
      </Box>
    </div>
  );
}

export default RegisterPage;
