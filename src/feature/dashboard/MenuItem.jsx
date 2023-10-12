function MenuItem({ children, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={`py-2 px-4 hover:text-white hover:bg-secondary transition-all cursor-pointer ${className}`}
    >
      <div className="text-center">{children}</div>
    </div>
  );
}

export default MenuItem;
