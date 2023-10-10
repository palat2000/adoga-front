function Footer() {
  return (
    <footer className="bg-darkBlue px-10 py-4 flex justify-between items-center">
      <div className="text-white text-4xl">Adoga</div>
      <div className="flex gap-40">
        <ul className="text-white font-light">
          <li className="text-xl pb-4 font-medium">ความช่วยเหลือ</li>
          <li>ขอความช่วยเหลือ</li>
          <li>คำถามที่พบบ่อย</li>
          <li>นโยบายความเป็นส่วนตัว</li>
          <li>นโยบายเกี่ยวกับคุกกี้</li>
          <li>ข้อกำหนดการใช้งาน</li>
          <li>จัดการการตั้งค่าคุกกี้</li>
        </ul>
        <ul className="text-white font-light">
          <li className="text-xl pb-4 font-medium">บริษัท</li>
          <li>เกี่ยวกับเรา</li>
          <li>สมัครงาน</li>
          <li>ข่าวประชาสัมพันธ์</li>
          <li>บล็อกท่องเที่ยว</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
