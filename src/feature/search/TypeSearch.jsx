function TypeSearch({ type, src, alt }) {
  return (
    <div className="border border-bgGray hover:shadow-xl hover:border-fontGray flex flex-col items-center cursor-pointer">
      <div className="h-[200px] w-[250px]">
        <img className="h-full w-full" src={src} alt={alt} />
      </div>
      <div className="py-5">{type}</div>
    </div>
  );
}

export default TypeSearch;
