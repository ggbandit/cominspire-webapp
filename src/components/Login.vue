<template>
  <b-container fluid class="bg">
      <div class="card-wrapper">
            <div class="header">Welcome to ComInspire</div>
            <img src="../assets/logo1.png">
            <div class="card">
                <div class="sign-in">Sign in</div>
                <input class="mt-3" type="text" style="margin-left: 65px;" v-model="email" placeholder="Email">
                <input class="mt-2" type="password" style="margin-left: 65px;" v-model="password" placeholder="Password">
                <button class="mt-3" style="margin-left: 65px;" v-on:click="signIn">Sign in</button>
                <button class="mt-3" style="margin-left: 65px;" v-on:click="signUp">Sign Up</button>
            </div>
      </div>  
  </b-container>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('Home')
                },
                (err) => {
                    alert('Oops.' + err.message)
                }
            );
        },
        signUp: function() {
            this.$router.replace('SignUp')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
    height: 100vh;
    background-image: url("../assets/bg.jpg")
}
.card-wrapper {
    background-color: #383838;
    border-radius: 60px;
    width: 750px;
    height: 764px;
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
.sign-in {
  color: #47525E;
  font-family: Lato;
  font-size: 40px;
  font-weight: 700;
  line-height: 51px;
  text-align: center;
  padding-top: 1.95%;
  margin-top: 1.95%;
}
.header {
  color: #FFFFFF;
  font-family: Lato;
  font-size: 65px;
  font-weight: 400;
  line-height: 84px;
  text-align: center;
}
img {
    width: 289.04px;
    height: 247px;
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
.margin1 {
    margin-top: 26.81px;
    margin-left: 30.4px;
}
.margin2 {
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
.btn{
    background-color: #51E155;
    border-radius: 5px;
    width: 285.98px;
    height: 49.69px;
    color: #FFFFFF;
    font-family: Lato;
    font-size: 18px;
    text-align: center;
    border: 1px solid #51E155;
    text-decoration: none;
    margin-top: 15px;
}
</style>
