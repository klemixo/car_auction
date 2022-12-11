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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
body{
  font-size:17px;
  overflow-x: hidden;
}
#app{
  overflow-x: hidden;
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

  .base-checkbox input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  .base-checkbox .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    font-weight: 400 !important;
  }
  .base-checkbox .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .base-checkbox .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098A9;
    transition: all 0.2s ease;
  }
  .base-checkbox .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #FFFFFF;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .base-checkbox .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #506EEC;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  .base-checkbox .cbx span:last-child {
    padding-left: 8px;
  }
  .base-checkbox .cbx:hover span:first-child {
    border-color: #506EEC;
  }

  .base-checkbox .inp-cbx:checked + .cbx span:first-child {
    background: #506EEC;
    border-color: #506EEC;
    animation: wave-46 0.4s ease;
  }
  .base-checkbox .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  .base-checkbox .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }

  @keyframes wave-46 {
    50% {
      transform: scale(0.9);
    }
  }

</style>
