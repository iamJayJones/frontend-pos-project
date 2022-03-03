<template>
  <section class="log">
    <form @submit.prevent="login" class="form border">
      <h2 class="form-heading">Log in</h2>
      <input
        class="form-input border-input"
        type="email"
        v-model="email"
        placeholder="Email"
      />
      <input
        class="form-input border-input"
        type="password"
        v-model="password"
        placeholder="Password"
      />
      <button type="submit" class="form-btn border">Login</button>
      <h4>
        Don't have an accont?
        <router-link to="/sign" class="other">Sign up</router-link>
      </h4>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      fetch("https://back-end-pos-full-stack.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("jwt", json.jwt);
          alert("User logged in");
          this.$router.push({ name: "Explore" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>
.border {
  border-radius: 25px;
  background: #e1e5ee;
  box-shadow: 8px 8px 15px #e4e4e4, -8px -8px 15px #ffffff;
}
.border-input {
  background: #f5f5f5;
  box-shadow: inset 8px 8px 15px #e4e4e4, inset -8px -8px 15px #ffffff;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin-top: 200px;
  margin-inline: auto;
}

.form-heading {
  text-align: center;
  text-transform: uppercase;
}

.form-input,
.form-btn {
  border: none;
  outline: none;
  padding: 20px;
}

.form-btn {
  cursor: pointer;
  transition: all 0.1s linear;
}

.form-btn:hover {
  transform: scale(1.05);
  background-color: #000;
  color: #fff;
  transition: 0.3s;
}

.other:hover {
  color: red;
}
</style>
