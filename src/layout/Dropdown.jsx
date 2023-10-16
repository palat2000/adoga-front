import { Link } from "react-router-dom";
import IconProfile from "../components/IconProfile";
import useDropdown from "../hooks/use-dropdown";
import useAuth from "../hooks/useAuth";

function Dropdown({ name }) {
  const { dropdownRef, isOpen, setIsOpen } = useDropdown();
  const { logout } = useAuth();
  return (
    <div ref={dropdownRef} className="flex items-center gap-2 relative">
      <IconProfile
        who="user"
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        name={name}
      />
      {isOpen && (
        <div className="absolute bg-white shadow-lg w-56 top-[100%] right-0 rounded-sm p-4">
          <div className="px-4 py-2 hover:bg-gray-200 rounded-sm cursor-pointer">
            การจองของฉัน
          </div>
          <Link onClick={() => setIsOpen(false)} to="/user">
            <div className="px-4 py-2 hover:bg-gray-200 rounded-sm cursor-pointer">
              ข้อมูลส่วนตัวของฉัน
            </div>
          </Link>
          <div
            onClick={logout}
            className="px-4 py-2 hover:bg-gray-200 rounded-sm cursor-pointer"
          >
            ออกจากระบบ
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
