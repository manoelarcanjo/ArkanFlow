"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { ClientFormValues } from "@/validators/client";
import { revalidatePath } from "next/cache";

export async function createClient(data: ClientFormValues) {
  const session = await auth();
  if (!session?.user?.tenantId) throw new Error("Não autorizado");

  // 1. Criar o cliente no banco
  const client = await prisma.client.create({
    data: {
      ...data,
      tenantId: session.user.tenantId,
    },
  });

  // 2. AQUI ESTÁ O SEGREDO: Revalidar a página para a tabela atualizar
  revalidatePath("/clients");

  return client;
}

export async function getClients() {
  const session = await auth();
  if (!session?.user?.tenantId) throw new Error("Não autorizado");

  return await prisma.client.findMany({
    where: { tenantId: session.user.tenantId },
    orderBy: { name: "asc" },
  });
}
