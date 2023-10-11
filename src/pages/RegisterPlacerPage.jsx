import { useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import RegisterPlaceForm from "../feature/auth/RegisterPlaceForm";

function RegisterPlacerPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-bgPrimary h-full flex justify-center items-center py-10">
      <Box>
        <h2 className="text-2xl">สมัครสมาชิก</h2>
        <RegisterPlaceForm />
        <Button
          onClick={() => navigate("/login")}
          className="border border-secondary text-secondary hover:text-white hover:bg-secondary transition-all"
        >
          มีบัญชีผู้ใช้อยู่แล้ว ? เข้าสู่ระบบ
        </Button>
      </Box>
    </div>
  );
}

export default RegisterPlacerPage;
