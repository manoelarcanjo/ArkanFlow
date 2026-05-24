import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  phone: z.string().optional(),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
});

export type ClientFormValues = z.infer<typeof clientSchema>;
