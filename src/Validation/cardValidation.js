import Joi from "joi";
import validation from "./validation";

const cardSchema = Joi.object({
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  description: Joi.string().required(),
  phone: Joi.number().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  web: Joi.string().allow(""),
  url: Joi.string().allow(""),
  alt: Joi.string().allow(""),
  state: Joi.string().allow(""),
  country: Joi.string().required(),
  city: Joi.string().required(),
  street: Joi.string().required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number().allow(""),
});

const validateCard = (inputToCheck) => validation(cardSchema, inputToCheck);

export { validateCard };
