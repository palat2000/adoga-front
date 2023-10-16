function PlaceItem({ place }) {
  return (
    <div className="border border-black flex gap-4">
      <div>
        <img className="h-[200px]" src={place.image} alt="place" />
      </div>
      <div className="flex-1">{place.name}</div>
      <div className="self-end pb-5 pr-5">
        <div className="text-fontGray">ราคาเริ่มต้น(ต่อคืน)</div>
        <div>฿{place.price.toLocaleString("en-Us")}</div>
      </div>
    </div>
  );
}

export default PlaceItem;
