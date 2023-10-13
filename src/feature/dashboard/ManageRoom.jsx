import { useState } from "react";
import Joi from "joi";
import Button from "../../components/Button";
import Frame from "./Frame";
import Room from "./Room";
import CreateRoomForm from "./CreateRoomForm";
import axios from "../../config/axios";
import validate from "../../utils/validate";

const roomSchema = Joi.object({
  maximumNumberPeople: Joi.number().required(),
  name: Joi.string().required(),
  desc: Joi.string().required(),
  price: Joi.number().required(),
  totalRoomCount: Joi.number().required(),
});

function ManageRoom({ myRooms }) {
  const [myRoomsArr, setMyRoomsArr] = useState(myRooms);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (input) => {
    try {
      setIsLoading(true);
      setErrorMessage({});
      const res = validate(roomSchema, input);
      if (res) {
        return setErrorMessage(res);
      }
      const { data: room } = await axios.post("/manage/create-room", input);
      setMyRoomsArr([room, ...myRoomsArr]);
      setIsOpen(false);
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
          <CreateRoomForm
            isLoading={isLoading}
            setIsOpen={setIsOpen}
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
      {myRoomsArr.map((room) => (
        <Room room={room} key={room.id} />
      ))}
    </>
  );
}

export default ManageRoom;
