import Joi from "joi";
import validation from "./validation";

const editSchema = Joi.object({
  first: Joi.string().required(),
  middle: Joi.string().allow(""),
  last: Joi.string().required(),
  phone: Joi.string().min(9).max(11).required(),
  url: Joi.string().allow(""),
  alt: Joi.string().allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().required(),
  city: Joi.string().required(),
  street: Joi.string().required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number().allow(""),
});

const validateEdit = (inputToCheck) => validation(editSchema, inputToCheck);

export { validateEdit };
