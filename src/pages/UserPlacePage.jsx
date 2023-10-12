import { useState } from "react";
import Info from "../feature/dashboard/Info";
import ManageRoom from "../feature/dashboard/ManageRoom";
import MenuItem from "../feature/dashboard/MenuItem";

const OPTION = ["ข้อมูลที่พัก", "จัดการห้องพัก", "ข้อมูลการจอง"];

function UserPlacePage() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-bgPrimary h-full flex justify-center">
      <div className="container my-4">
        <div className="grid grid-cols-6 gap-4 h-full">
          <div className="bg-white col-span-2 xl:col-span-1 py-8 rounded-sm flex flex-col gap-2 shadow-md">
            {OPTION.map((text, index) => (
              <MenuItem
                onClick={() => setSelected(index)}
                className={selected === index && "bg-secondary text-white"}
                key={index}
              >
                {text}
              </MenuItem>
            ))}
          </div>
          <div className="col-span-4 xl:col-span-5 flex flex-col gap-7 text-fontGray text-lg">
            {selected === 0 && <Info />}
            {selected === 1 && <ManageRoom />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPlacePage;
