function MenuItem({ children, onClick, className, onMouseOver, onMouseLeave }) {
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`py-2 px-4 hover:text-white transition-all cursor-pointer ${className}`}
    >
      <div className="text-center">{children}</div>
    </div>
  );
}

export default MenuItem;
