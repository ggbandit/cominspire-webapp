<template>
<div>
  <div class="high-50">
    <Navbar />
    <img class="top-graphic" src="../assets/top-graphic.png">
    <div class="text-h">ComInspire</div>
    <div class="text-h2">แหล่งแนะนำอุปกรณ์ไอทีอันดับหนึ่ง</div>
    <a class="btn btn-c btn-lg mt-4" href="/#/about" role="button">About us</a>
  </div>
  <div class="row no-gutters pt-3">
    <div class="col">
      <a href="/#/notebook" class="card mx-auto">
        <img class="mx-auto pt-3" src="../assets/n1.jpg">
        <a href="/#/notebook" class="text pl-4 pt-3">แนะนำ Top 5 Notebooks 2018</a>
        <p class="text-left text-bold pl-5">1.Huawei MateBook X <Pro class=""></Pro></p>
        <p class="text-left text-bold pl-5">2.Dell XPS 13....</p>     
        <p class="text-left text-bold pl-5">3.Asus ZenBook Flip S UX370....</p>     
        <p class="text-left text-bold pl-5"> 4.Apple Macbook Pro....</p>    
        </a>
    </div>
    <div class="col">
      <a href="/#/mouse" class="card mx-auto">
        <img class="mx-auto pt-3" src="../assets/m1.png">
        <a href="/#/mouse" class="text pl-5 pt-3">แนะนำ Top 5 Mouses 2018</a>
        <p class="text-left text-bold" style="padding-left: 70px;">1.Logitech G502....</p>
        <p class="text-left text-bold" style="padding-left: 70px;">2.Razer DeathAdder.....</p>     
        <p class="text-left text-bold" style="padding-left: 70px;">3.Corsair Scimitar.....</p>     
        <p class="text-left text-bold" style="padding-left: 70px;">4.Razer Naga Hex V2....</p>    
      </a>
  
     
     
      
    </div>
    <div class="col">
      <a href="/#/keyboard" class="card mx-auto">
        <img class="mx-auto pt-3" src="../assets/k1.png">
        <a href="/#/keyboard" class="text pl-4 pt-3">แนะนำ Top 5 Keyboards 2018</a>
        <p class="text-left text-bold pl-5">1.Corsair K95 RGB....</p>
        <p class="text-left text-bold pl-5">2.Logitech G513 Carbon....</p>     
        <p class="text-left text-bold pl-5">3.Roccat Vulcan 120 AIMO....</p>     
        <p class="text-left text-bold pl-5">4.SteelSeries Apex M750....</p>     
      </a>
    </div>
  </div>
</div>
</template>


<script>
import Navbar from './Navbar.vue'
export default {
  name: 'Home',
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
  height: 50vh;
  z-index: -1;
  opacity: 0.6;
}
.text {
  color: #47525E;
  font-family: Lato;
  font-size: 25px;
  font-weight: 400;
  line-height: 32px;
  width: 409px;
  text-align: left;
}
.text-h {
  color: #FFFFFF;
  font-family: Lato;
  font-size: 70px;
  font-weight: 400;
  letter-spacing: 10px;
  line-height: 91px;
}
.text-h2 {
  color: #FF0081;
  font-family: Lato;
  font-size: 50px;
  font-weight: 400;
  line-height: 65px;
}
.text-bold {
  color: #47525E;
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  width: 320px;
}
.btn-c {
  background-color: rgba(255, 166, 133, 0.73);
  color: #15181A;
  font-size: 32px;
  border-radius: 0 !important;
  width: 180px;
}
.high-50 {
  height: 50vh;
}
.card {
  background-color: #E3E3E3;
  border-radius: 21px;
  width: 364px;
  height: 450px;
  text-decoration: none;
}
.card:hover {
  background-color: #E3E3E3;
  border-radius: 21px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 364px;
  height: 450px;
  text-decoration: none;
}
img {
  width: 318px;
  height: 215px;
}
</style>
