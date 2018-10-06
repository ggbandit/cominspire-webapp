<template>
<div class="bg">
    <Navbar />
    <div class="topic mx-auto">
      <p class="text m-auto">Top 5 Keyboards 2018</p>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">image1</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">name1</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">logo1</div>
      </div>
      <div class="row height-50">
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">detail1</div>
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">price1</div>
      </div>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">image2</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">name2</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">logo2</div>
      </div>
      <div class="row height-50">
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">detail2</div>
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">price2</div>
      </div>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">image3</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">name3</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">logo3</div>
      </div>
      <div class="row height-50">
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">detail3</div>
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">price3</div>
      </div>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">image4</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">name4</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">logo4</div>
      </div>
      <div class="row height-50">
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">detail4</div>
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">price4</div>
      </div>
    </div>
    <div class="card mx-auto mt-4 px-5 py-4">
      <div class="row height-50">
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">image5</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">name5</div>
        <div class="col-4" style="background-color: white; border: 2px solid #ccc">logo5</div>
      </div>
      <div class="row height-50">
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">detail5</div>
        <div class="col-6" style="background-color: white; border: 2px solid #ccc">price5</div>
      </div>
    </div>
</div>
</template>


<script>
import Navbar from './Navbar.vue'
export default {
  name: 'Keyboard',
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
