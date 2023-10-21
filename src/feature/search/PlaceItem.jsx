function PlaceItem({ place, onClick }) {
  let minPrice = place.rooms.reduce((acc, room) => {
    acc = Math.min(acc, room.price);
    return acc;
  }, place.rooms[0].price);

  return (
    <div
      onClick={onClick}
      className="border cursor-pointer border-black flex gap-4"
    >
      <div className="w-[200px] bg-bgGray">
        <img
          className="w-[200px] h-[200px]"
          src={place?.imagePlaces[0]?.image}
          alt="place"
        />
      </div>
      <div className="pt-5 flex-1 flex flex-col gap-4">
        <div>{place.name}</div>
        <div>จังหวัด {place.province}</div>
      </div>
      <div className="self-end pb-5 pr-5">
        <div className="text-fontGray">ราคาเริ่มต้น(ต่อคืน)</div>
        <div>฿{minPrice.toLocaleString("en-Us")}</div>
      </div>
    </div>
  );
}

export default PlaceItem;
