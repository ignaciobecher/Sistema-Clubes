<template>
  <nav class="navbar" :class="{ collapsed: isCollapsed }">
    <div class="navbar-content">
      <div class="brand">
        <span class="brand-icon" v-if="isCollapsed">GC</span>
        <span class="brand-name" v-else>GestClub</span>
      </div>

      <ul class="nav-links">
        <li v-for="item in menuItems" :key="item.id">
          <router-link
            :to="item.route"
            class="nav-link"
            :title="item.title"
            :aria-label="item.title"
          >
            <i :class="item.icon"></i>
            <span class="link-text">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>

      <div class="user-section">
        <div class="user-avatar">
          <span>{{ userInitials }}</span>
        </div>
        <span class="user-name">{{ userName }}</span>
        <button
          @click="logout"
          class="logout-btn"
          :title="isCollapsed ? 'Cerrar Sesión' : ''"
        >
          <i class="fas fa-sign-out-alt"></i>
          <span>Salir</span>
        </button>
      </div>
    </div>

    <button
      class="toggle-btn"
      @click="toggleNavbar"
      :title="isCollapsed ? 'Expandir' : 'Colapsar'"
      aria-label="Toggle Navigation"
    >
      <span class="toggle-icon"></span>
    </button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isCollapsed: false,
      userName: "John Doe",
      menuItems: [
        { id: 1, title: "Dashboard", icon: "fas fa-chart-line", route: "/" },
        { id: 2, title: "Miembros", icon: "fas fa-users", route: "/members" },
        {
          id: 3,
          title: "Eventos",
          icon: "fas fa-calendar-alt",
          route: "/events",
        },
        { id: 4, title: "Finanzas", icon: "fas fa-wallet", route: "/finances" },
        { id: 5, title: "Ajustes", icon: "fas fa-cog", route: "/settings" },
      ],
    };
  },
  computed: {
    userInitials() {
      return this.userName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    },
  },
  methods: {
    toggleNavbar() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit("toggle", this.isCollapsed);
    },
    logout() {
      console.log("Cerrando sesión...");
    },
  },
};
</script>

<style scoped>
.navbar {
  --navbar-bg: #1a1a2e;
  --navbar-color: #e94560;
  --navbar-hover: #16213e;
  --navbar-height: 60px;

  width: 100%;
  height: var(--navbar-height);
  background: var(--navbar-bg);
  color: #fff;
  transition: height 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.navbar.collapsed {
  height: var(--navbar-height);
}

.navbar-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 2rem;
  display: flex;
  align-items: center;
}

.brand-icon,
.brand-name {
  color: var(--navbar-color);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-grow: 1;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 12px;
  margin-right: 1rem;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: var(--navbar-hover);
}

.nav-link i {
  font-size: 1.2rem;
  margin-right: 0.5rem;
  color: var(--navbar-color);
}

.user-section {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 0.5rem 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background: var(--navbar-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 0.5rem;
}

.user-name {
  margin-right: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logout-btn {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.logout-btn:hover {
  color: var(--navbar-color);
}

.logout-btn i {
  margin-right: 0.5rem;
}

.toggle-btn {
  display: none; /* Hidden as it's not necessary for horizontal navbar */
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }

  .navbar-content {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .brand {
    margin-bottom: 1rem;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
  }

  .nav-link {
    width: 100%;
  }

  .user-section {
    width: 100%;
    justify-content: space-between;
    margin-top: 1rem;
  }
}
</style>
