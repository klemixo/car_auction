<template>
  <div class="footer">
    <p class="footer__heading">
      History of sales insurance cars - Prices and damage insurance cars at
      Copart and insurance auctions IAAI
    </p>
    <div class="footer__content">
      <div class="container container__flex">
        <div class="footer__section">
          <router-link :to="{ name: 'home' }"><img src="img/hero.png" alt="" /></router-link>
        </div>
        <div class="footer__section p-top">
          <p><span>Got any questions?</span></p>
          <p>Feel free to contact</p>
          <p><a href="mailto:info@vinfax.info">info@vinfax.info</a></p>
        </div>
        <div class="footer__section p-top">
          <p v-for="(key,value) in siteCars"><span>{{ value }} Lots:</span> {{ key }}</p>
        </div>
        <div class="footer__section p-top">
          <router-link :to="{ name: 'Terms' }">Terms&Conditions</router-link>
        </div>
      </div>
      <div class="container container__bottom">
        Ⓒ 2021 VINFAX. All rights reserved
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteCars: null,
    };
  },
  mounted() {
    axios
      .get(`https://vinfax.info/api/cars-site`)
      .then((res) => {
        this.siteCars = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 51px;
  &__heading {
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    color: rgba(0, 0, 0, 0.2);
  }
  &__content {
    background: linear-gradient(
      180deg,
      rgba(19, 47, 148, 0.84) 0%,
      #102672 100%
    );
    padding: 10px 40px 5px 40px;
    width: 100%;
    .container__bottom {
      padding: 29px 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: left;
      color: white;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }
    .container__flex {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 16px;
      @media (min-width: 992px) {
        flex-direction: row;
        padding: 30px 0;
      }

      .p-top {
        padding-top: 20px;
      }
      p,
      a {
        font-weight: 400;
        font-size: 20px;
        line-height: 33px;
        color: #ffffff;
        text-decoration: none;
        margin: 0;
        text-align: left;
        span {
          font-weight: 700;
        }
        a {
          font-weight: bold;
          font-size: 25px;
        }
      }
    }
  }
}
</style>