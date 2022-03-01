<template>
  <section class="home">
    <div class="first-p">
      <img class="last-p" src="@/assets/rj-shoes.jpg" alt="" />
    </div>
    <br /><br /><br />
    <button class="butt">
      <router-link to="/log">Log in</router-link>
    </button>
  </section>
</template>

<script>
export default {};
</script>

<style scope>
.home {
  background-color: black;
  height: 100vh;
}

.first-p {
  display: flex;
  justify-content: center;
  padding-top: 15%;
}

.last-p {
  object-fit: cover;
  height: 400px;
  width: 500px;
}

.butt {
  display: flex;
  justify-content: center;
  border-radius: 75%;
  width: 200px;
  height: 40px;
}
</style>
