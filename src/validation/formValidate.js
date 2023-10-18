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
