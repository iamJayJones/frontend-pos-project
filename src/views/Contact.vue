<template>
  <section class="contact-f">
    <div class="container">
      <div class="hello">
        <h1>Get in contact with us</h1>
        <br /><br />
        <form
          action="https://formspree.io/f/xqknplje"
          method="post"
          target="_blank"
        >
          <div class="large-group">
            <div class="small-group">
              <label for="firstname">First Name</label>
              <input id="firstname" type="text" name="firstname" required />
            </div>
            <div class="small-group">
              <label for="lastname">Last Name</label>
              <input for="lastname" type="text" name="lastname" required />
            </div>
            <div class="small-group">
              <label for="phonenumber">Phone Number</label>
              <input id="phonenumber" type="tel" name="phonenumber" required />
            </div>
            <div class="small-group">
              <label for="email">Email</label>
              <input id="email" type="email" name="email" required />
            </div>
            <div class="textarea-div">
              <label for="message">Message</label>
              <textarea
                id="message"
                type="text"
                name="message"
                required
              ></textarea>
            </div>
            <input id="submit" class="btn" type="submit" name="submit" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.hello {
  padding-top: 200px;
}

h1 {
  text-align: center;
}

form {
  background-color: white;
  border-radius: 20px;
  -webkit-box-shadow: 5px 5px 20px 0px rgba(173, 173, 173, 1);
  -moz-box-shadow: 5px 5px 20px 0px rgba(173, 173, 173, 1);
  box-shadow: 5px 5px 20px 0px rgba(173, 173, 173, 1);
  padding: 1.5em;
  margin-left: 150px;
  width: 75%;
}

@media screen and (min-width: 768px) {
  form {
    padding: 2.5em;
  }
}
h2 {
  text-align: center;
  font-size: 28px;
  padding: 0;
  margin-bottom: 20px;
}

@media screen and (min-width: 700px) {
  .large-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .small-group {
    width: 45%;
  }
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 10px 16px;
  width: 100%;
  outline: 0;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 0;
  background-color: #e1e5ee;
  font-size: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

input:hover {
  background-color: #c7ccdb;
}

.textarea-div {
  width: 100%;
}

textarea {
  padding: 10px;
  width: 100%;
  outline: 0;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 0;
  background-color: #e1e5ee;
  font-size: 14px;
  height: 100px;
}

textarea:hover {
  background-color: #c7ccdb;
}

.btn {
  background-color: #e1e5ee;
  padding: 12px 15px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 20px;
  transition: 0.3s all ease;
}

.btn:hover {
  background-color: #c7ccdb;
  color: red;
}
</style>
