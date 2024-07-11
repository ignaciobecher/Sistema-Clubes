+
<template>
  <div class="home-container">
    <div class="content" :class="{ 'content-expanded': navbarCollapsed }">
      <header class="dashboard-header">
        <h1>Dashboard del Club</h1>
        <div class="date-picker">
          <button><i class="fas fa-chevron-left"></i></button>
          <span>Julio 2024</span>
          <button><i class="fas fa-chevron-right"></i></button>
        </div>
      </header>

      <div class="summary-grid">
        <div class="summary-card members">
          <div class="card-icon"><i class="fas fa-users"></i></div>
          <div class="card-content">
            <h2>Miembros</h2>
            <p class="count">1,234</p>
            <p class="trend positive">
              <i class="fas fa-arrow-up"></i> 5.2% este mes
            </p>
          </div>
        </div>
        <div class="summary-card events">
          <div class="card-icon"><i class="fas fa-calendar-alt"></i></div>
          <div class="card-content">
            <h2>Eventos</h2>
            <p class="count">12</p>
            <p>Próximos este mes</p>
          </div>
        </div>
        <div class="summary-card finances">
          <div class="card-icon"><i class="fas fa-chart-line"></i></div>
          <div class="card-content">
            <h2>Ingresos</h2>
            <p class="count">$25,680</p>
            <p class="trend positive">
              <i class="fas fa-arrow-up"></i> 10.3% vs. mes anterior
            </p>
          </div>
        </div>
        <div class="summary-card tasks">
          <div class="card-icon"><i class="fas fa-tasks"></i></div>
          <div class="card-content">
            <h2>Tareas</h2>
            <p class="count">8</p>
            <p>Pendientes</p>
          </div>
        </div>
      </div>

      <div class="charts-container">
        <div class="chart activity">
          <h3>Actividad Mensual</h3>
          <div class="chart-placeholder">
            <!-- Aquí iría un componente de gráfico -->
            <div class="chart-bars">
              <div class="bar" style="height: 60%"></div>
              <div class="bar" style="height: 80%"></div>
              <div class="bar" style="height: 40%"></div>
              <div class="bar" style="height: 70%"></div>
              <div class="bar" style="height: 50%"></div>
            </div>
          </div>
        </div>
        <div class="chart members">
          <h3>Distribución de Miembros</h3>
          <div class="chart-placeholder">
            <!-- Aquí iría otro componente de gráfico -->
            <div class="chart-pie">
              <div
                class="slice"
                style="transform: rotate(0deg) skew(30deg)"
              ></div>
              <div
                class="slice"
                style="transform: rotate(120deg) skew(30deg)"
              ></div>
              <div
                class="slice"
                style="transform: rotate(240deg) skew(30deg)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      navbarCollapsed: false,
    };
  },
  // Aquí irían los métodos y lifecycle hooks necesarios
};
</script>

<style scoped>
.home-container {
  --primary-color: #3a7bd5;
  --secondary-color: #00d2ff;
  --text-color: #333;
  --bg-color: #f4f7f9;
  --card-bg: #ffffff;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  background-color: var(--bg-color);
  min-height: 100vh;
  transition: all 0.3s ease;
  width: 100vw;
}

.content {
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  color: var(--text-color);
  font-size: 2.5rem;
  font-weight: 700;
}

.date-picker {
  display: flex;
  align-items: center;
  background: var(--card-bg);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.date-picker button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--primary-color);
}

.date-picker span {
  margin: 0 1rem;
  font-weight: 600;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.summary-card {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-icon {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-right: 1rem;
}

.card-content {
  flex-grow: 1;
}

.summary-card h2 {
  font-size: 1rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.summary-card .count {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.25rem;
}

.summary-card .trend {
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.trend.positive {
  color: #4caf50;
}

.trend i {
  margin-right: 0.25rem;
}

.charts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.chart {
  background: var(--card-bg);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.chart h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.chart-placeholder {
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.chart-bars {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  gap: 10px;
}

.bar {
  flex-grow: 1;
  background: linear-gradient(
    to top,
    var(--primary-color),
    var(--secondary-color)
  );
  border-radius: 5px 5px 0 0;
  transition: height 0.5s ease;
}

.chart-pie {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.slice {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  transform-origin: 50% 100%;
}

.slice:nth-child(2) {
  background: var(--secondary-color);
}

.slice:nth-child(3) {
  background: #00a8ff;
}

@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
  }

  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .date-picker {
    margin-top: 1rem;
  }

  .summary-grid,
  .charts-container {
    grid-template-columns: 1fr;
  }
}
</style>
