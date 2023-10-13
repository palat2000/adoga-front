import EditAction from "./EditAction";
import Frame from "./Frame";
import Picture from "./Picture";

function Room() {
  return (
    <Frame className="relative flex gap-3 items-center">
      <Picture src="https://img.freepik.com/free-photo/mockup-frames-living-room-interior-with-chair-decorscandinavian-style_41470-5148.jpg?w=826&t=st=1697126624~exp=1697127224~hmac=a975abfe92275ba006ab2dd4064c5d4c380053786307a64a07fb415027c3c150" />
      <div className="flex-1 flex flex-col gap-2">
        <div>ห้องธรรมดา</div>
        <div className="text-sm">เหลือ 4 ห้อง</div>
      </div>
      <EditAction>แก้ไข</EditAction>
    </Frame>
  );
}

export default Room;
