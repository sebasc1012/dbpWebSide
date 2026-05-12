import z from "zod";

export const register = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});
