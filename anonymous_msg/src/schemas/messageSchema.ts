import { z } from "zod";

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, {message: "Content must be of atleast 10 characters"})
        .max(500, {message: "Content must be of atmost 500 characters"})
})