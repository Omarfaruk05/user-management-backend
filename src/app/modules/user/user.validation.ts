import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    id: z.number().optional(),
    first_name: z.string({ required_error: "Frist name is required" }),
    last_name: z.string({ required_error: "Last name is required" }),
    email: z.string({ required_error: "Email is required" }).email(),
    gender: z.string({ required_error: "Gender is required" }),
    avatar: z.string({ required_error: "Avatar is required" }).url(),
    domain: z.string({ required_error: "Domain is required" }),
    available: z.boolean({ required_error: "Availablity is required" }),
  }),
});
const updateUserZodSchema = z.object({
  body: z.object({
    id: z.number().optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().email().optional(),
    gender: z.string().optional(),
    avatar: z.string().url().optional(),
    domain: z.string().optional(),
    available: z.boolean().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};
