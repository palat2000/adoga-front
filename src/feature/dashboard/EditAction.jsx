function EditAction({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:text-primary hover:underline"
    >
      {children}
    </div>
  );
}

export default EditAction;
