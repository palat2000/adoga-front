function Button({ children, onClick, className, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-1.5 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
