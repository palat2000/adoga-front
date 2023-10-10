import Button from "../components/Button";

function Header() {
  return (
    <header className="flex justify-between px-10 py-3 items-center bg-white sticky top-0 z-50">
      <div className="text-4xl">Adoga</div>
      <div className="flex gap-5 text-lg">
        <Button className="text-primary hover:text-white hover:bg-primary transition-all">
          เข้าสู่ระบบ
        </Button>
        <Button className="text-primary border border-primary hover:text-white hover:bg-primary transition-all">
          สร้างบัญชีผู้ใช้
        </Button>
        <Button className="text-primary border border-primary hover:text-white hover:bg-primary transition-all">
          สร้างบัญชีลงประกาศที่พัก
        </Button>
      </div>
    </header>
  );
}

export default Header;
