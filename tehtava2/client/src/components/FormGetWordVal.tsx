import Joi from "joi";

export const schema = Joi.object({
  annaSana: Joi.string()
    .min(2) // Minimum 2 characters
    .max(50) // Maximum 50 characters
    .required()
    .messages({
      "any.required": "Sana on pakollinen. Anna sana.",
      "string.base": "Sana tulee olla merkkijono.",
      "string.min": "Sanan on oltava vähintään 2 merkkiä pitkä.",
      "string.max": "Sanan on oltava enintään 50 merkkiä pitkä.",
    }),
});

// Define the TypeScript type
export type FormData = {
  annaSana: string;
  sanaEnglanniksi: string;
};
