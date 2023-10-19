import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../config/axios";
import Loading from "../components/Loading";
import BookInfo from "../components/BookInfo";
import Modal from "../components/Modal";
import Button from "../components/Button";

function MyBooking() {
  const [allBooking, setAllBooking] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cancelId, setCancelId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const getBooking = async () => {
      try {
        setIsLoading(true);
        const {
          data: { allBooking },
        } = await axios.get("/manage/my-booking");
        setAllBooking(allBooking);
      } catch (err) {
        toast.error(err.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    getBooking();
  }, []);

  const prepareCancel = (id) => {
    setCancelId(id);
    setIsOpenModal(true);
  };

  const handleCancel = async (id) => {
    try {
      await axios.delete(`/manage/cancel/${id}`);
      setAllBooking(allBooking.filter((book) => book.id !== id));
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="bg-bgPrimary h-full relative flex justify-center">
      {isLoading && <Loading />}
      {isOpenModal && (
        <Modal>
          <h3 className="text-2xl">ต้องการยกเลิกการจองหรือไม่</h3>
          <div className="flex gap-10">
            <Button
              onClick={() => {
                handleCancel(cancelId);
                setIsOpenModal(false);
              }}
              className="border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
            >
              ยกเลิกการจอง
            </Button>
            <Button
              onClick={() => setIsOpenModal(false)}
              className="border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              ไม่ ฉันไม่ต้องการยกเลิก
            </Button>
          </div>
        </Modal>
      )}
      <div className="container flex flex-col gap-4 py-12">
        {allBooking.map((book) => (
          <BookInfo
            prepareCancel={prepareCancel}
            id={book.id}
            key={book.id}
            room={book.room}
            place={book.room.placer}
            startDate={new Date(book.fromDate)}
            endDate={new Date(book.toDate)}
            numberRoom={book.amountRoom}
          />
        ))}
      </div>
    </div>
  );
}

export default MyBooking;
