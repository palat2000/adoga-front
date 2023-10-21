import { MONTH } from "../config/constants";

function BookInfo({
  room,
  numberRoom,
  startDate,
  endDate,
  place,
  id,
  prepareCancel,
}) {
  return (
    <div className="border bg-white w-[] rounded-sm shadow flex gap-6 text-xl">
      <div className="w-[200px] h-[200px] bg-bgGray">
        <img className="w-full h-full" src={room.images[0]?.image} alt="room" />
      </div>
      <div className="flex-1 flex flex-col justify-around">
        <div>
          <div>{place?.name}</div>
          <div className="text-fontGray">{room.name}</div>
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
      <div
        className={`pr-8 py-6 ${
          prepareCancel ? "flex flex-col justify-between" : "self-end"
        }`}
      >
        {prepareCancel && (
          <div
            onClick={() => prepareCancel(id)}
            className="cursor-pointer self-end"
          >
            <svg
              fill="#000000"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>cancel2</title>
                <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
              </g>
            </svg>
          </div>
        )}
        <div>จำนวน {numberRoom} ห้อง</div>
      </div>
    </div>
  );
}

export default BookInfo;
