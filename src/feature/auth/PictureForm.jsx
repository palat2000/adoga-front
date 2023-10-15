import { useRef } from "react";
import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";

function PictureForm({ file, setFile, validateMessage }) {
  const inputEl = useRef(null);
  return (
    <div className="flex flex-col gap-2">
      <label>รูปสถานที่พัก</label>
      <input
        ref={inputEl}
        className="hidden"
        type="file"
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <Button
        className="text-primary self-start"
        type="button"
        onClick={() => inputEl.current.click()}
      >
        เลือกรูป
      </Button>
      {validateMessage?.file && <ErrorMessage text={validateMessage.file} />}
      {file && (
        <div className="relative self-start">
          <span
            onClick={() => setFile(null)}
            className="absolute right-2 text-lg font-bold cursor-pointer"
          >
            x
          </span>
          <img
            className="h-[200px] aspect-auto"
            src={URL.createObjectURL(file)}
            alt="place"
          />
        </div>
      )}
    </div>
  );
}

export default PictureForm;
