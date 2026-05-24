import { z } from "zod";

export const clientSchema = z.object({
  id: z.string().uuid("ID inválido"),
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  phone: z.string().optional(),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
});

export type Client = z.infer<typeof clientSchema>;
