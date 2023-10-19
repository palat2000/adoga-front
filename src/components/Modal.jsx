function Modal({ children }) {
  return (
    <div className="absolute right-0 left-0 bottom-0 top-0 bg-black bg-opacity-10 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-10 min-w-[500px] bg-white rounded-md min-h-[200px]">
        {children}
      </div>
    </div>
  );
}

export default Modal;
