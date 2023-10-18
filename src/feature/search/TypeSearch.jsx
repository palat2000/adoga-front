function TypeSearch({ type, src }) {
  return (
    <div className="border border-bgGray hover:shadow-xl hover:border-fontGray flex flex-col items-center cursor-pointer">
      <div>
        <img
          src="https://img.freepik.com/free-photo/aerial-shot-aria-hotel-las-vegas_181624-42881.jpg?w=1060&t=st=1697449512~exp=1697450112~hmac=f796c229117e6a8ec819c4931455534042cc1324fb53c140ae0d5747f6df8a95"
          alt=""
        />
      </div>
      <div className="py-5">{type}</div>
    </div>
  );
}

export default TypeSearch;
