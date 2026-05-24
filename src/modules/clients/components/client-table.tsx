import { getClients } from "../actions";
import { Client } from "@/validators/client";

export async function ClientTable() {
  const clients = await getClients();

  // Verificação de segurança: se estiver vazio, retorna uma mensagem amigável
  if (clients.length === 0) {
    return <div className="card">Nenhum cliente cadastrado ainda.</div>;
  }

  return (
    <div className="card">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ color: "#9CA3AF", textAlign: "left" }}>
            <th style={{ padding: "1rem" }}>Nome</th>
            <th style={{ padding: "1rem" }}>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(
            (
              client: Client, // Aplique o tipo aqui
            ) => (
              <tr
                key={client.id}
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <td style={{ padding: "1rem" }}>{client.name}</td>
                <td style={{ padding: "1rem" }}>{client.phone || "-"}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
