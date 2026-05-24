import { ClientForm } from "@/modules/clients/components/client-form";
import { ClientTable } from "@/modules/clients/components/client-table";

export default function ClientsPage() {
  return (
    <div className="clients-container" style={{ display: "flex", gap: "2rem" }}>
      <div style={{ flex: 1 }}>
        <h1>Clientes</h1>
        <ClientTable />
      </div>

      <div style={{ width: "350px" }}>
        <h2>Novo Cliente</h2>
        <ClientForm />
      </div>
    </div>
  );
}
