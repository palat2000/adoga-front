function LoginInput({ placeholder, type, id }) {
  return (
    <input
      className="outline-none px-4 py-1 border border-gray-300 rounded-sm"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
}

export default LoginInput;
