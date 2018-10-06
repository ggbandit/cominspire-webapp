<template>
<div class="bg">
    <Navbar />
    <div class="topic mx-auto">
      <p class="text m-auto">Top 5 Notebooks 2018</p>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" ><img style="width: 100%;height: 100%;" src="../assets/msi.jpg"></div>
        <div class="col-4 text-name">MSI GF63 8RC</div>
        <div class="col-4" >logo1</div>
      </div>
      <div class="row height-50">
        <div class="col-6 detail" >
          <p>- Intel Core i7-8750H (2.20 - 4.10 GHz) </p>
          <p>- NVIDIA GeForce GTX 1050 (4GB GDDR5)</p>
          <p>- 8 GB DDR4</p>
          <p>- 1 TB 5400 RPM + 128 GB SSD</p>
          <p>- 15.6 inch (1920x1080) Full HD IPS</p>
          <p>- Windows 10 Home (64 Bit)</p>
        </div>
        <div class="col-6" >price1</div>
      </div>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" ><img style="width: 100%;height: 100%;" src="../assets/acer.jpg"></div>
        <div class="col-4 text-name">Acer Nitro 5 AN515-52</div>
        <div class="col-4" >logo2</div>
      </div>
      <div class="row height-50">
        <div class="col-6 detail" >
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div class="col-6" >price2</div>
      </div>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" ><img style="width: 100%;height: 100%;" src="../assets/asus.jpg"></div>
        <div class="col-4 text-name">Asus TUF Gaming FX504GM</div>
        <div class="col-4" >logo3</div>
      </div>
      <div class="row height-50">
        <div class="col-6 detail" >
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div class="col-6" >price3</div>
      </div>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" ><img style="width: 100%;height: 100%;" src="../assets/dell.jpg"></div>
        <div class="col-4 text-name">DELL G3 15 3579 Gaming</div>
        <div class="col-4" >logo4</div>
      </div>
      <div class="row height-50">
        <div class="col-6 detail" >
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div class="col-6" >price4</div>
      </div>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" ><img style="width: 100%;height: 100%;" src="../assets/lenovo.jpg"></div>
        <div class="col-4 text-name">Lenovo Legion Y520</div>
        <div class="col-4" >logo5</div>
      </div>
      <div class="row height-50">
        <div class="col-6 detail" >
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div class="col-6" >price5</div>
      </div>
    </div>
</div>
</template>


<script>
import Navbar from './Navbar.vue'
export default {
  name: 'Notebook',
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
.bg {
  background: url("../assets/bg2.jpg") no-repeat center;
  background-size: cover;
  height: 350vh;
  position: relative;
}
.topic {
  background-color: #FFBA5C;
  border-radius: 100px;
  width: 1167px;
  height: 124px;
}
.detail {
  color: #FFFFFF;
  font-family: Lato;
  font-size: 20px;
  text-align: left;
}
.text {
  color: #47525E;
  font-family: Lato;
  font-size: 60px;
  font-weight: 700;
  line-height: 0;
  width: 910px;
  text-align: center;
  padding-top: 60px;
}
.text-name {
  color: white;
  padding-top: 55px;
  font-size: 30px;
}
.card {
  background-color: #343F4B;
  border-radius: 20px;
  width: 1164px;
  height: 498px;
}
.height-50 {
  height: 50vh;
}
</style>
