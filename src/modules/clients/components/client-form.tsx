"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema, ClientFormValues } from "@/validators/client";
import { createClient } from "../actions";

export function ClientForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormValues>({
    resolver: zodResolver(clientSchema),
  });

  const onSubmit = async (data: ClientFormValues) => {
    await createClient(data);
    alert("Cliente cadastrado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card">
      <input
        {...register("name")}
        placeholder="Nome do cliente"
        className="input"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("phone")} placeholder="Telefone" className="input" />

      <button type="submit" className="button">
        Salvar Cliente
      </button>
    </form>
  );
}
