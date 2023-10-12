import IconProfile from "../../components/IconProfile";
import Frame from "./Frame";

function Info() {
  return (
    <>
      <Frame className="flex gap-5 items-center">
        <IconProfile className="h-16 text-3xl" />
        <div className="flex flex-col gap-2 flex-1">
          <div>ชื่อที่พัก</div>
          <div>โรงแรมดังสุด</div>
        </div>
        <div>แก้ไข</div>
      </Frame>
      <Frame className="">
        <div className="flex flex-col gap-2 flex-1">
          <div>อีเมล</div>
          <div>popularhotel@mail.com</div>
        </div>
      </Frame>
      <Frame>
        <div className="flex flex-col gap-2 flex-1">
          <div>หมายเลขโทรศัพท์</div>
          <div>0123456789</div>
        </div>
      </Frame>
      <Frame className="flex justify-between items-center">
        <div className="flex flex-col gap-2 flex-1">
          <div>รหัสผ่าน</div>
          <div>รหัสผ่าน</div>
        </div>
        <div>แก้ไข</div>
      </Frame>
    </>
  );
}

export default Info;
