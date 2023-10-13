function Input({ type, id, value, onChange, text, err }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{text}</label>
      <input
        className={`outline-none px-4 py-1 border border-gray-300 rounded-sm ${
          err && "border-red-300"
        }`}
        type={type}
        id={id}
        value={value[id]}
        onChange={onChange}
        placeholder={text}
      />
    </div>
  );
}

export default Input;
