import { useState } from "react";
import Button from "../../components/Button";
import Frame from "./Frame";
import Room from "./Room";

function ManageRoom() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Room />
      <Room />
      <Room />
      {isOpen ? (
        <Frame></Frame>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="text-white px-4 py-2 bg-secondary self-start"
        >
          เพิ่มห้องพัก
        </Button>
      )}
    </>
  );
}

export default ManageRoom;
