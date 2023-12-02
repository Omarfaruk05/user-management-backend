import { z } from "zod";

const updateUserZodSchema = z.object({
  body: z.object({}),
});

export const UserValidation = {
  updateUserZodSchema,
};
