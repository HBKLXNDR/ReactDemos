import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().required().regex(/^[a-zA-ZА-яёЁіІїЇ]{1,20}$/).messages({
        "string.empty": "model не может быть пустым",
        // "string.min": "model should have more than 0 symbols",
        // "string.max": "model can be only up to 20 symbols, bro",
        "string.pattern.base": "only letters, 1-20, oK???"
    }),
    price:Joi.number().min(1).max(1000000).required().messages({
    "number.min": "this field can not be less than 2, brO"
}),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});
export {carValidator};