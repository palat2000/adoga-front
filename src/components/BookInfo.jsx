import { MONTH } from "../config/constants";

function BookInfo({ room, numberRoom, startDate, endDate, place }) {
  return (
    <div className="border bg-white w-[] rounded-sm shadow flex gap-6 text-xl">
      <div className="w-[200px] h-[200px] bg-bgGray">
        <img src={room.images[0]?.image} alt="room" />
      </div>
      <div className="flex-1 flex flex-col justify-around">
        <div>
          <div>{place?.name}</div>
          <div>{room.name}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>{`จองวันที่ ${startDate.getDate()} ${
            MONTH[startDate.getMonth()]
          } ${startDate.getFullYear()}`}</div>
          <div>{`ถึงวันที่ ${endDate.getDate()} ${
            MONTH[endDate.getMonth()]
          } ${endDate.getFullYear()}`}</div>
        </div>
      </div>
      <div className="pr-6 pb-6 self-end">จำนวน {numberRoom} ห้อง</div>
    </div>
  );
}

export default BookInfo;
