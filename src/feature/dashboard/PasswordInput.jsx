function PasswordInput({ title, id, onChange, value }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{title}</label>
      <input
        value={value[id]}
        onChange={onChange}
        className="outline-none px-4 py-1 border border-gray-200 rounded-sm"
        id={id}
        type="password"
        placeholder={title}
      />
    </div>
  );
}

export default PasswordInput;
