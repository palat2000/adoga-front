import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../config/axios";
import useAuth from "../../hooks/use-auth";
import useSearch from "../../hooks/use-search";

function Room({ room }) {
  const { form } = useSearch();
  const { user } = useAuth();
  const navigate = useNavigate();

  const startDate = new Date(form.start);
  const endDate = new Date(form.end);
  const timeDiff = endDate - startDate;
  const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const amount = dayDiff * room.price;

  const handleBook = async (id) => {
    try {
      if (!user) {
        return navigate(`/inform-booking/${room.id}`);
      }
      await axios.post(`/book/${id}`, {
        start: form.start,
        end: form.end,
        amount,
        room: form.room,
      });
      navigate("/success");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className="border border-bgPrimary w-full flex flex-col justify-center">
      <div className="px-5 py-3 text-2xl">{room.name}</div>
      <div className="flex gap-4">
        <div>
          <div className="bg-bgGray w-[200px] h-[200px]"></div>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="flex flex-col justify-around flex-1">
          <div>
            <div>รายละเอียดห้อง</div>
            <div>{room.desc}</div>
          </div>
          <div>เหลืออีก {room.remaining} ห้อง</div>
        </div>
        <div className="pr-10 pb-8 self-end flex flex-col gap-2">
          <div>฿ {room.price.toLocaleString("en-Us")}</div>
          <div>ราคาเริ่มต้น(ต่อคืน)</div>
          <button
            disabled={!room.remaining}
            onClick={() => handleBook(room.id)}
            className="w-full bg-primary text-white rounded-md py-2"
          >
            จอง
          </button>
        </div>
      </div>
    </div>
  );
}

export default Room;
