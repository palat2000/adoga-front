import { useNavigate } from "react-router-dom";

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="h-full flex flex-col gap-14 justify-center items-center">
      <div className=" text-4xl">จองสำเร็จ</div>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-primary rounded-md text-white text-xl"
      >
        กลับหน้าแรก
      </button>
    </div>
  );
}

export default SuccessPage;
