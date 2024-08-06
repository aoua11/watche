const Joi = require('joi');

exports.store = {
    brand: Joi.string().required(),
    model: Joi.string().required(),
    price: Joi.number().positive().required(),
    specifications: Joi.object({
        case_material : Joi.string(),
        movement: Joi.string(),
        water_resistance: Joi.string(),
    })
};