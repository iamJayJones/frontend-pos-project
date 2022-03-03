<template>
  <section class="home">
    <div class="first-p">
      <img class="last-p" src="@/assets/rj-shoes.jpg" alt="" />
    </div>
    <br /><br /><br />

    <a href="#log" style="text-decoration: none"
      ><button class="butt">Log in</button></a
    >
  </section>
</template>

<script>
export default {};
</script>

<style scope>
.home {
  background-image: URL("https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoe-rWtqPn.png") !important;
  background-size: cover !important;
  background-position: center;
  object-fit: cover;
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
  border-radius: 30px;
  opacity: 0.5;
}

.butt {
  display: flex;
  justify-content: center;
  border-radius: 20px;
  width: 200px;
  padding: 5px;
  margin-right: auto;
  margin-left: auto;
  border: none;
  transition: 0.3s;
}

.butt:hover {
  background: #000;
  color: #fff;
  transition: 0.3s;
}
</style>
