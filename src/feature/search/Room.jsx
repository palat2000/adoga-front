function Room({ room }) {
  return (
    <div className="border border-bgPrimary w-full flex flex-col justify-center">
      <div className="px-5 py-3 text-2xl">{room.name}</div>
      <div className="flex gap-4">
        <div>
          <div className="bg-bgGray w-[200px] h-[200px]"></div>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <div>รายละเอียดห้อง</div>
          <div>{room.desc}</div>
        </div>
        <div className="pr-10 pb-8 self-end flex flex-col gap-2">
          <div>฿ {room.price.toLocaleString("en-Us")}</div>
          <div>ราคาเริ่มต้น(ต่อคืน)</div>
          <button className="w-full bg-primary text-white rounded-md py-2">
            จอง
          </button>
        </div>
      </div>
    </div>
  );
}

export default Room;
