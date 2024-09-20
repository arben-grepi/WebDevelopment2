// validationSchema.ts

import Joi from "joi";

// Define the Joi schema
export const schema = Joi.object({
  suomeksi: Joi.string()
    .min(2) // Minimum 2 characters
    .max(50) // Maximum 50 characters
    .required()
    .messages({
      "any.required": "Suomeksi is required",
      "string.min": "Suomeksi must be at least 2 characters long",
      "string.max": "Suomeksi must be less than or equal to 50 characters long",
    }),
  englanniksi: Joi.string()
    .min(2) // Minimum 2 characters
    .max(50) // Maximum 50 characters
    .required()
    .messages({
      "any.required": "Englanniksi is required",
      "string.min": "Englanniksi must be at least 2 characters long",
      "string.max":
        "Englanniksi must be less than or equal to 50 characters long",
    }),
});

// Define the TypeScript type
export type FormData = {
  suomeksi: string;
  englanniksi: string;
};
