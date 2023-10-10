function LoginInput({ placeholder, type, id, value, onChange, err }) {
  return (
    <input
      onChange={onChange}
      value={value[id]}
      className={`outline-none px-4 py-1 border border-gray-300 rounded-sm ${
        err && "border-red-500"
      }`}
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
}

export default LoginInput;
