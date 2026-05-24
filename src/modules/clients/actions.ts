"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { ClientFormValues } from "@/validators/client";

export async function createClient(data: ClientFormValues) {
  const session = await auth();
  if (!session?.user?.tenantId) throw new Error("Não autorizado");

  return await prisma.client.create({
    data: {
      ...data,
      tenantId: session.user.tenantId, // Garantia do isolamento multi-tenant
    },
  });
}
