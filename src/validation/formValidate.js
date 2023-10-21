import Joi from "joi";

export const changePasswordSchema = Joi.object({
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

export const mobileSchema = Joi.string()
  .pattern(/^[0-9]{10}$/)
  .required();

export const profileSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
});

export const customerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  email: Joi.string().email({ tlds: false }).required(),
});

export const registerPlaceSchema = Joi.object({
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
  province: Joi.string().required(),
  lat: Joi.number().required(),
  lng: Joi.number().required(),
});

export const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

export const roomSchema = Joi.object({
  maximumNumberPeople: Joi.number().required(),
  name: Joi.string().required(),
  desc: Joi.string().required(),
  price: Joi.number().required(),
  totalRoomCount: Joi.number().required(),
});
