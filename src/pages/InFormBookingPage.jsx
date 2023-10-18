import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../config/axios";
import useSearch from "../hooks/use-search";
import BookInfo from "../components/BookInfo";
import BookForm from "../feature/book/BookForm";
import { customerSchema } from "../validation/formValidate";
import validate from "../utils/validate";
function InFormBookingPage() {
  const [room, setRoom] = useState({ images: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const [errMessage, setErrMessage] = useState({});
  const navigate = useNavigate();
  const { form } = useSearch();
  const { roomId } = useParams();
  const start = new Date(form.start);
  const end = new Date(form.end);
  const timeDiff = end - start;
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const amount = dayDiff * room.price;

  useEffect(() => {
    const getRoom = async () => {
      try {
        const {
          data: { room },
        } = await axios.get(`search/room/${roomId}`);
        setRoom(room);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };
    getRoom();
  }, [roomId]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setErrMessage({});
      const res = validate(customerSchema, customer);
      if (res) {
        return setErrMessage(res);
      }
      await axios.post(`/book/${roomId}`, {
        data: {
          start: form.start,
          end: form.end,
          amount: amount,
          room: form.room,
        },
        customer,
      });
      navigate("/success");
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-bgPrimary flex flex-col items-center py-12">
      <div className="container flex flex-col gap-8">
        <BookInfo
          place={room.placer}
          room={room}
          startDate={start}
          endDate={end}
          numberRoom={form.room}
        />
        <div className="w-[600px] mx-auto rounded-sm px-8 py-6 bg-white">
          <BookForm
            errMessage={errMessage}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            customer={customer}
          />
        </div>
      </div>
    </div>
  );
}

export default InFormBookingPage;
