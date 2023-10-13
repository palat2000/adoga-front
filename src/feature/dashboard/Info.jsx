import Joi from "joi";
import { useState } from "react";
import IconProfile from "../../components/IconProfile";
import useAuth from "../../hooks/useAuth";
import EditAction from "./EditAction";
import Frame from "./Frame";
import UpdatePasswordForm from "./UpdatePasswordForm";
import axios from "../../config/axios";

const changePasswordSchema = Joi.object({
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required()
    .trim(),
  newPassword: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required()
    .trim(),
  confirmNewPassword: Joi.string()
    .valid(Joi.ref("newPassword"))
    .trim()
    .required(),
});

const validate = (input) => {
  const { error } = changePasswordSchema.validate(input, { abortEarly: false });
  let res;
  if (error) {
    res = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
  return res;
};

function Info() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (input) => {
    try {
      setIsLoad(true);
      setErrorMessage({});
      const res = validate(input);
      if (res) {
        return setErrorMessage(res);
      }
      await axios.patch("/manage/change-password/place", input);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoad(false);
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
            isLoad={isLoad}
            errorMessage={errorMessage}
            handleSubmit={handleSubmit}
          />
        )}
      </Frame>
    </>
  );
}

export default Info;
