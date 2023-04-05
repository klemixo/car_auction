(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueperSlides: vueperslides__WEBPACK_IMPORTED_MODULE_0__["VueperSlides"],
    VueperSlide: vueperslides__WEBPACK_IMPORTED_MODULE_0__["VueperSlide"]
  },
  props: ['slides'],
  computed: {
    mobileView: function mobileView() {
      return window.innerWidth < 768 ? true : false;
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_CarSlider_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/CarSlider.vue */ "./resources/js/Components/CarSlider.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CarSlider: _Components_CarSlider_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      carData: null
    };
  },
  computed: {
    slides: function slides() {
      return ["img/base-img.png", "img/base-img-2.png", "img/base-img-3.png", "img/base-img-3.png", "img/base-img-3.png", "img/base-img-3.png"];
    }
  },
  mounted: function mounted() {
    this.getCarData();
  },
  methods: {
    getCarData: function getCarData() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/cars/".concat(this.id)).then(function (res) {
        _this.carData = res.data[0];
      })["catch"](function (err) {
        console.log(err);
      });
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Car.vue?vue&type=style&index=0&id=5f190dbb&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".car__container__heading[data-v-5f190dbb] {\n  width: 100%;\n  margin: 20px 0;\n}\n.car__container__content[data-v-5f190dbb] {\n  display: flex;\n  flex-direction: column;\n  gap: 29px;\n}\n@media (min-width: 992px) {\n.car__container__content[data-v-5f190dbb] {\n    flex-direction: row;\n}\n}\n.car__container__content__images[data-v-5f190dbb] {\n  flex: 1;\n}\n@media (min-width: 992px) {\n.car__container__content__images[data-v-5f190dbb] {\n    flex: 3;\n}\n}\n.car__container__content__data[data-v-5f190dbb] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 21px;\n}\n@media (min-width: 992px) {\n.car__container__content__data[data-v-5f190dbb] {\n    width: unset;\n    min-width: 410px;\n}\n}\n.car__container__content__data .data__box[data-v-5f190dbb] {\n  padding: 20px !important;\n}\n.car__container__content__data .data__box__heading[data-v-5f190dbb] {\n  background: #F8F8F8;\n  display: flex;\n  gap: 16px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.car__container__content__data .data__box__heading img[data-v-5f190dbb] {\n  width: 27px;\n  height: 27px;\n}\n.car__container__content__data .data__box__heading p[data-v-5f190dbb] {\n  font-weight: 700;\n  font-size: 25px;\n  margin: 0;\n}\n.car__container__content__data .data__box__content h3[data-v-5f190dbb] {\n  font-weight: 700;\n  font-size: 33px;\n  line-height: 43px;\n  text-align: left;\n}\n.car__container__content__data .data__box__content .highlight[data-v-5f190dbb] {\n  background: #FFEBB7;\n  border-radius: 3px;\n  width: fit-content;\n}\n.car__container__content__data .data__box__content .flex[data-v-5f190dbb] {\n  display: flex;\n  gap: 11px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.car__container__content__data .data__box__content .flex-base[data-v-5f190dbb] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);\n}\n.car__container__content__data .data__box__content .flex-base .light[data-v-5f190dbb] {\n  color: #818181;\n}\n.car__container__content__data .data__box__content .flex-base .strong[data-v-5f190dbb] {\n  color: black;\n}\n.car__container .card[data-v-5f190dbb] {\n  background: #FFFFFF;\n  border: 1px solid #ECF1F9;\n  padding: 10px;\n  border-radius: 8px;\n}\n.car__container .card .flex-main[data-v-5f190dbb] {\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.car__container .card .flex-main a[data-v-5f190dbb] {\n  background: #FFCD1E;\n  border-radius: 5px;\n  color: white;\n  width: fit-content;\n  height: fit-content;\n  border: none;\n  outline: none;\n  margin: auto 0;\n  padding: 5px;\n  text-decoration: none;\n}\n.car__container .card h1[data-v-5f190dbb] {\n  font-size: 25px;\n  line-height: 32px;\n  color: #000000;\n  margin-right: 24px;\n}\n.car__container .card h2[data-v-5f190dbb] {\n  font-size: 16px;\n  line-height: 21px;\n}\n.car__container .card h2[data-v-5f190dbb]:first-of-type {\n  margin-right: 65px;\n}\n.car__container .card h2 span[data-v-5f190dbb] {\n  color: #818181;\n}", ""]);

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
                { emit: false }
              )
            }
          }
        },
        _vm._l(_vm.slides, function(slide, i) {
          return _c("vueper-slide", {
            key: i,
            attrs: { image: "http://54.36.172.231/img/base-img.png" }
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
                    { emit: false }
                  )
                }
              }
            },
            _vm._l(_vm.slides, function(slide, i) {
              return _c("vueper-slide", {
                key: i,
                attrs: { image: "http://54.36.172.231/img/base-img.png" },
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
  return _c("div", { staticClass: "car__container container" }, [
    _c("div", { staticClass: "car__container__heading card" }, [
      _c(
        "div",
        { staticClass: "flex flex-main" },
        [
          _c("div", [
            _c("div", { staticClass: "flex" }, [
              _c("h1", [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.carData.production_year) +
                    " " +
                    _vm._s(_vm.carData.marka) +
                    " " +
                    _vm._s(_vm.carData.model) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "badge" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.carData.selling_branch) +
                    "\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex" }, [
              _c("h2", [
                _c("span", [_vm._v("Lot number:")]),
                _vm._v(
                  " " +
                    _vm._s(_vm.carData.run_number) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c("h2", [
                _c("span", [_vm._v("VIN: ")]),
                _vm._v(" " + _vm._s(_vm.carData.vin) + "\n                    ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: { name: "Claim", props: { id: _vm.carData.id } } } },
            [_vm._v("\n                CLAIM LOT\n            ")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "car__container__content" }, [
      _c(
        "div",
        { staticClass: "car__container__content__images" },
        [_c("CarSlider", { attrs: { slides: _vm.slides } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "car__container__content__data" }, [
        _c("div", { staticClass: "data__box card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "data__box__content" }, [
            _c("h3", [_vm._v("Final bid: $13.456.00")]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "flex" }, [
              _c("p", [_vm._v("Auction: ")]),
              _vm._v(" "),
              _c("div", { staticClass: "badge" }, [
                _vm._v(_vm._s(_vm.carData.selling_branch))
              ]),
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
                _vm._v(_vm._s(_vm.carData.run_number))
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
            _c("div", { staticClass: "flex-base" }, [
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
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.production_year))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-base" }, [
              _c("p", { staticClass: "light" }, [_vm._v("Mileage")]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.odometer))
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
              _c("p", { staticClass: "light" }, [_vm._v("Run and drive")]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.drive_line_type))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-base" }, [
              _c("p", { staticClass: "light" }, [_vm._v("Body color")]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.odometer))
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
            _c("div", { staticClass: "flex-base" }, [
              _c("p", { staticClass: "light" }, [_vm._v("Fuel")]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.odometer))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-base" }, [
              _c("p", { staticClass: "light" }, [_vm._v("Keys")]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.key))
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
              _c("p", { staticClass: "light" }, [_vm._v("Primary damage")]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.loss))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-base" }, [
              _c("p", { staticClass: "light" }, [_vm._v("Secondary damage")]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.primary_damage))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-base" }, [
              _c("p", { staticClass: "light" }, [
                _vm._v("Estimated Retail value")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.odometer))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-base" }, [
              _c("p", { staticClass: "light" }, [
                _vm._v("Estimated repair cost")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "strong" }, [
                _vm._v(_vm._s(_vm.carData.engine))
              ])
            ])
          ])
        ])
      ])
    ])
  ])
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