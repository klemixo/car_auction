<template>
  <div class="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import "./Styles/app.scss";
import Navbar from "./Components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer: () => import("./Components/Footer.vue"),
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
body {
  font-size: 17px;
  overflow-x: hidden;
}
#app {
  overflow-x: hidden;
}
.flex {
  display: flex;
}
* {
  font-family: "PT Sans", sans-serif !important;
}
.base-input {
  background: #f8f8f8;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 20px;
  font-family: "PT Sans";
  font-size: 18px;
  line-height: 23px;
  color: #818181;
}
.base-btn {
  background: #243e97;
  border-radius: 5px;
  padding: 20px;
  font-family: "PT Sans";
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.1em;
  border: none;
  outline: none;
  transition: 0.2s;
  color: #ffffff;
  &--filters {
    margin-top: 32px;
    text-decoration: none;
    height: fit-content;
  }
  &:hover {
    background: #0c1f5e;
  }
}
.container {
  width: 95%;
  margin: 0 auto;
  max-width: 1300px !important;
  @media (min-width: 768px) {
    width: 90%;
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
  border: 1px solid #9098a9;
  transition: all 0.2s ease;
}
.base-checkbox .cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #ffffff;
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
  background: #506eec;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}
.base-checkbox .cbx span:last-child {
  padding-left: 8px;
}
.base-checkbox .cbx:hover span:first-child {
  border-color: #506eec;
}

.base-checkbox .inp-cbx:checked + .cbx span:first-child {
  background: #506eec;
  border-color: #506eec;
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
.multiselect__option--highlight {
  background: #243e97 !important;
}
.multiselect__tags {
  min-height: 55px !important;
  padding: 17px 0px 0 25px !important;
}
.multiselect__placeholder {
  font-size: 16px !important;
}
.multiselect__select {
  top: 50%;
  transform: translate(0, -50%);
}
</style>
