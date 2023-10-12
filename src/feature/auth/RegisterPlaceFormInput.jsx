import RegisterInput from "./RegisterInput";
import TypeInput from "./TypeInput";

function RegisterPlaceFormInput({
  input,
  handleChange,
  validateMessage,
  option,
  setType,
  type,
}) {
  return (
    <>
      <RegisterInput
        err={validateMessage.name}
        text="ชื่อที่พัก"
        type="text"
        placeholder="ชื่อที่พัก"
        id="name"
        value={input}
        onChange={handleChange}
      />
      {validateMessage.name && (
        <span className="text-xs text-red-500">โปรดกรอกข้อมูลให้ครบถ้วน</span>
      )}
      <RegisterInput
        err={validateMessage.email}
        text="อีเมล"
        type="text"
        placeholder="อีเมล"
        id="email"
        value={input}
        onChange={handleChange}
      />
      {validateMessage.email && (
        <span className="text-xs text-red-500">โปรดกรอกข้อมูลให้ครบถ้วน</span>
      )}
      <RegisterInput
        err={validateMessage.mobile}
        text="เบอร์โทรศัพท์"
        type="text"
        placeholder="เบอร์โทรศัพท์"
        id="mobile"
        value={input}
        onChange={handleChange}
      />
      {validateMessage.mobile && (
        <span className="text-xs text-red-500">อีเมลไม่ถูกต้อง</span>
      )}
      <TypeInput
        title="ประเภทที่พัก"
        defaultOption="ประเภทที่พัก..."
        option={option}
        setType={setType}
        type={type}
        validateMessage={validateMessage}
      />
      <RegisterInput
        err={validateMessage.password}
        text="รหัสผ่าน"
        type="password"
        placeholder="รหัสผ่าน"
        id="password"
        value={input}
        onChange={handleChange}
      />
      {validateMessage.password && (
        <span className="text-xs text-red-500">
          รหัสผ่านต้องไม่น้อยกว่า 6 และไม่มากกว่า 30 ตัวอักษร
        </span>
      )}
      <RegisterInput
        err={validateMessage.confirmPassword}
        text="ยืนยันรหัสผ่าน"
        type="password"
        placeholder="ยืนยันรหัสผ่าน"
        id="confirmPassword"
        value={input}
        onChange={handleChange}
      />

      {validateMessage.confirmPassword && (
        <span className="text-xs text-red-500">รหัสผ่านไม่ตรงกัน</span>
      )}
    </>
  );
}

export default RegisterPlaceFormInput;
