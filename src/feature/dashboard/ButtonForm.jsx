import Button from "../../components/Button";

function ButtonForm({ onClose }) {
  return (
    <div className="pt-1 flex gap-2">
      <Button onClick={onClose} className="text-secondary" type="button">
        ยกเลิก
      </Button>
      <Button className="text-white bg-secondary">บันทึก</Button>
    </div>
  );
}

export default ButtonForm;
