(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Claim.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Claim.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://54.36.172.231/api/cars/".concat(this.id)).then(function (res) {
        _this.carData = res.data[0];
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".car__container__heading[data-v-547eaa63] {\n  width: 100%;\n  margin: 20px 0;\n}\n.car__container__content[data-v-547eaa63] {\n  display: flex;\n  flex-direction: column;\n  gap: 29px;\n}\n@media (min-width: 992px) {\n.car__container__content[data-v-547eaa63] {\n    flex-direction: row;\n}\n}\n.car__container__content__images[data-v-547eaa63] {\n  flex: 1;\n}\n@media (min-width: 992px) {\n.car__container__content__images[data-v-547eaa63] {\n    flex: 3;\n}\n}\n.car__container__content__data[data-v-547eaa63] {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 21px;\n}\n@media (min-width: 992px) {\n.car__container__content__data[data-v-547eaa63] {\n    width: unset;\n    min-width: 410px;\n}\n}\n.car__container__content__data .data__box[data-v-547eaa63] {\n  padding: 20px !important;\n}\n.car__container__content__data .data__box__heading[data-v-547eaa63] {\n  background: #F8F8F8;\n  display: flex;\n  gap: 16px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.car__container__content__data .data__box__heading img[data-v-547eaa63] {\n  width: 27px;\n  height: 27px;\n}\n.car__container__content__data .data__box__heading p[data-v-547eaa63] {\n  font-weight: 700;\n  font-size: 25px;\n  margin: 0;\n}\n.car__container__content__data .data__box__content h3[data-v-547eaa63] {\n  font-weight: 700;\n  font-size: 33px;\n  line-height: 43px;\n  text-align: left;\n}\n.car__container__content__data .data__box__content .highlight[data-v-547eaa63] {\n  background: #FFEBB7;\n  border-radius: 3px;\n  width: fit-content;\n}\n.car__container__content__data .data__box__content .flex[data-v-547eaa63] {\n  display: flex;\n  gap: 11px;\n  justify-content: flex-start;\n  align-items: center;\n}\n.car__container__content__data .data__box__content .flex-base[data-v-547eaa63] {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);\n}\n.car__container__content__data .data__box__content .flex-base .light[data-v-547eaa63] {\n  color: #818181;\n}\n.car__container__content__data .data__box__content .flex-base .strong[data-v-547eaa63] {\n  color: black;\n}\n.car__container .card[data-v-547eaa63] {\n  background: #FFFFFF;\n  border: 1px solid #ECF1F9;\n  padding: 10px;\n  border-radius: 8px;\n}\n.car__container .card .badge[data-v-547eaa63] {\n  width: fit-content;\n}\n.car__container .card .flex-middle[data-v-547eaa63] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.car__container .card .flex-last[data-v-547eaa63] {\n  padding: 30px;\n  background: #ECF1F9;\n}\n.car__container .card .flex-main[data-v-547eaa63] {\n  justify-content: space-between;\n  gap: 8px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.car__container .card .flex-main h2[data-v-547eaa63] {\n  margin: 4px 0;\n  margin-right: 0;\n}\n.car__container .card .flex-main img[data-v-547eaa63] {\n  width: 320px;\n}\n.car__container .card .flex-main button[data-v-547eaa63] {\n  background: #FFCD1E;\n  border-radius: 5px;\n  color: white;\n  width: fit-content;\n  height: fit-content;\n  border: none;\n  outline: none;\n  margin: auto 0;\n}\n.car__container .card h1[data-v-547eaa63] {\n  font-size: 25px;\n  line-height: 32px;\n  color: #000000;\n  margin-right: 24px;\n}\n.car__container .card h2[data-v-547eaa63] {\n  font-size: 16px;\n  line-height: 21px;\n}\n.car__container .card h2[data-v-547eaa63]:first-of-type {\n  margin-right: 65px;\n}\n.car__container .card h2 span[data-v-547eaa63] {\n  color: #818181;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Claim.vue?vue&type=template&id=547eaa63&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Claim.vue?vue&type=template&id=547eaa63&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "flex flex-main" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "flex-middle" }, [
            _c("div", { staticClass: "badge" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(_vm.carData.selling_branch) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
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
            _c("h2", [_vm._v("VIN: " + _vm._s(_vm.carData.vin))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex" }, [
            _c("h2", [
              _c("span", [_vm._v("Lot number:")]),
              _vm._v(
                " " + _vm._s(_vm.carData.run_number) + "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("h2", [
              _c("span", [_vm._v("Location: ")]),
              _vm._v(" " + _vm._s(_vm.carData.vin) + "\n                    ")
            ]),
            _vm._v(" "),
            _c("h2", [
              _c("span", [_vm._v("Mileage: ")]),
              _vm._v(
                " " + _vm._s(_vm.carData.odometer) + "\n                    "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-last" }, [
          _vm._v(
            "\n                " +
              _vm._s(_vm.carData.createdate) +
              "\n                "
          ),
          _c("h3", [_vm._v("Final bid")]),
          _vm._v(
            "\n                " +
              _vm._s(_vm.carData.final_bid) +
              "\n                "
          ),
          _c("button", [
            _vm._v("\n                    CLAIM LOT\n                ")
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
    return _c("div", { staticClass: "flex" }, [
      _c("img", { attrs: { src: "/img/base-img-3.png", alt: "" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Claim.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Claim.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Claim_vue_vue_type_template_id_547eaa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Claim.vue?vue&type=template&id=547eaa63&scoped=true& */ "./resources/js/Pages/Claim.vue?vue&type=template&id=547eaa63&scoped=true&");
/* harmony import */ var _Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Claim.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Claim_vue_vue_type_style_index_0_id_547eaa63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true& */ "./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Claim_vue_vue_type_template_id_547eaa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Claim_vue_vue_type_template_id_547eaa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "547eaa63",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Claim.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Claim.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Claim.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Claim.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_547eaa63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Claim.vue?vue&type=style&index=0&id=547eaa63&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_547eaa63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_547eaa63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_547eaa63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_style_index_0_id_547eaa63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Claim.vue?vue&type=template&id=547eaa63&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Claim.vue?vue&type=template&id=547eaa63&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_547eaa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Claim.vue?vue&type=template&id=547eaa63&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Claim.vue?vue&type=template&id=547eaa63&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_547eaa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Claim_vue_vue_type_template_id_547eaa63_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);