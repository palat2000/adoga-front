import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useAuth from "../hooks/useAuth";
import Dropdown from "./Dropdown";

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="flex justify-between px-10 py-3 items-center bg-white sticky top-0 z-50">
      {!user?.isPlacer ? (
        <div onClick={() => navigate("/")} className="cursor-pointer text-4xl">
          Adoga
        </div>
      ) : (
        <div className="cursor-default text-4xl">Adoga</div>
      )}
      {!user ? (
        <div className="flex gap-5 text-lg">
          <Button
            onClick={() => navigate("/login")}
            className="text-primary hover:text-white hover:bg-primary transition-all"
          >
            เข้าสู่ระบบ
          </Button>
          <Button
            onClick={() => navigate("/register")}
            className="text-primary border border-primary hover:text-white hover:bg-primary transition-all"
          >
            สร้างบัญชีผู้ใช้
          </Button>
          <Button
            onClick={() => navigate("/register-place")}
            className="text-secondary border border-secondary hover:text-white hover:bg-secondary transition-all"
          >
            สร้างบัญชีลงประกาศที่พัก
          </Button>
        </div>
      ) : user.isPlacer ? (
        <></>
      ) : (
        <Dropdown name={user.firstName} />
      )}
    </header>
  );
}

export default Header;
