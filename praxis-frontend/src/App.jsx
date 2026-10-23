function App() {
  return (
    <div
      style={{
        background: "#dfeaf7",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Tahoma, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "25px",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            color: "#7c3aed",
            fontSize: "56px",
            margin: 0,
          }}
        >
          PRAXIS
        </h1>

        <p>Transformando impacto em experiência</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr 220px",
          gap: "20px",
        }}
      >
        <div style={card}>
          <div style={avatar}></div>

          <h3 style={{ textAlign: "center" }}>
            Renata Carvalho
          </h3>

          <hr />

          <p>⭐ Nível 5</p>
          <p>🏆 4500 XP</p>
          <p>✅ 15 Missões</p>

          <hr />

          <h4>Empresas Interessadas</h4>

          <p>🏢 Vivo</p>
          <p>🏢 Itaú</p>
          <p>🏢 Heineken</p>
          <p>🏢 Coca-Cola</p>
          <p>🏢 Microsoft</p>
        </div>

        <div style={card}>
          <h2>Feed Praxis</h2>

          <div style={post}>
            <strong>Renata Carvalho</strong>

            <p>🎯 Concluiu API Java para ONG Educar.</p>

            <small>+500 XP</small>

            <hr />

            <div>
              ❤️ 34 Curtidas • 💬 12 Comentários
            </div>
          </div>

          <div style={post}>
            <strong>João Silva</strong>

            <p>📊 Criou Dashboard de Doações.</p>

            <small>+250 XP</small>

            <hr />

            <div>
              ❤️ 15 Curtidas • 💬 4 Comentários
            </div>
          </div>
        </div>

        <div style={card}>
          <h3>Comunidades</h3>

          <p>☕ Java para Impacto</p>
          <p>🚀 Spring Boot Brasil</p>
          <p>🤝 Voluntariado Digital</p>

          <hr />

          <h3>Missões</h3>

          <p>🎯 API Spring Boot</p>
          <p>🎯 Dashboard Power BI</p>
          <p>🎯 Landing Page ONG</p>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  borderRadius: "12px",
  padding: "20px",
};

const avatar = {
  width: "90px",
  height: "90px",
  background: "#7c3aed",
  borderRadius: "50%",
  margin: "0 auto",
};

const post = {
  background: "#f5f3ff",
  borderRadius: "10px",
  padding: "15px",
  marginBottom: "15px",
};

export default App;