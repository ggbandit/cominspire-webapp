<template>
  <b-container fluid class="bg">
    <div class="card-wrapper">
      <img src="../assets/logo.png">
      <div class="sign-up">Sign up</div>
      <div style="margin-top: 10px;">Create your free account</div>
      <input class="mg1" type="text" name="name" id="name" placeholder="Your name">
      <input class="mg2" type="email" name="email" id="email" placeholder="Email">
      <input class="mg2" type="password" name="password" id="password" placeholder="Password">
      <button type="submit" style="margin-top: 15.84px;">Sign up</button>
      <div style="margin-top: 35px;">By signing up you agree to our</div>
      <div style="margin-top: 10px;">Terms & Conditions</div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
    height: 100vh;
    width: 100vw;
    background-color: #E5E9F2;
    opacity: 0.8;
}
.card-wrapper {
    background-color: #FFFFFF;
    width: 600px;
    height: 627px;
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
}
.card {
    background-color: #FFFFFF;
    border-radius: 73px;
    width: 437px;
    height: 351px;
    margin-left: 20.8%;
}
img {
  width: 100px;
  height: 100px;
}
.sign-up {
  color: #47525E;
  font-family: Lato;
  font-size: 40px;
  font-weight: 700;
  line-height: 51px;
  width: 600px;
  text-align: center;
  padding-top: 20px;
}
input {
    background-color: #FFFFFF;
    border: 1px solid #8492A6;
    border-radius: 5px;
    width: 285.23px;
    height: 49.69px;
}
input::placeholder {
    color: #8190A5;
    font-family: Lato;
    font-size: 18px;
    font-weight: 400;
    line-height: 62px;
    width: 190.82px;
    text-align: left;
    padding-top: 23.99%;
    padding-left: 5.05%;
}
.mg1 {
    margin-top: 26.81px;
    margin-left: 17.4px;
}
.mg2 {
    margin-top: 14.38px;
    margin-left: 17.4px;
}
button {
    background-color: #51E155;
    border-radius: 5px;
    width: 285.98px;
    height: 49.69px;
    margin-left: 17.45px;
    color: #FFFFFF;
    font-family: Lato;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    border: 1px solid #51E155;
}
</style>
