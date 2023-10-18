import Button from "../../components/Button";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function BookForm({
  handleChange,
  customer,
  handleSubmit,
  isLoading,
  errMessage,
}) {
  return (
    <div className="relative">
      {isLoading && <Loading />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-2"
      >
        <h2 className="text-2xl">ข้อมูลส่วนตัวผู้จอง</h2>
        <Input
          text="ชื่อ"
          placeholder="ชื่อ"
          onChange={handleChange}
          value={customer}
          id="firstName"
          err={errMessage.firstName}
        />
        {errMessage.firstName && <ErrorMessage text="กรุณากรอกชื่อ" />}
        <Input
          text="นามสกุล"
          placeholder="นามสกุล"
          onChange={handleChange}
          value={customer}
          id="lastName"
          err={errMessage.lastName}
        />
        {errMessage.lastName && <ErrorMessage text="กรุณากรอกนามสกุล" />}
        <Input
          text="อีเมล"
          placeholder="อีเมล"
          onChange={handleChange}
          value={customer}
          id="email"
          err={errMessage.email}
        />
        {errMessage.email && <ErrorMessage text="อีเมลไม่ถูกต้อง" />}
        <Input
          text="เบอร์โทรศัพท์"
          placeholder="เบอร์โทรศัพท์"
          onChange={handleChange}
          value={customer}
          id="mobile"
          err={errMessage.mobile}
        />
        {errMessage.mobile && <ErrorMessage text="เบอร์โทรศัพท์ไม่ถูกต้อง" />}
        <div className="flex flex-col gap-3 pt-4">
          <Button className="text-white bg-primary hover:opacity-80">
            จอง
          </Button>
          <Button
            className="text-primary border border-primary hover:text-white hover:bg-primary transition-all"
            type="button"
          >
            มีบัญชีผู้ใช้อยู่แล้ว? เข้าสู่ระบบ
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
