function EditAction({ children, onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer hover:text-primary">
      {children}
    </div>
  );
}

export default EditAction;
