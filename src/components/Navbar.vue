<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a href="/" class="navbar-brand"><img src="" alt="logo" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center pe-5"
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <!-- <div v-if="isLoggedIn"> -->
            <li class="nav-item">
              <router-link to="/explore" class="nav-link">Explore</router-link>
            </li>
          <!-- </div> -->
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <!-- <div v-if="!isLoggedIn" class="we"> -->
            <li class="nav-item">
              <router-link to="/log" class="nav-link">Log in</router-link>
            </li>
          <!-- </div> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar-brand {
  font-size: 2.5rem !important;
  color: red !important;
}

.active {
  color: red !important;
}

.nav-item {
  color: black !important;
  padding-left: 50px;
  font-size: 1.3rem;
}

.navbar {
  background: #e1e5ee;
  box-shadow: 3px 3px 3px #a5a8af;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: red !important;
}

.navbar-toggler-icon {
  color: red !important;
}

.router-link-active {
  color: red !important ;
  border-bottom: 4px solid red;
}

a.nav-link {
  color: black !important;
}
.we {
  display: flex;
}
</style>
