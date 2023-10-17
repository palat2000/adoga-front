let minPrice;

function PlaceItem({ place, onClick }) {
  if (!minPrice) {
    for (let room of place.rooms) {
      if (minPrice === undefined) {
        minPrice = room.price;
        continue;
      }
      minPrice = Math.min(minPrice, room.price);
    }
  }

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
      <div className="flex-1 pt-5">{place.name}</div>
      <div className="self-end pb-5 pr-5">
        <div className="text-fontGray">ราคาเริ่มต้น(ต่อคืน)</div>
        <div>฿{minPrice.toLocaleString("en-Us")}</div>
      </div>
    </div>
  );
}

export default PlaceItem;
