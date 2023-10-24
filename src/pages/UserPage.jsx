import { useState } from "react";
import IconProfile from "../components/IconProfile";
import EditAction from "../feature/dashboard/EditAction";
import Frame from "../components/Frame";
import useAuth from "../hooks/use-auth";
import UpdatePasswordForm from "../feature/dashboard/UpdatePasswordForm";
import {
  changePasswordSchema,
  mobileSchema,
  profileSchema,
} from "../validation/formValidate";
import validate from "../utils/validate";
import axios from "../config/axios";
import AddMobileForm from "../feature/dashboard/AddMobileForm";
import EditUserForm from "../feature/dashboard/EditUserForm";

function UserPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const { user, setUser } = useAuth();

  const handleChangePassword = async (input) => {
    setErrorMessage({});
    const res = validate(changePasswordSchema, input);
    if (res) {
      return setErrorMessage(res);
    }
    await axios.patch("/manage/change-password/user", input);
    setIsOpen(false);
  };

  const handleAddMobile = async (input) => {
    setErrorMessage({});
    const { error } = mobileSchema.validate(input);
    if (error) {
      return setErrorMessage({
        mobile: error.details[0].message,
      });
    }
    await axios.patch("/manage/add-mobile", { mobile: input });
    setUser({ ...user, mobile: input });
    setIsAdd(false);
  };

  const handleEditUser = async (input) => {
    setErrorMessage({});
    const res = validate(profileSchema, input);
    if (res) {
      return setErrorMessage(res);
    }
    await axios.patch("/manage/edit-profile", input);
    setUser({
      ...user,
      firstName: input.firstName,
      lastName: input.lastName,
    });
    setIsEdit(false);
  };

  return (
    <div className="bg-bgPrimary flex flex-col items-center h-full px-80">
      <div className="container flex flex-col gap-6 py-4 text-xl text-fontGray">
        <Frame className="flex gap-4 items-center w-full">
          {isEdit ? (
            <EditUserForm
              handleSubmit={handleEditUser}
              err={errorMessage}
              setIsEdit={setIsEdit}
            />
          ) : (
            <>
              <IconProfile
                name={user.firstName}
                className="h-20 text-3xl"
                who="user"
              />
              <div className="flex flex-col gap-2 flex-1">
                <div>ชื่อผู้ใช้</div>
                <div>
                  {user.firstName} {user.lastName}
                </div>
              </div>
              <EditAction onClick={() => setIsEdit(true)}>แก้ไข</EditAction>
            </>
          )}
        </Frame>
        <Frame className="flex flex-col gap-4">
          <div>อีเมล</div>
          <div>{user.email}</div>
        </Frame>
        <Frame className="flex items-center">
          {isAdd ? (
            <AddMobileForm
              err={errorMessage.mobile}
              handleSubmit={handleAddMobile}
              setIsEdit={setIsAdd}
            />
          ) : (
            <>
              <div className="flex-1 flex flex-col gap-4">
                <div>หมายเลขโทรศัพท์</div>
                {user?.mobile && <div>{user?.mobile}</div>}
              </div>
              {user?.mobile ? (
                <></>
              ) : (
                <EditAction onClick={() => setIsAdd(true)}>เพิ่ม</EditAction>
              )}
            </>
          )}
        </Frame>
        <Frame className="flex">
          {isOpen ? (
            <UpdatePasswordForm
              handleSubmit={handleChangePassword}
              errorMessage={errorMessage}
              setIsOpen={setIsOpen}
              who="user"
            />
          ) : (
            <>
              <div className="flex-1">รหัสผ่าน</div>
              <EditAction onClick={() => setIsOpen(true)}>แก้ไข</EditAction>
            </>
          )}
        </Frame>
      </div>
    </div>
  );
}

export default UserPage;
