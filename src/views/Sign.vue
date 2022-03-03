<template>
  <form @submit.prevent="register" class="form border">
    <h2 class="form-heading">Sign Up</h2>
    <input
      class="form-input border-input"
      type="text"
      v-model="name"
      placeholder="Name"
    />
    <input
      class="form-input border-input"
      type="email"
      v-model="email"
      placeholder="Email"
    />
    <input
      class="form-input border-input"
      type="text"
      v-model="contact"
      placeholder="Phone number"
    />
    <input
      class="form-input border-input"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <button type="submit" class="form-btn border">Sign up</button>
    <h4>
      Got an account?
      <router-link to="/log" class="chan">Log in</router-link>
    </h4>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log(this.name, this.email, this.password, this.contact);
      fetch("https://back-end-pos-full-stack.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          contact: this.contact,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          localStorage.setItem("jwt", json.jwt);
          alert("User is signed up");
          (this.name = ""),
            (this.email = ""),
            (this.contact = ""),
            (this.password = ""),
            this.$router.push({ name: "Login" });
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
  border-radius: 30px;
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

.form-social-login {
  display: flex;
  justify-content: space-between;
}

.form-social-btn {
  width: 45%;
  color: #333;
}

.chan:hover {
  color: red;
}
</style>
