function Frame({ children, className }) {
  return (
    <div
      className={`px-6 py-4 bg-white shadow-md rounded-sm hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Frame;
