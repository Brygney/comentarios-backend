const Joi = require('joi');

const id = Joi.string()
              .uuid();
const comentario = Joi.string()
                   //.alphanum()
                   .min(3)
                   .max(30);
const createcomentarioSchema = Joi.object({
  comentario: comentario.required()
});

const updatecomentarioSchema = Joi.object({
  comentario: comentario
});

const getcomentarioSchema = Joi.object({
  id: id.required()
});

module.exports = {createcomentarioSchema, updatecomentarioSchema, getcomentarioSchema};



