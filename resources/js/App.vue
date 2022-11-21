<template>
  <div class="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import './Styles/app.scss'

export default {
  name: 'app',
  components: {
    Navbar: () => import('./Components/Navbar.vue')
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
body{
  font-size:17px;
}
*{
  font-family: 'PT Sans', sans-serif;
}
.base-input{
  background: #F8F8F8;
  border-radius: 5px;
  border:none;
  outline: none;
  padding:20px;
  font-family: 'PT Sans';
  font-size: 18px;
  line-height: 23px;
  color: #818181;
}
.base-btn{
  background: #243E97;
  border-radius: 5px;
  padding:20px;
  font-family: 'PT Sans';
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.1em;
  border:none;
  outline: none;
  transition: .2s;
  color: #FFFFFF;
  &:hover{
  background: #0c1f5e;
  }
}
.container{
  width:95%;
  margin:0 auto;
  @media(min-width:768px){
    width:90%;
  }
  @media(min-width:1300px){
    width:70%;
  }
  @media(min-width:1400px){
    max-width: 1300px;
  }
}
</style>
