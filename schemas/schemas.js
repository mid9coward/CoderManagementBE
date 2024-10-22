const Joi = require("joi");

const userQuerySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  limit: Joi.number().integer().min(10).default(10),
  search: Joi.string(),
});

const userIdParamsSchema = Joi.object({
  id: Joi.string().required(),
});

module.exports = { userQuerySchema, userIdParamsSchema };
