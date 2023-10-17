import { useState } from "react";
import { toast } from "react-toastify";
import IconProfile from "../../components/IconProfile";
import useAuth from "../../hooks/use-auth";
import EditAction from "./EditAction";
import Frame from "../../components/Frame";
import UpdatePasswordForm from "./UpdatePasswordForm";
import axios from "../../config/axios";
import validate from "../../utils/validate";
import { changePasswordSchema } from "../../validation/formValidate";

function Info() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (input) => {
    try {
      setIsLoading(true);
      setErrorMessage({});
      const res = validate(changePasswordSchema, input);
      if (res) {
        return setErrorMessage(res);
      }
      await axios.patch("/manage/change-password/place", input);
      setIsOpen(false);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Frame className="flex gap-5 items-center">
        <IconProfile className="h-16 text-3xl" />
        <div className="flex flex-col gap-2 flex-1">
          <div>ชื่อที่พัก</div>
          <div>{user.name}</div>
        </div>
      </Frame>
      <Frame className="">
        <div className="flex flex-col gap-2 flex-1">
          <div>อีเมล</div>
          <div>{user.email}</div>
        </div>
      </Frame>
      <Frame>
        <div className="flex flex-col gap-2 flex-1">
          <div>หมายเลขโทรศัพท์</div>
          <div>{user.mobile}</div>
        </div>
      </Frame>
      <Frame className="flex justify-between items-center transition-all">
        {!isOpen ? (
          <>
            <div className="flex items-center flex-1">
              <div>รหัสผ่าน</div>
            </div>
            <EditAction onClick={() => setIsOpen(true)}>แก้ไข</EditAction>
          </>
        ) : (
          <UpdatePasswordForm
            setIsOpen={setIsOpen}
            isLoading={isLoading}
            errorMessage={errorMessage}
            handleSubmit={handleSubmit}
          />
        )}
      </Frame>
    </>
  );
}

export default Info;
