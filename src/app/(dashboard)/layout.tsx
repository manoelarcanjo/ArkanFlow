import "@/styles/main.scss"; // Importando nosso estilo global

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-wrapper" style={{ display: "flex" }}>
      <aside className="sidebar">
        <div className="sidebar__logo">ArkanFlow</div>
        <nav className="sidebar__nav">
          {/* Aqui virão os links de navegação */}
          <a href="/dashboard">Dashboard</a>
          <a href="/appointments">Agenda</a>
          <a href="/clients">Clientes</a>
        </nav>
      </aside>

      <main
        className="main-content"
        style={{ marginLeft: "260px", width: "100%" }}
      >
        <header className="header">
          {/* Header com perfil, busca, etc */}
        </header>
        <div className="content-container" style={{ padding: "2rem" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
