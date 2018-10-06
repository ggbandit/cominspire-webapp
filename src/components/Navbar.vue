<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/#/home"><img class="logo pr-2" src="../assets/logo.png">ComInspire</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mr-5">
      <li class="nav-item">
        <a class="nav-link" href="/#/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/notebook">Notebook</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/keyboard">Keyboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/mouse">Mouse</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/about">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#/login">Log out</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
    methods: {
        About: function () {
            this.$router.replace('about')
        },
        Home: function() {
            this.$router.replace('Home')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img.logo {
  width: 60px;
  height: 60px;
}
.bg-light {
  background-color: transparent !important;
}
ul li a {
  font-size: 25px;
  font-weight: bold;
  color: black !important;
}
</style>
