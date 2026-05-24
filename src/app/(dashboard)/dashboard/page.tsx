import "@/styles/main.scss";

export default function DashboardPage() {
  return (
    <div className="dashboard-content">
      <h1>Visão Geral</h1>

      <div
        className="stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        <div className="card">
          <div className="card__title">Faturamento Mensal</div>
          <div className="card__value">R$ 12.450,00</div>
        </div>

        <div className="card">
          <div className="card__title">Agendamentos Hoje</div>
          <div className="card__value">14</div>
        </div>

        <div className="card">
          <div className="card__title">Novos Clientes</div>
          <div className="card__value">3</div>
        </div>
      </div>
    </div>
  );
}
