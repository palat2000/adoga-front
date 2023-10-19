import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import BookInfoItem from "./BookInfoItem";
import axios from "../../config/axios";
function BookInfo() {
  const [allBooking, setAllBooking] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const getPlaceBooking = async () => {
      try {
        const {
          data: { placeBooking },
        } = await axios.get("/manage/place-booking");
        setAllBooking(placeBooking);
        console.log(placeBooking);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };
    getPlaceBooking();
  }, []);

  return (
    <>
      {allBooking.map((room) => (
        <BookInfoItem
          setSelected={setSelected}
          selected={selected}
          key={room.id}
          room={room}
        />
      ))}
    </>
  );
}

export default BookInfo;
