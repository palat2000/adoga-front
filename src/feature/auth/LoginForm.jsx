import Box from "../../components/Box";
import Button from "../../components/Button";
import LoginInput from "./LoginInput";

function LoginForm() {
  return (
    <div className="bg-bgPrimary h-full flex justify-center items-center">
      <Box>
        <h2 className="text-2xl">เข้าสู่ระบบ</h2>
        <p>เพื่อความปลอดภัย กรุณาล็อกอินเข้าสู่ระบบเพื่อดูรายระเอียดของท่าน</p>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="mobileOrEmail">โทรศัพท์มือถือหรืออีเมล</label>
              <LoginInput
                type="text"
                id="mobileOrEmail"
                placeholder="โทรศัพท์มือถือหรืออีเมล"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">รหัสผ่าน</label>
              <LoginInput
                type="password"
                id="password"
                placeholder="รหัสผ่าน"
              />
            </div>
          </div>
          <Button className="bg-primary text-white">เข้าสู่ระบบ</Button>
        </form>
        <span className="text-primary cursor-pointer self-start">
          สร้างบัญชีผู้ใช้
        </span>
      </Box>
    </div>
  );
}

export default LoginForm;
