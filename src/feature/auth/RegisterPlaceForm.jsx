import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { OPTION } from "../../config/constants";
import RegisterPlaceFormInput from "./RegisterPlaceFormInput";
import LocationInput from "../map/LocationInput";
import useAuth from "../../hooks/use-auth";
import validate from "../../utils/validate";
import PictureForm from "./PictureForm";
import createFormData from "../../utils/formData";

const registerPlaceSchema = Joi.object({
  name: Joi.string().trim().required(),
  type: Joi.string().required(),
  email: Joi.string().email({ tlds: false }).required(),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
});

function RegisterPlaceForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [type, setType] = useState("");
  const [validateMessage, setValidateMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [file, setFile] = useState(null);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const { registerPlace } = useAuth();

  const handleClick = (e) => {
    setSelected(null);
    setClicked({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      let data;
      if (selected) {
        data = { ...input, ...selected, type: type?.key };
      } else {
        data = { ...input, ...clicked, type: type?.key };
      }
      if (!file) {
        return setValidateMessage({ file: "โปรดเลือกรูปภาพ" });
      }
      const res = validate(registerPlaceSchema, data);
      if (res) {
        return setValidateMessage(res);
      }
      const formData = createFormData(data);
      formData.append("imagePlace", file);
      await registerPlace(formData);
      navigate("/user-place");
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <RegisterPlaceFormInput
            handleChange={handleChange}
            validateMessage={validateMessage}
            input={input}
            option={OPTION}
            setType={setType}
            type={type}
          />
        </div>
        <PictureForm
          setFile={setFile}
          file={file}
          validateMessage={validateMessage}
        />
        <div className="flex flex-col gap-4">
          <LocationInput
            validateMessage={validateMessage}
            setSelected={setSelected}
            setClicked={setClicked}
            handleClick={handleClick}
            clicked={clicked}
            selected={selected}
          />
        </div>
        <Button className="bg-secondary text-white hover:opacity-80 transition-all">
          สมัครสมาชิก
        </Button>
      </form>
    </div>
  );
}

export default RegisterPlaceForm;
