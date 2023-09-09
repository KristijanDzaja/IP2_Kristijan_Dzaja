<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-title">
        IP2 API
      </div>
      <div class="nav-links">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/api">API</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #14e679;
  color: white;
  padding: 1rem;
}

.nav-title {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
