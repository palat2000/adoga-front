function Box({ children }) {
  return (
    <div className="bg-white px-10 py-7 shadow flex flex-col gap-4 min-w-[40rem]">
      {children}
    </div>
  );
}

export default Box;
