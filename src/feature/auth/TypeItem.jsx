function TypeItem({ value, children, onClick }) {
  return (
    <div
      onClick={onClick}
      value={value}
      className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-sm"
    >
      {children}
    </div>
  );
}

export default TypeItem;
