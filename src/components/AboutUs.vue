<template>
  <div>
    <Navbar />
    <img class="top-graphic" src="../assets/bg3.jpg">
    <div class="text mx-auto">Member</div>
    <div class="text2 mx-auto">ผู้จัดทำ</div>
    <div class="row no-gutters mt-5">
      <div class="col">
        <div class="card mx-auto">
          <img class="set-img mx-auto mt-4" src="../assets/por.jpg">
          <p class="text3 pt-3">Mr.Kittinan Chanpreecha</p>
          <p class="text3">CoE</p>
          <p class="text3">5835512020</p>
        </div>
      </div>
      <div class="col">
        <div class="card mx-auto">
          <img class="set-img mx-auto mt-4" src="../assets/neung.jpg">
          <p class="text3 pt-3">Mr.Kritamate Liewtipa</p>
          <p class="text3">CoE</p>
          <p class="text3">5835512023</p>
        </div>
      </div>
      <div class="col">
        <div class="card mx-auto">
          <img class="set-img mx-auto mt-4" src="../assets/vit.jpg">
          <p class="text3 pt-3">Mr.Naravit Thongpet</p>
          <p class="text3">CoE</p>
          <p class="text3">5835512025</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from './Navbar.vue'
export default {
  name: 'AboutUs',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-graphic {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.6;
}
.text {
  color: #FFFFFF;
  font-family: Lato;
  font-size: 70px;
  font-weight: 400;
  letter-spacing: 10px;
  line-height: 91px;
}
.text2 {
  color: #FF0081;
  font-family: Lato;
  font-size: 50px;
  font-weight: 400;
  line-height: 65px;
}
.text3 {
  color: #47525E;
  font-family: Lato;
  font-size: 30px;
  font-weight: 400;
  line-height: 39px;
  text-align: center;
}
.card {
  background-color: #E3E3E3;
  border-radius: 21px;
  width: 364px;
  height: 450px;
}
.set-img {
  border-radius: 100px;
  width: 234px;
  height: 234px;
}
</style>
