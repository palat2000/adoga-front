function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`px-3 py-1.5 rounded-sm ${className}`}>
      {children}
    </button>
  );
}

export default Button;
