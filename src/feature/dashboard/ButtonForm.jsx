import Button from "../../components/Button";

function ButtonForm({ setIsOpen }) {
  return (
    <div className="pt-1 flex gap-2">
      <Button
        onClick={() => setIsOpen(false)}
        className="text-secondary"
        type="button"
      >
        ยกเลิก
      </Button>
      <Button className="text-white bg-secondary">บันทึก</Button>
    </div>
  );
}

export default ButtonForm;
