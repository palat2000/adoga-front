import Button from "../../components/Button";

function ButtonForm({ onClose, who }) {
  return (
    <div className="pt-1 flex gap-2">
      <Button
        onClick={onClose}
        className={who ? "text-primary" : "text-secondary"}
        type="button"
      >
        ยกเลิก
      </Button>
      <Button className={`text-white ${who ? "bg-primary" : "bg-secondary"}`}>
        บันทึก
      </Button>
    </div>
  );
}

export default ButtonForm;
