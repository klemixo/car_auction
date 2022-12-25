<template>
  <nav class="navBar">
    <div class="navBar__content container">
      <ul class="navBar__link">
        <li><router-link :to="{ name: 'home' }">Main</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link> </li>
        <li><router-link :to="{ name: 'Terms' }">Terms&Conditions</router-link> </li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link> </li>
      </ul>
      <div class="navBar__hero">
        <img src="img/hero.png" alt="">
        <h1>Check car sales and damage history. <span>It’s free!</span></h1>
      </div>
      <div class="navBar__search">
        <input v-model="vin" type="text" class="base-input" placeholder="Lot or VIN number">
        <button @click="search" class="base-btn">SEARCH HERE</button>
      </div>
    </div>
  </nav>
</template>

<script>
import store from '../Store';
export default {
  name: 'navbar',
  data() {
    return {
      vin:null,
    }
  },
  methods: {
    search(){
      const filter = {key : 'vin', value : this.vin}
      store.commit('SET_FILTER',filter)
    }
  },
}
</script>
<style lang="scss">
.navBar{
  background: url('/img/navbar-bg-1.png');
  padding:71px 0;
  &__link{
    justify-content: flex-end;
    margin-bottom: 40px;
    display:flex;
    @media(min-width:768px){
      gap:62px;
    }
    li{
      a{
        color:white;
      }
    }
  }
  &__hero{
    display:flex;
    gap:36px;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    flex-direction: column;
    @media(min-width:768px){
      flex-direction: row;
    }
    h1{
      font-weight: 700;
      font-size: 47px;
      line-height: 61px;
      text-align: center;
      color: #FFFFFF;
      span{
        color:rgb(249, 214, 32)
      }
    }
  }
  &__search{
    display:flex;
    gap:24px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(min-width:576px){
      flex-direction: row;
    }
    .base-input{
      flex:1;
      width:90%;
    }
  }
}
</style>
