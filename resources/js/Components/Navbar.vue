<template>
  <nav class="navBar" :class="{ small: searched }">
    <div class="navBar__content container">
      <ul class="navBar__link" :class="{ small: searched }">
        <div class="img">
          <router-link :to="{ name: 'home' }">
            <img
              v-if="searched"
              src="img/logo-new-2.png"
              alt=""
              width="116"
              height="102"
            />
          </router-link>
        </div>
        <div class="links">
          <li><router-link :to="{ name: 'home' }">Main</router-link></li>
          <li><router-link :to="{ name: 'About' }">About</router-link></li>
          <li>
            <router-link :to="{ name: 'Terms' }">Terms&Conditions</router-link>
          </li>
          <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
        </div>
      </ul>
      <div class="navBar__hero" v-if="!searched">
        <router-link :to="{ name: 'home' }">
          <img src="img/logo-new-2.png" alt="" width="167" height="147" />
        </router-link>
        <h1>Check car sales and damage history. <span>It’s free!</span></h1>
      </div>
      <div class="navBar__search" v-if="!searched">
        <input
          v-model="vin"
          type="text"
          class="base-input"
          placeholder="Lot or VIN number"
        />
        <button @click="search" class="base-btn">SEARCH HERE</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import store from "../Store";
export default {
  name: "navbar",
  data() {
    return {
      vin: null,
    };
  },
  methods: {
    search() {
      const filter = { key: "vin", value: this.vin };
      store.commit("SET_FILTER", filter);
    },
  },
  computed: {
    ...mapState({
      searched: (state) => state.searched,
    }),
  },
};
</script>
<style lang="scss">
.navBar {
  background: linear-gradient(
      180deg,
      rgb(0 40 179 / 90%) 0%,
      rgb(0 57 255 / 28%) 225.36%
    ),
    url(/img/navbar-bg.png);
  background-blend-mode: multiply;
  padding: 61px 0 71px 0;
  background-size: cover;
  background-repeat: no-repeat;
  &.small {
    background: linear-gradient(89.98deg, #102672 0.01%, #384e9b 99.98%);
    padding: 15px 0;
    display: flex;
    justify-content: space-between;

    img {
      margin-right: auto;
    }
  }
  &__link {
    justify-content: flex-end;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 576px) {
      flex-direction: row;
    }
    .links {
      display: flex;
      @media (min-width: 768px) {
        gap: 62px;
      }
    }
    @media (min-width: 768px) {
      gap: 62px;
    }
    &.small {
      margin: 0;
      align-items: center;
    }
    li {
      a {
        color: white;
      }
    }
  }
  &__hero {
    display: flex;
    gap: 36px;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    h1 {
      font-weight: 700;
      font-size: 47px;
      line-height: 61px;
      text-align: center;
      color: #ffffff;
      span {
        color: rgba(255, 205, 30, 1);
      }
    }
  }
  &__search {
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 576px) {
      flex-direction: row;
    }
    @media (min-width: 1200px) {
      width: 77%;
      margin: 0 auto;
    }
    .base-input {
      flex: 1;
      width: 90%;
    }
  }
}
</style>
