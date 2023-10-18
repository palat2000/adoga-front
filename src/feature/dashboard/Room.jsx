import EditAction from "./EditAction";
import Frame from "../../components/Frame";
import Picture from "./Picture";
import RoomForm from "./RoomForm";

function Room({ room, editId, setEditId, handleEdit, errorMessage }) {
  return (
    <Frame className="relative flex gap-3 items-center">
      {editId === room.id ? (
        <RoomForm
          errorMessage={errorMessage}
          handleSubmit={handleEdit}
          isEdit={true}
          info={room}
          onClose={() => setEditId(null)}
        />
      ) : (
        <>
          <Picture src={room.images[0]?.image} />
          <div className="flex-1 flex flex-col gap-2">
            <div>{room.name}</div>
            <div className="text-sm">เหลือ {room.remaining} ห้อง</div>
          </div>
          <EditAction onClick={() => setEditId(room.id)}>แก้ไข</EditAction>
        </>
      )}
    </Frame>
  );
}

export default Room;
