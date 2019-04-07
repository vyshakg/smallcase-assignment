import Joi from "joi";

const price = Joi.number()
  .positive()
  .min(1)
  .required()
  .label("Price")
  .error(new Error("Invalid Price"));

const quantity = Joi.number()
  .positive()
  .min(1)
  .required()
  .label("Quantity")
  .error(new Error("Invalid Quantity"));

export const tradeBuy = Joi.object().keys({
  price,
  quantity
});

export const tradeSell = Joi.object().keys({
  quantity
});
