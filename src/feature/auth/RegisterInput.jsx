function RegisterInput({ type, id, value, onChange, text, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{text}</label>
      <input
        className="outline-none px-4 py-1 border border-gray-300 rounded-sm"
        type={type}
        id={id}
        value={value[id]}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default RegisterInput;
