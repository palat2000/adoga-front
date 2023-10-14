import { useState } from "react";
import Joi from "joi";
import Button from "../../components/Button";
import Frame from "./Frame";
import Room from "./Room";
import RoomForm from "./RoomForm";
import axios from "../../config/axios";
import validate from "../../utils/validate";

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

  const handleSubmit = async (input) => {
    try {
      setIsLoading(true);
      setErrorMessage({});
      const res = validate(roomSchema, input);
      if (res) {
        return setErrorMessage(res);
      }
      const {
        data: { room },
      } = await axios.post("/manage/create-room", input);
      setMyRooms([room, ...myRooms]);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
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
      newMyRooms.splice(index, 1, input);
      setMyRooms(newMyRooms);
      await axios.patch(`/manage/update-room/${input.id}`, input);
      setEditId(null);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen ? (
        <Frame>
          <RoomForm
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
