import { useState } from "react";
import Joi from "joi";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Frame from "../../components/Frame";
import Room from "./RoomDashboard";
import RoomForm from "./RoomForm";
import axios from "../../config/axios";
import validate from "../../utils/validate";
import createFormData from "../../utils/formData";

const roomSchema = Joi.object({
  maximumNumberPeople: Joi.number().required(),
  name: Joi.string().required(),
  desc: Joi.string().required(),
  price: Joi.number().required(),
  totalRoomCount: Joi.number().required(),
});

function ManageRoom({ myRooms, setMyRooms }) {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [file, setFile] = useState(null);

  const handleSubmit = async (input) => {
    try {
      setIsLoading(true);
      setErrorMessage({});
      const res = validate(roomSchema, input);
      if (res) {
        return setErrorMessage(res);
      }
      if (!file) {
        return setErrorMessage({ file: "โปรดเลือกรูปภาพ" });
      }
      const formData = createFormData(input);
      formData.append("imageRoom", file);
      const {
        data: { room },
      } = await axios.post("/manage/create-room", formData);
      setMyRooms([room, ...myRooms]);
      setFile(null);
      setIsOpen(false);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (input) => {
    try {
      setIsLoading(true);
      setErrorMessage({});
      if (input.remaining > input.totalRoomCount) {
        return setErrorMessage({
          remaining: "จำนวนห้องคงเหลือไม่สามารถมากกว่าจำนวนห้องทั้งหมดได้",
        });
      }
      if (input.remaining < 0) {
        return setErrorMessage({
          remaining: "จำนวนห้องคงเหลือไม่สามารถน้อยกว่า 0",
        });
      }
      const newMyRooms = [...myRooms];
      const index = newMyRooms.findIndex((room) => room.id === input.id);
      newMyRooms.splice(index, 1, { ...input });
      setMyRooms(newMyRooms);
      delete input.images;
      await axios.patch(`/manage/update-room/${input.id}`, input);
      setEditId(null);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen ? (
        <Frame>
          <RoomForm
            setFile={setFile}
            file={file}
            isLoading={isLoading}
            onClose={() => {
              setIsOpen(false);
              setErrorMessage({});
            }}
            handleSubmit={handleSubmit}
            errorMessage={errorMessage}
          />
        </Frame>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="text-white px-4 py-2 bg-secondary self-end"
        >
          เพิ่มห้องพัก
        </Button>
      )}
      {myRooms.map((room) => (
        <Room
          errorMessage={errorMessage}
          handleEdit={handleEdit}
          setEditId={setEditId}
          editId={editId}
          room={room}
          key={room.id}
        />
      ))}
    </>
  );
}

export default ManageRoom;
