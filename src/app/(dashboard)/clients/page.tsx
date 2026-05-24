import { ClientForm } from "@/modules/clients/components/client-form";

export default function ClientsPage() {
  return (
    <div className="clients-container">
      <h1>Cadastrar Cliente</h1>
      <ClientForm />
    </div>
  );
}
