function IconProfile({ onClick, name = "A", who, className }) {
  return (
    <div
      onClick={onClick}
      className={`h-10 aspect-square rounded-full text-white flex justify-center items-center leading-[0.1] ${className} ${
        who ? "bg-primary" : "bg-secondary"
      }`}
    >
      {name[0].toUpperCase()}
    </div>
  );
}

export default IconProfile;
