(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CarSlider.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/CarSlider.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vueperslides */ "./node_modules/vueperslides/dist/vueperslides.common.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vueperslides__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vueperslides/dist/vueperslides.css */ "./node_modules/vueperslides/dist/vueperslides.css");
/* harmony import */ var vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_0__["VueperSlides"],
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_0__["VueperSlide"]
  },
  props: ["slides"],
  computed: {
    mobileView: function mobileView() {
      return window.innerWidth < 768 ? true : false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Claim.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Claim.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue-stripe/vue-stripe */ "./node_modules/@vue-stripe/vue-stripe/dist/index.js");
/* harmony import */ var _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id"],
  components: {
    StripeCheckout: _vue_stripe_vue_stripe__WEBPACK_IMPORTED_MODULE_1__["StripeCheckout"]
  },
  data: function data() {
    return {
      carData: null,
      privacy: false,
      publishableKey: "pk_test_51L6Y73EIV3WPLa2S77VyiRjJYhLg60WrlK30R8ZDRn9X5hTnp6V6NGTwyyU7F4Eua9WNtIo4ExYvBRnZjojbG7J100NMpo5Hpb",
      loading: false,
      lineItems: [{
        price: "price_1LG2JvEIV3WPLa2ScLQYEIvk",
        // The id of the one-time price you created in your Stripe dashboard
        quantity: 1
      }]
    };
  },
  computed: {
    branch: function branch() {
      return +this.carData.production_year % 2 === 0;
    },
    successURL: function successURL() {
      var url = "".concat(window.location.origin, "/#/success/").concat(this.carData.vin.trim(), "-").concat(this.carData.odometer.trim());
      return url.replaceAll(" ", "");
    },
    cancelURL: function cancelURL() {
      return "".concat(window.location.origin, "/#/error");
    }
  },
  mounted: function mounted() {
    this.getCarData();
  },
  methods: {
    payNow: function payNow() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    getCarData: function getCarData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://vinfax.info/api/cars/".concat(this.id)).then(function (res) {
        _this.carData = res.data[0];
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SalesHistory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/SalesHistory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["cars"],
  methods: {
    branch: function branch(year) {
      return +year % 2 === 0;
    },
    refreshPage: function refreshPage() {
      window.location.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SimiliarLots.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/SimiliarLots.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_CarBox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/CarBox.vue */ "./resources/js/Components/CarBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id"],
  components: {
    CarBox: _Components_CarBox_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      carData: null
    };
  },
  mounted: function mounted() {
    this.getCarData();
  },
  methods: {
    getCarData: function getCarData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/similiar-cars").then(function (res) {
        _this.carData = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Car.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_CarSlider_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/CarSlider.vue */ "./resources/js/Components/CarSlider.vue");
/* harmony import */ var _Components_SimiliarLots_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/SimiliarLots.vue */ "./resources/js/Components/SimiliarLots.vue");
/* harmony import */ var _Components_SalesHistory_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/SalesHistory.vue */ "./resources/js/Components/SalesHistory.vue");
/* harmony import */ var _Components_FiltersTop_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/FiltersTop.vue */ "./resources/js/Components/FiltersTop.vue");
/* harmony import */ var _Components_Claim_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Claim.vue */ "./resources/js/Components/Claim.vue");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vueperslides */ "./node_modules/vueperslides/dist/vueperslides.common.js");
/* harmony import */ var vueperslides__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vueperslides__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vueperslides/dist/vueperslides.css */ "./node_modules/vueperslides/dist/vueperslides.css");
/* harmony import */ var vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vueperslides_dist_vueperslides_css__WEBPACK_IMPORTED_MODULE_8__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id"],
  components: {
    CarSlider: _Components_CarSlider_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_7__["VueperSlides"],
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_7__["VueperSlide"],
    FiltersTop: _Components_FiltersTop_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SalesHistory: _Components_SalesHistory_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SimiliarLots: _Components_SimiliarLots_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Claim: _Components_Claim_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      carData: null,
      cars: null,
      currentImage: 0,
      slides: [],
      showModal: false
    };
  },
  computed: {
    branch: function branch() {
      return +this.carData.production_year % 2 === 0;
    },
    mobileView: function mobileView() {
      return window.innerWidth < 768 ? true : false;
    }
  },
  mounted: function mounted() {
    this.getCarData();
  },
  methods: {
    changeSlide: function changeSlide(idx) {
      this.currentImage = idx;
    },
    closeModal: function closeModal() {
      console.log("OKK");
    },
    getCarData: function getCarData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://vinfax.info/api/cars/".concat(this.id)).then(function (res) {
        _this.carData = res.data[0];

        _this.prepareImages();

        _this.getCarsData(res.data[0].vin);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    getCarsData: function getCarsData(vin) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://vinfax.info/api/cars-vin/".concat(vin)).then(function (res) {
        _this2.cars = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    checkIfImageExists: function checkIfImageExists(url, callback) {
      var img = new Image();
      img.src = url;

      if (img.complete) {
        callback(true);
      } else {
        img.onload = function () {
          callback(true);
        };

        img.onerror = function () {
          callback(false);
        };
      }
    },
    prepareImages: function prepareImages() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var count, exists;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                count = 0;
                exists = true;

              case 2:
                if (!exists) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return new Promise(function (resolve) {
                  _this3.checkIfImageExists("https://phttt.vinfax.info/".concat(_this3.carData.vin, "-").concat(count, ".webp"), function (exists) {
                    if (exists) {
                      _this3.slides.push("https://phttt.vinfax.info/".concat(_this3.carData.vin, "-").concat(count, ".webp"));
                    } else {
                      if (_this3.slides.length === 0) {
                        console.log(_this3.slides);
                        _this3.slides = ["img/base-img.png", "img/base-img-2.png", "img/base-img-3.png"];
                        console.log(_this3.slides);
                      }
                    }

                    count++;
                    resolve(exists);
                  });
                });

              case 5:
                exists = _context.sent;
                _context.next = 2;
                break;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnails[data-v-49c6dccc] {\n  margin: auto;\n  max-width: 100%;\n  margin-top: 12px;\n}\n.thumbnails .vueperslide[data-v-49c6dccc] {\n  box-sizing: border-box;\n  border: 1px solid #fff;\n  transition: 0.3s ease-in-out;\n  opacity: 0.7;\n  cursor: pointer;\n  width: 158px !important;\n  height: 108px !important;\n}\n.vueperslides__arrow--prev[data-v-49c6dccc] {\n  left: -3rem !important;\n}\n.vueperslides__arrow--next[data-v-49c6dccc] {\n  right: -3rem !important;\n}\n.thumbnails .vueperslide--active[data-v-49c6dccc] {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\n  opacity: 1;\n  border-color: #000;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.modal-wrapper[data-v-67ba51fe] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  display: grid;\n  place-content: center;\n  backdrop-filter: blur(3px);\n  z-index: 200;\n}\n.modal-wrapper__content[data-v-67ba51fe] {\n  background: white;\n  border-radius: 6px;\n  padding: 20px;\n}\n.car__container__heading[data-v-67ba51fe] {\n  width: 99%;\n  margin: 20px 0;\n}\n.car__container__content[data-v-67ba51fe] {\n  display: flex;\n  flex-direction: column;\n  gap: 29px;\n}\n@media (min-width: 992px) {\n.car__container__content[data-v-67ba51fe] {\n    flex-direction: row;\n}\n}\n.car__container__content__images[data-v-67ba51fe] {\n  flex: 1;\n}\n@media (min-width: 992px) {\n.car__container__content__images[data-v-67ba51fe] {\n    flex: 3;\n}\n}\n.car__container__content__data[data-v-67ba51fe] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 21px;\n}\n@media (min-width: 992px) {\n.car__container__content__data[data-v-67ba51fe] {\n    width: unset;\n    min-width: 410px;\n}\n}\n.car__container__content__data .data__box[data-v-67ba51fe] {\n  padding: 20px !important;\n}\n.car__container__content__data .data__box__heading[data-v-67ba51fe] {\n  background: #f8f8f8;\n  display: flex;\n  gap: 16px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.car__container__content__data .data__box__heading img[data-v-67ba51fe] {\n  width: 27px;\n  height: 27px;\n}\n.car__container__content__data .data__box__heading p[data-v-67ba51fe] {\n  font-weight: 700;\n  font-size: 25px;\n  margin: 0;\n}\n.car__container__content__data .data__box__content h3[data-v-67ba51fe] {\n  font-weight: 700;\n  font-size: 33px;\n  line-height: 43px;\n  text-align: left;\n}\n.car__container__content__data .data__box__content .highlight[data-v-67ba51fe] {\n  background: #ffebb7;\n  border-radius: 3px;\n  width: fit-content;\n}\n.car__container__content__data .data__box__content .flex[data-v-67ba51fe] {\n  display: flex;\n  gap: 11px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.car__container__content__data .data__box__content .flex-base[data-v-67ba51fe] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);\n}\n.car__container__content__data .data__box__content .flex-base .light[data-v-67ba51fe] {\n  color: #818181;\n}\n.car__container__content__data .data__box__content .flex-base .strong[data-v-67ba51fe] {\n  color: black;\n}\n.car__container .card[data-v-67ba51fe] {\n  background: #ffffff;\n  border: 1px solid #ecf1f9;\n  padding: 10px;\n  border-radius: 8px;\n}\n.car__container .card .badge[data-v-67ba51fe] {\n  width: fit-content;\n  background: #1882ff;\n  border-radius: 3px;\n  font-size: 16px;\n  line-height: 21px;\n  text-align: center;\n  color: #ffffff;\n  padding: 4px 5px;\n  margin-bottom: 20pxgfhngh;\n}\n.car__container .card .flex-middle[data-v-67ba51fe] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.car__container .card .flex-last[data-v-67ba51fe] {\n  padding: 30px;\n  background: #ecf1f9;\n  width: unset;\n}\n.car__container .card .flex-last h5[data-v-67ba51fe] {\n  font-size: 1.4rem;\n  margin: 6px 0;\n}\n.car__container .card .flex-main[data-v-67ba51fe] {\n  justify-content: space-between;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.car__container .card .flex-main img[data-v-67ba51fe] {\n  width: 320px;\n}\n.car__container .card .flex-main button[data-v-67ba51fe] {\n  background: #ffcd1e;\n  border-radius: 5px;\n  color: white;\n  width: fit-content;\n  height: fit-content;\n  border: none;\n  outline: none;\n  margin: auto 0;\n  cursor: pointer !important;\n}\n.car__container .card .flex-main button[data-v-67ba51fe]:disabled {\n  opacity: 0.7;\n  cursor: auto !important;\n}\n.car__container .card h1[data-v-67ba51fe] {\n  font-size: 25px;\n  line-height: 32px;\n  color: #000000;\n  margin-right: 24px;\n}\n.car__container .card h2[data-v-67ba51fe] {\n  margin: 0 30px;\n  font-size: 16px;\n  line-height: 21px;\n  margin-left: 0;\n}\n.car__container .card h2 span[data-v-67ba51fe] {\n  color: #818181;\n}\n.card-top--no-padding[data-v-67ba51fe] {\n  padding: 0;\n}\n.card-top ul[data-v-67ba51fe] {\n  list-style: none;\n  /* Remove default bullets */\n}\n.card-top p[data-v-67ba51fe],\n.card-top h2[data-v-67ba51fe],\n.card-top h3[data-v-67ba51fe],\n.card-top ul[data-v-67ba51fe] {\n  text-align: left;\n}\n@media (min-width: 992px) {\n.card-top p[data-v-67ba51fe],\n.card-top h2[data-v-67ba51fe],\n.card-top h3[data-v-67ba51fe],\n.card-top ul[data-v-67ba51fe] {\n    padding-left: 90px;\n}\n}\n.card-top .flex[data-v-67ba51fe] {\n  display: flex;\n  gap: 13px;\n}\n@media (min-width: 992px) {\n.card-top .flex[data-v-67ba51fe] {\n    padding-left: 90px;\n}\n}\n.card-top input[data-v-67ba51fe] {\n  background: #ffffff;\n  /* szary napisy */\n  border: 1px solid #818181;\n  border-radius: 2px;\n}\n.card-top ul li[data-v-67ba51fe]::before {\n  content: \"\\2022\";\n  /* Add content: \\2022 is the CSS Code/unicode for a bullet */\n  color: #243e97;\n  font-weight: bold;\n  /* If you want it to be bold */\n  display: inline-block;\n  /* Needed to add space between the bullet and the text */\n  width: 1em;\n  /* Also needed for space (tweak if needed) */\n  margin-left: -1em;\n  /* Also needed for space (tweak if needed) */\n}\n.card-top .heading[data-v-67ba51fe] {\n  background: #f8f8f8;\n  padding: 22px 90px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-top .heading h2[data-v-67ba51fe] {\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 25px;\n  line-height: 32px;\n  text-align: left;\n  color: #000000;\n}\n.card-top .heading button[data-v-67ba51fe] {\n  background: linear-gradient(89.98deg, #102672 0.01%, #384e9b 99.98%);\n  color: white;\n  width: 30px;\n  height: 30px;\n  display: grid;\n  place-content: center;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div h2[data-v-1c6f549a] {\n  text-align: left;\n}\n.sales-history[data-v-1c6f549a] {\n  margin-bottom: 65px;\n}\n.sales-history table[data-v-1c6f549a] {\n  width: 100%;\n  text-align: left;\n}\n.sales-history table th[data-v-1c6f549a],\n.sales-history table td[data-v-1c6f549a] {\n  padding: 11px 9px;\n  font-size: 16px;\n}\n.sales-history table tr[data-v-1c6f549a] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.sales-history table td.bold[data-v-1c6f549a] {\n  font-weight: bold;\n}\n.sales-history table td.branch span[data-v-1c6f549a] {\n  background: #1882ff;\n  border-radius: 3px;\n  color: white;\n  padding: 5px;\n}\n.sales-history table td.branch span.red[data-v-1c6f549a] {\n  background: red;\n}\n.sales-history table td.status span[data-v-1c6f549a] {\n  width: 89px;\n  height: 25px;\n  border: 1px solid #597bd5;\n  color: #597bd5;\n  border-radius: 3px;\n  padding: 5px;\n}\n.sales-history table td.action a[data-v-1c6f549a] {\n  font-size: 16px;\n  line-height: 21px;\n  color: black;\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  text-decoration: none;\n}\n.sales-history table th[data-v-1c6f549a] {\n  background: #f8f8f8;\n}\n.sales-history table th td[data-v-1c6f549a] {\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div h2[data-v-2cf98be6] {\n  text-align: left;\n}\n.similiar-lots[data-v-2cf98be6] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n}\n@media (min-width: 576px) {\n.similiar-lots[data-v-2cf98be6] {\n    justify-content: unset;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumbs[data-v-5f190dbb] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  margin-top: 43px;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.breadcrumbs .breadcrumb[data-v-5f190dbb] {\n  font-family: \"PT Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 21px;\n  display: flex;\n  gap: 4px;\n  color: #818181;\n}\n.breadcrumbs .breadcrumb--blue[data-v-5f190dbb] {\n  color: #243e97;\n}\n.breadcrumbs .breadcrumb--bold[data-v-5f190dbb] {\n  font-weight: bold;\n}\n.thumbnails[data-v-5f190dbb] {\n  margin: auto;\n  max-width: 100%;\n  margin-top: 12px;\n}\n.thumbnails img[data-v-5f190dbb] {\n  cursor: pointer;\n}\n.thumbnails .vueperslide[data-v-5f190dbb] {\n  box-sizing: border-box;\n  border: 1px solid #fff;\n  transition: 0.3s ease-in-out;\n  opacity: 0.7;\n  cursor: pointer;\n  width: 158px !important;\n  height: 108px !important;\n}\n.vueperslides__arrow--prev[data-v-5f190dbb] {\n  left: -3rem !important;\n}\n.vueperslides__arrow--next[data-v-5f190dbb] {\n  right: -3rem !important;\n}\n.thumbnails .vueperslide--active[data-v-5f190dbb] {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\n  opacity: 1;\n  border-color: #000;\n}\n.car__container__heading[data-v-5f190dbb] {\n  width: 100%;\n  margin: 20px 0;\n}\n.car__container__content[data-v-5f190dbb] {\n  display: flex;\n  flex-direction: column;\n  gap: 29px;\n}\n@media (min-width: 992px) {\n.car__container__content[data-v-5f190dbb] {\n    flex-direction: row;\n}\n}\n.car__container__content__images[data-v-5f190dbb] {\n  flex: 1;\n}\n.car__container__content__images .main[data-v-5f190dbb] {\n  position: relative;\n}\n.car__container__content__images .main button[data-v-5f190dbb] {\n  height: 99%;\n  width: 50px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: grid;\n  place-content: center;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: linear-gradient(90.88deg, #000000 0.72%, rgba(0, 0, 0, 0) 99.21%);\n}\n.car__container__content__images .main button svg[data-v-5f190dbb] {\n  width: 0.8rem;\n  fill: none;\n  stroke: white;\n  transform: rotate(-180deg);\n}\n.car__container__content__images .main button[data-v-5f190dbb]:disabled {\n  cursor: not-allowed;\n}\n.car__container__content__images .main button:disabled svg[data-v-5f190dbb] {\n  opacity: 0.8;\n}\n.car__container__content__images .main button.next[data-v-5f190dbb] {\n  right: 0;\n  left: unset;\n  transform: rotate(-180deg);\n}\n.car__container__content__images .main button.next svg[data-v-5f190dbb] {\n  transform: rotate(-180deg);\n}\n.car__container__content__images .main img[data-v-5f190dbb] {\n  width: 100%;\n  max-width: 863px;\n}\n@media (min-width: 1200px) {\n.car__container__content__images .main img[data-v-5f190dbb] {\n    height: 579px;\n}\n}\n.car__container__content__images .thumbnails[data-v-5f190dbb] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.car__container__content__images .thumbnails img[data-v-5f190dbb] {\n  width: 156px;\n  height: 106px;\n}\n@media (min-width: 992px) {\n.car__container__content__images[data-v-5f190dbb] {\n    flex: 3;\n}\n}\n.car__container__content__data[data-v-5f190dbb] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 21px;\n}\n@media (min-width: 992px) {\n.car__container__content__data[data-v-5f190dbb] {\n    width: unset;\n    min-width: 410px;\n}\n}\n.car__container__content__data .data__box__heading[data-v-5f190dbb] {\n  background: #f8f8f8;\n  display: flex;\n  gap: 16px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.car__container__content__data .data__box__heading img[data-v-5f190dbb] {\n  width: 27px;\n  height: 27px;\n}\n.car__container__content__data .data__box__heading p[data-v-5f190dbb] {\n  font-weight: 700;\n  font-size: 24px;\n  margin: 0;\n}\n.car__container__content__data .data__box__content h3[data-v-5f190dbb] {\n  font-weight: 700;\n  font-size: 33px;\n  line-height: 43px;\n  text-align: left;\n  margin: 16px 0;\n}\n.car__container__content__data .data__box__content .highlight[data-v-5f190dbb] {\n  background: #ffebb7;\n  border-radius: 3px;\n  width: fit-content;\n  margin: 4px 0;\n  padding: 3px 25px;\n}\n.car__container__content__data .data__box__content .flex[data-v-5f190dbb] {\n  display: flex;\n  gap: 11px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.car__container__content__data .data__box__content .flex-base[data-v-5f190dbb] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);\n}\n.car__container__content__data .data__box__content .flex-base--no-border[data-v-5f190dbb] {\n  border-bottom: unset;\n}\n.car__container__content__data .data__box__content .flex-base p[data-v-5f190dbb] {\n  margin: 6px 0;\n  font-size: 15px;\n}\n.car__container__content__data .data__box__content .flex-base .light[data-v-5f190dbb] {\n  color: #818181;\n}\n.car__container__content__data .data__box__content .flex-base .strong[data-v-5f190dbb] {\n  color: black;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.car__container__content__data .data__box__content .flex-base .strong .badge[data-v-5f190dbb] {\n  color: gray;\n  border: 1px solid gray;\n  margin: 2px 0;\n}\n.car__container .card[data-v-5f190dbb] {\n  background: #ffffff;\n  border: 1px solid #ecf1f9;\n  padding: 10px;\n  border-radius: 8px;\n  width: calc(100% - 20px);\n}\n.car__container .card .flex-main[data-v-5f190dbb] {\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.car__container .card .flex-main button[data-v-5f190dbb] {\n  background: #ffcd1e;\n  border-radius: 5px;\n  color: white;\n  width: fit-content;\n  height: fit-content;\n  border: none;\n  outline: none;\n  margin: auto 0;\n  padding: 5px;\n  text-decoration: none;\n  cursor: pointer !important;\n}\n.car__container .card h1[data-v-5f190dbb] {\n  font-size: 25px;\n  line-height: 32px;\n  color: #000000;\n  margin-right: 24px;\n}\n.car__container .card h2[data-v-5f190dbb] {\n  font-size: 16px;\n  line-height: 21px;\n}\n.car__container .card h2[data-v-5f190dbb]:first-of-type {\n  margin-right: 65px;\n}\n.car__container .card h2 span[data-v-5f190dbb] {\n  color: #818181;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CarSlider.vue?vue&type=template&id=49c6dccc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/CarSlider.vue?vue&type=template&id=49c6dccc&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vueper-slides",
        {
          ref: "vueperslides1",
          attrs: {
            touchable: true,
            fade: "",
            autoplay: false,
            bullets: false,
            arrows: _vm.mobileView,
            "fixed-height": "400px"
          },
          on: {
            slide: function($event) {
              return _vm.$refs.vueperslides2.goToSlide(
                $event.currentSlide.index,
                {
                  emit: false
                }
              )
            }
          }
        },
        _vm._l(_vm.slides, function(slide, i) {
          return _c("vueper-slide", {
            key: i,
            attrs: { image: "https://vinfax.info/img/base-img.png" }
          })
        }),
        1
      ),
      _vm._v(" "),
      !_vm.mobileView
        ? _c(
            "vueper-slides",
            {
              ref: "vueperslides2",
              staticClass: "no-shadow thumbnails",
              attrs: {
                "visible-slides": _vm.slides.length,
                "fixed-height": "75px",
                bullets: false,
                touchable: false,
                gap: 2.5,
                arrows: false
              },
              on: {
                slide: function($event) {
                  return _vm.$refs.vueperslides1.goToSlide(
                    $event.currentSlide.index,
                    {
                      emit: false
                    }
                  )
                }
              }
            },
            _vm._l(_vm.slides, function(slide, i) {
              return _c("vueper-slide", {
                key: i,
                attrs: { image: "https://vinfax.info/img/base-img.png" },
                nativeOn: {
                  click: function($event) {
                    return _vm.$refs.vueperslides2.goToSlide(i)
                  }
                }
              })
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.slides, function(img) {
        return _c("img", { attrs: { src: img, alt: "" } })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Claim.vue?vue&type=template&id=67ba51fe&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Claim.vue?vue&type=template&id=67ba51fe&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.carData
    ? _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-wrapper__content" }, [
          _c("div", { staticClass: "card-top card-top--no-padding" }, [
            _c("div", { staticClass: "heading" }, [
              _c("h2", [_vm._v("CLAIM LOT")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      return _vm.$emit("close")
                    }
                  }
                },
                [_c("span", [_vm._v("✖")])]
              )
            ]),
            _vm._v(" "),
            !_vm.privacy
              ? _c("div", [
                  _c("p", [
                    _vm._v(
                      "\n          We do respect privacy rights of every person. Therefore if you do\n          not want to show the lot you have purchased on our website, you can\n          hide it.\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("h3", [
                    _vm._v("PLEASE BE AWARE THAT IT IS PROHIBITED TO:")
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.privacy,
                          expression: "privacy"
                        }
                      ],
                      attrs: { id: "privacy", type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.privacy)
                          ? _vm._i(_vm.privacy, null) > -1
                          : _vm.privacy
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.privacy,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.privacy = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.privacy = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.privacy = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "privacy" } }, [
                      _vm._v(
                        "I have read and accept the limitations stated above"
                      )
                    ])
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.privacy
            ? _c(
                "div",
                { staticClass: "car__container__heading card" },
                [
                  _c("stripe-checkout", {
                    ref: "checkoutRef",
                    attrs: {
                      mode: "payment",
                      pk: _vm.publishableKey,
                      "line-items": _vm.lineItems,
                      "success-url": _vm.successURL,
                      "cancel-url": _vm.cancelURL
                    },
                    on: {
                      loading: function(v) {
                        return (_vm.loading = v)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-main" }, [
                    _c("div", { staticClass: "flex" }, [
                      _c("img", {
                        attrs: {
                          src:
                            "https://phttt.vinfax.info/" +
                            _vm.carData.vin +
                            "-0.webp",
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c("div", { staticClass: "flex-middle" }, [
                        _c(
                          "div",
                          {
                            staticClass: "badge",
                            class: { red: _vm.carData.site == "iaai" }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.carData.site) +
                                "\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("h1", [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.carData.production_year) +
                              " " +
                              _vm._s(_vm.carData.marka) +
                              "\n              " +
                              _vm._s(_vm.carData.model) +
                              "\n            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("h2", [_vm._v("VIN: " + _vm._s(_vm.carData.vin))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex" }, [
                        _c("h2", [
                          _c("span", [_vm._v("Lot number:")]),
                          _vm._v(" " + _vm._s(_vm.carData.stock))
                        ]),
                        _vm._v(" "),
                        _vm._m(1),
                        _vm._v(" "),
                        _c("h2", [
                          _c("span", [_vm._v("Mileage: ")]),
                          _vm._v(" " + _vm._s(_vm.carData.odometer))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "flex-last" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.carData.createdate) +
                          "\n          "
                      ),
                      _c("h3", [_vm._v("Final bid")]),
                      _vm._v(" "),
                      _c("h5", [_vm._v("$" + _vm._s(_vm.carData.final_bid))]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          attrs: { disabled: !_vm.privacy },
                          on: { click: _vm.payNow }
                        },
                        [_vm._v("CLAIM LOT")]
                      )
                    ])
                  ])
                ],
                1
              )
            : _vm._e()
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v("Hide lot if you want to avoid the right tax calculation;")
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n            Hide lot for hiding damage and odometer infromation from the\n            future buyers;\n          "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n            Hide lot for misinformation, misrepresentation, fraud or other\n            illegal activity;\n          "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_c("span", [_vm._v("Location: ")]), _vm._v(" No data")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SalesHistory.vue?vue&type=template&id=1c6f549a&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/SalesHistory.vue?vue&type=template&id=1c6f549a&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Sales history")]),
    _vm._v(" "),
    _c("div", { staticClass: "sales-history" }, [
      _c("table", { staticClass: "styled-table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          [
            _vm._l(_vm.cars, function(car) {
              return [
                _c("tr", [
                  _c("td", { staticClass: "branch" }, [
                    _c(
                      "span",
                      {
                        staticClass: "badge",
                        class: {
                          red: _vm.carData.site == "iaai"(car.production_year)
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(car.site) +
                            "\n              "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n              " +
                        _vm._s(car.createdate) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n              " +
                        _vm._s(car.run_number) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "bold" }, [
                    _vm._v(_vm._s(car.final_bid) + "$")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "\n              " +
                        _vm._s(car.odometer) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(1, true),
                  _vm._v(" "),
                  _c("td", [_vm._v("Non-Insurence Company")]),
                  _vm._v(" "),
                  _c("td", { staticClass: "action" }, [
                    _c(
                      "div",
                      {
                        staticClass: "overlay-link",
                        on: { click: _vm.refreshPage }
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "black",
                            attrs: { to: "/car/" + car.id }
                          },
                          [
                            _vm._v("More details "),
                            _c("img", {
                              attrs: { src: "img/arrow.svg", alt: "" }
                            })
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ]
            })
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Auction")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Lot #")]),
        _vm._v(" "),
        _c("th", [_vm._v("Final bid")]),
        _vm._v(" "),
        _c("th", [_vm._v("Odometer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Seller")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "status" }, [
      _c("span", [_vm._v("Not sold")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SimiliarLots.vue?vue&type=template&id=2cf98be6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/SimiliarLots.vue?vue&type=template&id=2cf98be6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", [_vm._v("Similiar lots")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "similiar-lots" },
      [
        _vm._l(_vm.carData, function(car) {
          return [
            _c(
              "div",
              { staticClass: "lot" },
              [
                _c("CarBox", {
                  attrs: { carData: car, small: true, noBadge: true }
                })
              ],
              1
            )
          ]
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=template&id=5f190dbb&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Car.vue?vue&type=template&id=5f190dbb&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.carData
    ? _c(
        "div",
        { staticClass: "car__container container" },
        [
          _c("FiltersTop"),
          _vm._v(" "),
          _vm.showModal
            ? _c("Claim", {
                attrs: { id: _vm.carData.id },
                on: {
                  close: function($event) {
                    _vm.showModal = !_vm.showModal
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "breadcrumbs" }, [
            _c("div", { staticClass: "breadcrumb" }, [_vm._v("Search")]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb breadcrumb--blue" }, [
              _vm._v(">")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb" }, [_vm._v("Cars")]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb breadcrumb--blue" }, [
              _vm._v(">")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb" }, [
              _vm._v(_vm._s(_vm.carData.marka))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb breadcrumb--blue" }, [
              _vm._v(">")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb" }, [
              _vm._v(_vm._s(_vm.carData.model))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb breadcrumb--blue" }, [
              _vm._v(">")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb" }, [
              _vm._v(_vm._s(_vm.carData.model))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb breadcrumb--blue" }, [
              _vm._v(">")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "breadcrumb breadcrumb--bold" }, [
              _c("span", [_vm._v(_vm._s(_vm.carData.production_year))]),
              _c("span", [_vm._v(_vm._s(_vm.carData.marka))]),
              _c("span", [_vm._v(_vm._s(_vm.carData.model))])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "car__container__heading card" }, [
            _c("div", { staticClass: "flex flex-main" }, [
              _c("div", [
                _c("div", { staticClass: "flex" }, [
                  _c("h1", [
                    _vm.carData.production_year
                      ? _c("span", [
                          _vm._v(_vm._s(_vm.carData.production_year))
                        ])
                      : _vm._e(),
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.carData.marka) +
                        "\n            " +
                        _vm._s(_vm.carData.model) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "badge",
                      class: { red: _vm.carData.site == "iaai" }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.carData.site) +
                          "\n          "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex" }, [
                  _c("h2", [
                    _c("span", [_vm._v("Lot number:")]),
                    _vm._v(" " + _vm._s(_vm.carData.stock))
                  ]),
                  _vm._v(" "),
                  _c("h2", [
                    _c("span", [_vm._v("VIN: ")]),
                    _vm._v(" " + _vm._s(_vm.carData.vin))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      _vm.showModal = !_vm.showModal
                    }
                  }
                },
                [_vm._v("CLAIM LOT")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "car__container__content" }, [
            _c("div", { staticClass: "car__container__content__images" }, [
              _c("div", { staticClass: "main" }, [
                _c(
                  "button",
                  {
                    attrs: { disabled: _vm.currentImage === 0 },
                    on: {
                      click: function($event) {
                        _vm.currentImage--
                      }
                    }
                  },
                  [
                    _c("svg", { attrs: { viewBox: "0 0 9 18" } }, [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          d: "m1 1 l7 8 -7 8"
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("img", {
                  attrs: { src: _vm.slides[_vm.currentImage], alt: "" }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "next",
                    attrs: {
                      disabled: _vm.currentImage === _vm.slides.length - 1
                    },
                    on: {
                      click: function($event) {
                        _vm.currentImage++
                      }
                    }
                  },
                  [
                    _c("svg", { attrs: { viewBox: "0 0 9 18" } }, [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          d: "m1 1 l7 8 -7 8"
                        }
                      })
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "thumbnails" },
                _vm._l(_vm.slides, function(image, idx) {
                  return _c("img", {
                    attrs: { src: image, alt: "" },
                    on: {
                      click: function($event) {
                        return _vm.changeSlide(idx)
                      }
                    }
                  })
                }),
                0
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "car__container__content__data" }, [
              _c("div", { staticClass: "data__box card" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "data__box__content" }, [
                  _c("h3", [
                    _vm._v("Final bid: $" + _vm._s(_vm.carData.final_bid))
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex" }, [
                    _c("p", [_vm._v("Auction:")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "badge",
                        class: { red: _vm.carData.site == "iaai" }
                      },
                      [
                        _vm._v(
                          "\n              " +
                            _vm._s(_vm.carData.site) +
                            "\n            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "badge badge--outline" }, [
                      _vm._v("Not Sold")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Lot number")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.stock))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Date of sell")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.sold_date))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base flex-base--no-border" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Documents")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.sold_date))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "data__box card" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "data__box__content" }, [
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("VIN")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.vin))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Year")]),
                    _vm._v(" "),
                    _vm.carData.production_year
                      ? _c("p", { staticClass: "strong" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.carData.production_year) +
                              "\n            "
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Mileage")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "strong" }, [
                      _c("div", { staticClass: "badge badge--outline" }, [
                        _vm._v("Actual")
                      ]),
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.carData.odometer) +
                          "\n            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Engine")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.engine))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Transmission")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.transmission))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Body color")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.body))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Drive")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.drive_line_type))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base flex-base--no-border" }, [
                    _c("p", { staticClass: "light" }, [_vm._v("Fuel")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.fuel))
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "data__box card" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "data__box__content" }, [
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [
                      _vm._v("Estimated Retail value")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.estimated_retail_value))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base flex-base--no-border" }, [
                    _c("p", { staticClass: "light" }, [
                      _vm._v("Estimated repair cost")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.estimated_repair_cost))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [
                      _vm._v("Primary damage")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.primary_damage))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-base" }, [
                    _c("p", { staticClass: "light" }, [
                      _vm._v("Secondary damage")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "strong" }, [
                      _vm._v(_vm._s(_vm.carData.secondary_damage))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "sales__history" },
            [_c("SalesHistory", { attrs: { cars: _vm.cars } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "similiar__lots" }, [_c("SimiliarLots")], 1)
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "data__box__heading" }, [
      _c("img", { attrs: { src: "/img/Sale-details.svg", alt: "" } }),
      _vm._v(" "),
      _c("p", [_vm._v("Sale Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "highlight" }, [
      _vm._v("Seller: "),
      _c("b", [_vm._v("Non-Insurence Company")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "data__box__heading" }, [
      _c("img", { attrs: { src: "/img/Vehicle-details.svg", alt: "" } }),
      _vm._v(" "),
      _c("p", [_vm._v("Vehicle Details")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "data__box__heading" }, [
      _c("img", { attrs: { src: "/img/Condition-details.svg", alt: "" } }),
      _vm._v(" "),
      _c("p", [_vm._v("Condition Details")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/CarSlider.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/CarSlider.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarSlider_vue_vue_type_template_id_49c6dccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarSlider.vue?vue&type=template&id=49c6dccc&scoped=true& */ "./resources/js/Components/CarSlider.vue?vue&type=template&id=49c6dccc&scoped=true&");
/* harmony import */ var _CarSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarSlider.vue?vue&type=script&lang=js& */ "./resources/js/Components/CarSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CarSlider_vue_vue_type_style_index_0_id_49c6dccc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true& */ "./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CarSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarSlider_vue_vue_type_template_id_49c6dccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarSlider_vue_vue_type_template_id_49c6dccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49c6dccc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/CarSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/CarSlider.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/CarSlider.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CarSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CarSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_style_index_0_id_49c6dccc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CarSlider.vue?vue&type=style&index=0&id=49c6dccc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_style_index_0_id_49c6dccc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_style_index_0_id_49c6dccc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_style_index_0_id_49c6dccc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_style_index_0_id_49c6dccc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Components/CarSlider.vue?vue&type=template&id=49c6dccc&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Components/CarSlider.vue?vue&type=template&id=49c6dccc&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_template_id_49c6dccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CarSlider.vue?vue&type=template&id=49c6dccc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/CarSlider.vue?vue&type=template&id=49c6dccc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_template_id_49c6dccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarSlider_vue_vue_type_template_id_49c6dccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Claim.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Claim.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Claim_vue_vue_type_template_id_67ba51fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Claim.vue?vue&type=template&id=67ba51fe&scoped=true& */ "./resources/js/Components/Claim.vue?vue&type=template&id=67ba51fe&scoped=true&");
/* harmony import */ var _Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Claim.vue?vue&type=script&lang=js& */ "./resources/js/Components/Claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Claim_vue_vue_type_style_index_0_id_67ba51fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true& */ "./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Claim_vue_vue_type_template_id_67ba51fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Claim_vue_vue_type_template_id_67ba51fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "67ba51fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Claim.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Claim.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Components/Claim.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_67ba51fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Claim.vue?vue&type=style&index=0&id=67ba51fe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_67ba51fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_67ba51fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_67ba51fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_67ba51fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Components/Claim.vue?vue&type=template&id=67ba51fe&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Components/Claim.vue?vue&type=template&id=67ba51fe&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_67ba51fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=template&id=67ba51fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Claim.vue?vue&type=template&id=67ba51fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_67ba51fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_67ba51fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/SalesHistory.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/SalesHistory.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesHistory_vue_vue_type_template_id_1c6f549a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesHistory.vue?vue&type=template&id=1c6f549a&scoped=true& */ "./resources/js/Components/SalesHistory.vue?vue&type=template&id=1c6f549a&scoped=true&");
/* harmony import */ var _SalesHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesHistory.vue?vue&type=script&lang=js& */ "./resources/js/Components/SalesHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SalesHistory_vue_vue_type_style_index_0_id_1c6f549a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true& */ "./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SalesHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesHistory_vue_vue_type_template_id_1c6f549a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesHistory_vue_vue_type_template_id_1c6f549a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c6f549a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/SalesHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/SalesHistory.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/SalesHistory.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SalesHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_style_index_0_id_1c6f549a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SalesHistory.vue?vue&type=style&index=0&id=1c6f549a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_style_index_0_id_1c6f549a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_style_index_0_id_1c6f549a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_style_index_0_id_1c6f549a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_style_index_0_id_1c6f549a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Components/SalesHistory.vue?vue&type=template&id=1c6f549a&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/SalesHistory.vue?vue&type=template&id=1c6f549a&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_template_id_1c6f549a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SalesHistory.vue?vue&type=template&id=1c6f549a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SalesHistory.vue?vue&type=template&id=1c6f549a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_template_id_1c6f549a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesHistory_vue_vue_type_template_id_1c6f549a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/SimiliarLots.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/SimiliarLots.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimiliarLots_vue_vue_type_template_id_2cf98be6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimiliarLots.vue?vue&type=template&id=2cf98be6&scoped=true& */ "./resources/js/Components/SimiliarLots.vue?vue&type=template&id=2cf98be6&scoped=true&");
/* harmony import */ var _SimiliarLots_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimiliarLots.vue?vue&type=script&lang=js& */ "./resources/js/Components/SimiliarLots.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SimiliarLots_vue_vue_type_style_index_0_id_2cf98be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true& */ "./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SimiliarLots_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimiliarLots_vue_vue_type_template_id_2cf98be6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SimiliarLots_vue_vue_type_template_id_2cf98be6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2cf98be6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/SimiliarLots.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/SimiliarLots.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/SimiliarLots.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SimiliarLots.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SimiliarLots.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_style_index_0_id_2cf98be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SimiliarLots.vue?vue&type=style&index=0&id=2cf98be6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_style_index_0_id_2cf98be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_style_index_0_id_2cf98be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_style_index_0_id_2cf98be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_style_index_0_id_2cf98be6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Components/SimiliarLots.vue?vue&type=template&id=2cf98be6&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/SimiliarLots.vue?vue&type=template&id=2cf98be6&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_template_id_2cf98be6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SimiliarLots.vue?vue&type=template&id=2cf98be6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/SimiliarLots.vue?vue&type=template&id=2cf98be6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_template_id_2cf98be6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimiliarLots_vue_vue_type_template_id_2cf98be6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Car.vue":
/*!************************************!*\
  !*** ./resources/js/Pages/Car.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Car_vue_vue_type_template_id_5f190dbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car.vue?vue&type=template&id=5f190dbb&scoped=true& */ "./resources/js/Pages/Car.vue?vue&type=template&id=5f190dbb&scoped=true&");
/* harmony import */ var _Car_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Car.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Car.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Car_vue_vue_type_style_index_0_id_5f190dbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true& */ "./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Car_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Car_vue_vue_type_template_id_5f190dbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Car_vue_vue_type_template_id_5f190dbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f190dbb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Car.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Car.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Car.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Car.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_style_index_0_id_5f190dbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_style_index_0_id_5f190dbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_style_index_0_id_5f190dbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_style_index_0_id_5f190dbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_style_index_0_id_5f190dbb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Car.vue?vue&type=template&id=5f190dbb&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Car.vue?vue&type=template&id=5f190dbb&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_template_id_5f190dbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Car.vue?vue&type=template&id=5f190dbb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=template&id=5f190dbb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_template_id_5f190dbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Car_vue_vue_type_template_id_5f190dbb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);