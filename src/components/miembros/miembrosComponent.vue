<template>
  <div class="members-container">
    <header class="members-header">
      <h1>Miembros del Club</h1>
      <div class="header-actions">
        <button class="add-member-btn">
          <i class="fas fa-user-plus"></i> Añadir Miembro
        </button>
        <div class="search-bar">
          <input
            type="text"
            placeholder="Buscar miembros..."
            v-model="searchQuery"
          />
          <i class="fas fa-search"></i>
        </div>
      </div>
    </header>

    <div class="members-stats">
      <div class="stat-card">
        <h3>Total Miembros</h3>
        <p class="stat-value">{{ totalMembers }}</p>
      </div>
      <div class="stat-card">
        <h3>Nuevos este mes</h3>
        <p class="stat-value">{{ newMembersThisMonth }}</p>
      </div>
      <div class="stat-card">
        <h3>Tasa de retención</h3>
        <p class="stat-value">{{ retentionRate }}%</p>
      </div>
    </div>

    <div class="filters">
      <select v-model="activeFilter">
        <option value="all">Todos los miembros</option>
        <option value="active">Miembros activos</option>
        <option value="inactive">Miembros inactivos</option>
      </select>
    </div>

    <div class="members-list">
      <div
        v-for="member in filteredMembers"
        :key="member.id"
        class="member-card"
      >
        <div
          class="member-avatar"
          :style="{ backgroundColor: member.avatarColor }"
        >
          {{ member.initials }}
        </div>
        <div class="member-info">
          <h3>{{ member.name }}</h3>
          <p>{{ member.email }}</p>
          <p class="member-since">Miembro desde: {{ member.joinDate }}</p>
        </div>
        <div
          class="member-status"
          :class="{ active: member.status === 'active' }"
        >
          {{ member.status === "active" ? "Activo" : "Inactivo" }}
        </div>
        <div class="member-actions">
          <button class="edit-btn"><i class="fas fa-edit"></i></button>
          <button class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button :disabled="currentPage === 1" @click="prevPage">
        <i class="fas fa-chevron-left"></i>
      </button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button :disabled="currentPage === totalPages" @click="nextPage">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Members",
  data() {
    return {
      searchQuery: "",
      activeFilter: "all",
      currentPage: 1,
      membersPerPage: 10,
      members: [
        // Aquí irían los datos de los miembros, por ejemplo:
        {
          id: 1,
          name: "Ana García",
          email: "ana@example.com",
          status: "active",
          joinDate: "15/03/2022",
          avatarColor: "#4caf50",
          initials: "AG",
        },
        {
          id: 2,
          name: "Carlos López",
          email: "carlos@example.com",
          status: "inactive",
          joinDate: "22/07/2021",
          avatarColor: "#2196f3",
          initials: "CL",
        },
        // ... más miembros
      ],
    };
  },
  computed: {
    filteredMembers() {
      let filtered = this.members;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (member) =>
            member.name.toLowerCase().includes(query) ||
            member.email.toLowerCase().includes(query)
        );
      }
      if (this.activeFilter !== "all") {
        filtered = filtered.filter(
          (member) => member.status === this.activeFilter
        );
      }
      return filtered;
    },
    totalMembers() {
      return this.members.length;
    },
    newMembersThisMonth() {
      // Lógica para calcular nuevos miembros este mes
      return 15; // Ejemplo
    },
    retentionRate() {
      // Lógica para calcular la tasa de retención
      return 92; // Ejemplo
    },
    totalPages() {
      return Math.ceil(this.filteredMembers.length / this.membersPerPage);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  },
};
</script>

<style scoped>
.members-container {
  --primary-color: #3a7bd5;
  --secondary-color: #00d2ff;
  --text-color: #333;
  --bg-color: #f4f7f9;
  --card-bg: #ffffff;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  background-color: var(--bg-color);
  min-height: 100vh;
  width: 100vw;
}

.members-header {
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

.header-actions {
  display: flex;
  gap: 1rem;
}

.add-member-btn {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-member-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.search-bar {
  position: relative;
}

.search-bar input {
  padding: 0.5rem 1rem;
  padding-right: 2.5rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  width: 250px;
}

.search-bar i {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}

.members-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: var(--card-bg);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  text-align: center;
}

.stat-card h3 {
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.filters {
  margin-bottom: 1rem;
}

.filters select {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.members-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.member-card {
  background: var(--card-bg);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: translateY(-5px);
}

.member-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-right: 1rem;
}

.member-info {
  flex-grow: 1;
}

.member-info h3 {
  margin: 0;
  color: var(--text-color);
}

.member-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.member-since {
  font-size: 0.8rem;
  color: #888;
}

.member-status {
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  font-size: 0.8rem;
  background-color: #f44336;
  color: white;
}

.member-status.active {
  background-color: #4caf50;
}

.member-actions {
  display: flex;
  gap: 0.5rem;
}

.member-actions button {
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;
}

.member-actions button:hover {
  color: var(--primary-color);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.pagination button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background: #ddd;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .members-container {
    padding: 1rem;
  }

  .members-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
    flex-direction: column;
    margin-top: 1rem;
  }

  .search-bar input {
    width: 100%;
  }

  .members-list {
    grid-template-columns: 1fr;
  }
}
</style>
