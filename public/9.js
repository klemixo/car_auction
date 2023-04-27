(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.multi-range-slider * {\r\n  box-sizing: border-box;\r\n  padding: 0px;\r\n  margin: 0px;\n}\n.multi-range-slider {\r\n  display: flex;\r\n  position: relative;\r\n  border: solid 1px gray;\r\n  border-radius: 10px;\r\n  padding: 20px 10px;\r\n  box-shadow: 1px 1px 4px black;\r\n  flex-direction: column;\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */\r\n  -khtml-user-select: none; /* Konqueror HTML */\r\n  -moz-user-select: none; /* Old versions of Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge,*/\n}\n.multi-range-slider .bar {\r\n  display: flex;\n}\n.multi-range-slider .bar-left {\r\n  width: 25%;\r\n  background-color: #f0f0f0;\r\n  border-radius: 10px 0px 0px 10px;\r\n  box-shadow: inset 0px 0px 5px black;\r\n  padding: 4px 0px;\n}\n.multi-range-slider .bar-right {\r\n  width: 25%;\r\n  background-color: #f0f0f0;\r\n  border-radius: 0px 10px 10px 0px;\r\n  box-shadow: inset 0px 0px 5px black;\n}\n.multi-range-slider .bar-inner {\r\n  background-color: lime;\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-shrink: 1;\r\n  justify-content: space-between;\r\n  position: relative;\r\n  border: solid 1px black;\r\n  justify-content: space-between;\r\n  box-shadow: inset 0px 0px 5px black;\n}\n.multi-range-slider .bar-inner-left {\r\n  width: 50%;\n}\n.multi-range-slider .bar-inner-right {\r\n  width: 50%;\n}\n.multi-range-slider .thumb {\r\n  background-color: red;\r\n  position: relative;\r\n  z-index: 1;\r\n  cursor: pointer;\n}\n.multi-range-slider .thumb::before {\r\n  content: \"\";\r\n  background-color: white;\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: solid 1px black;\r\n  box-shadow: 0px 0px 3px black, inset 0px 0px 5px gray;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  margin: -8px;\r\n  cursor: pointer;\n}\n.multi-range-slider .input-type-range:focus + .thumb::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -4px;\r\n  left: -4px;\r\n  width: 11px;\r\n  height: 11px;\r\n  z-index: 2;\r\n  border-radius: 50%;\r\n  border: dotted 1px black;\r\n  box-shadow: 0px 0px 5px white, inset 0px 0px 10px black;\n}\n.multi-range-slider .caption {\r\n  position: absolute;\r\n  bottom: 35px;\r\n  width: 2px;\r\n  height: 2px;\r\n  left: 1px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: visible;\r\n  display: none;\n}\n.multi-range-slider .thumb .caption * {\r\n  position: absolute;\r\n  min-width: 30px;\r\n  height: 30px;\r\n  font-size: 75%;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  background-color: blue;\r\n  border-radius: 15px;\r\n  color: white;\r\n  box-shadow: 0px 0px 5px black;\r\n  padding: 0px 5px;\r\n  white-space: nowrap;\n}\n.multi-range-slider .thumb:active .caption {\r\n  display: flex;\n}\n.multi-range-slider .input-type-range:focus + .thumb .caption {\r\n  display: flex;\n}\n.multi-range-slider .input-type-range {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  opacity: 0;\r\n  pointer-events: none;\n}\n.multi-range-slider .ruler {\r\n  margin: 10px 0px -5px 0px;\r\n  display: flex;\r\n  /* display: none; */\r\n  overflow: hidden;\n}\n.multi-range-slider .ruler .ruler-rule {\r\n  border-left: solid 1px;\r\n  border-bottom: solid 1px;\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-shrink: 1;\r\n  padding: 5px 0px;\n}\n.multi-range-slider .ruler .ruler-rule:last-child {\r\n  border-right: solid 1px;\n}\n.multi-range-slider .sub-ruler {\r\n  margin: -2px 0px -5px 0px;\r\n  display: flex; /*\r\ndisplay: none; */\n}\n.multi-range-slider .sub-ruler .ruler-sub-rule {\r\n  border-left: solid 1px;\r\n  border-bottom: solid 1px;\r\n  display: flex;\r\n  flex-grow: 1;\r\n  flex-shrink: 1;\r\n  padding: 3px 0px;\n}\n.multi-range-slider .sub-ruler .ruler-sub-rule:last-child {\r\n  border-right: solid 1px;\n}\n.multi-range-slider .labels {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0px;\r\n  margin-top: 10px;\r\n  margin-bottom: -20px;\r\n  /* display: none; */\n}\n.multi-range-slider .label {\r\n  font-size: 80%;\r\n  display: flex;\r\n  width: 1px;\r\n  justify-content: center;\n}\n.multi-range-slider .label:first-child {\r\n  justify-content: start;\n}\n.multi-range-slider .label:last-child {\r\n  justify-content: end;\n}\n.multi-range-slider.zero-ranage-margin .thumb-left {\r\n  right: 12px;\n}\n.multi-range-slider.zero-ranage-margin .thumb-right {\r\n  left: 8px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue":
/*!******************************************************************!*\
  !*** ./node_modules/multi-range-slider-vue/MultiRangeSlider.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiRangeSlider_vue_vue_type_template_id_cff044c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiRangeSlider.vue?vue&type=template&id=cff044c2& */ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=template&id=cff044c2&");
/* harmony import */ var _MultiRangeSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiRangeSlider.vue?vue&type=script&lang=js& */ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MultiRangeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiRangeSlider.vue?vue&type=style&index=0&lang=css& */ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MultiRangeSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiRangeSlider_vue_vue_type_template_id_cff044c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiRangeSlider_vue_vue_type_template_id_cff044c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/multi-range-slider-vue/MultiRangeSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib??vue-loader-options!./MultiRangeSlider.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../style-loader!../css-loader??ref--6-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--6-2!../vue-loader/lib??vue-loader-options!./MultiRangeSlider.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=template&id=cff044c2&":
/*!*************************************************************************************************!*\
  !*** ./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=template&id=cff044c2& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_template_id_cff044c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../vue-loader/lib??vue-loader-options!./MultiRangeSlider.vue?vue&type=template&id=cff044c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=template&id=cff044c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_template_id_cff044c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MultiRangeSlider_vue_vue_type_template_id_cff044c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--6-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--6-2!../vue-loader/lib??vue-loader-options!./MultiRangeSlider.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
  name: "MultiRangeSlider",
  props: {
    baseClassName: {
      type: String,
      default: "multi-range-slider"
    },
    min: { type: Number },
    max: { type: Number },
    minValue: { type: Number },
    maxValue: { type: Number },
    step: { type: Number, default: 1 },
    preventWheel: { type: Boolean, default: false },
    ruler: { type: Boolean, default: true },
    label: { type: Boolean, default: true },
    labels: { type: Array },
    minCaption: { type: String },
    maxCaption: { type: String },
    rangeMargin: { type: Number }
  },
  data() {
    let _labels = this.labels || [];
    let _minimum = this.min === undefined ? 0 : this.min;
    let max = _labels.length ? _labels.length - 1 : 100;
    let _maximum = this.max === undefined ? max : this.max;
    let _minValue = this.minValue === undefined ? 25 : this.minValue;
    if (_labels.length && this.minValue === undefined) {
      _minValue = 1;
    }
    let _maxValue = this.maxValue || 75;
    if (_labels.length && this.maxValue === undefined) {
      _maxValue = _labels.length - 2;
    }
    if (_maximum <= _minimum) {
      throw new Error("Invalid props min or max");
    }
    if (_minValue > _maxValue) {
      throw new Error("Invalid props minValue or maxValue");
    }
    let _rangeMargin =
      this.rangeMargin === undefined ? this.step : this.rangeMargin;

    let m = _rangeMargin % this.step;
    m && (_rangeMargin = _rangeMargin + this.step - m);

    return {
      valueMin: _minValue < _minimum ? _minimum : _minValue,
      valueMax: _maxValue > _maximum ? _maximum : _maxValue,
      interVal: null,
      startX: null,
      mouseMoveCounter: null,
      barBox: null,
      barValue: 0,
      rangeMarginValue: _rangeMargin
    };
  },
  methods: {
    onBarLeftClick() {
      if (this.valueMin - this.step >= this.minimum) {
        this.valueMin -= this.step;
      } else {
        this.valueMin = this.minimum;
      }
    },
    onInnerBarLeftClick() {
      if (this.valueMin + this.rangeMarginValue < this.valueMax) {
        this.valueMin += this.step;
      }
    },
    onBarRightClick() {
      if (this.valueMax + this.step <= this.maximum) {
        this.valueMax += this.step;
      } else {
        this.valueMax = this.maximum;
      }
    },
    onInnerBarRightClick() {
      if (this.valueMax - this.rangeMarginValue > this.valueMin) {
        this.valueMax -= this.step;
      }
    },
    onInputMinChange(e) {
      let val = parseFloat(e.target.value);
      if (val <= this.valueMax - this.rangeMarginValue && val >= this.minimum) {
        this.valueMin = val;
      } else {
        e.target.value = this.valueMin;
      }
    },
    onInputMaxChange(e) {
      let val = parseFloat(e.target.value);
      if (val >= this.valueMin + this.rangeMarginValue && val <= this.maximum) {
        this.valueMax = val;
      } else {
        e.target.value = this.valueMax;
      }
    },
    onLeftThumbMousedown(e) {
      e.preventDefault();
      this.startX = e.clientX;
      if (e.type === "touchstart") {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
        } else {
          return;
        }
      }
      this.mouseMoveCounter = 0;
      this.barValue = this.valueMin;
      this.barBox = e.target.parentNode.getBoundingClientRect();
      document.addEventListener("mousemove", this.onLeftThumbMousemove);
      document.addEventListener("mouseup", this.onLeftThumbMouseup);
      document.addEventListener("touchmove", this.onLeftThumbMousemove);
      document.addEventListener("touchend", this.onLeftThumbMouseup);
    },
    onLeftThumbMousemove(e) {
      this.mouseMoveCounter++;
      let clientX = e.clientX;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }
      let dx = clientX - this.startX;
      let per = dx / this.barBox.width;
      let val = this.barValue + (this.maximum - this.minimum) * per;
      let mod = val % this.step;
      val -= mod;
      if (val < this.minimum) {
        val = this.minimum;
      } else if (val > this.valueMax - this.rangeMarginValue) {
        val = this.valueMax - this.rangeMarginValue;
      }
      this.valueMin = val;
    },
    onLeftThumbMouseup() {
      document.removeEventListener("mousemove", this.onLeftThumbMousemove);
      document.removeEventListener("mouseup", this.onLeftThumbMouseup);
      document.removeEventListener("touchmove", this.onLeftThumbMousemove);
      document.removeEventListener("touchend", this.onLeftThumbMouseup);
    },
    onRightThumbMousedown(e) {
      e.preventDefault();
      this.startX = e.clientX;
      if (e.type === "touchstart") {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
        } else {
          return;
        }
      }
      this.mouseMoveCounter = 0;
      this.barValue = this.valueMax;
      this.barBox = e.target.parentNode.getBoundingClientRect();
      document.addEventListener("mousemove", this.onRightThumbMousemove);
      document.addEventListener("mouseup", this.onRightThumbMouseup);
      document.addEventListener("touchmove", this.onRightThumbMousemove);
      document.addEventListener("touchend", this.onRightThumbMouseup);
    },
    onRightThumbMousemove(e) {
      this.mouseMoveCounter++;

      let clientX = e.clientX;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }
      let dx = clientX - this.startX;
      let per = dx / this.barBox.width;
      let val = this.barValue + (this.maximum - this.minimum) * per;
      let mod = val % this.step;
      val -= mod;

      if (val < this.valueMin + this.rangeMarginValue) {
        val = this.valueMin + this.rangeMarginValue;
      } else if (val > this.maximum) {
        val = this.maximum;
      }
      this.valueMax = val;
    },
    onRightThumbMouseup() {
      document.removeEventListener("mousemove", this.onRightThumbMousemove);
      document.removeEventListener("mouseup", this.onRightThumbMouseup);
      document.removeEventListener("touchmove", this.onRightThumbMousemove);
      document.removeEventListener("touchend", this.onRightThumbMouseup);
    },
    onMouseWheel(e) {
      if (this.preventWheel === true) {
        return;
      }

      if (!e.shiftKey && !e.ctrlKey) {
        return;
      }

      let val = this.step;

      if (e.deltaY < 0) {
        val = -val;
      }
      if (e.shiftKey && e.ctrlKey) {
        if (
          this.valueMin + val >= this.minimum &&
          this.valueMax + val <= this.maximum
        ) {
          this.valueMin = this.valueMin + val;
          this.valueMax = this.valueMax + val;
        }
      } else if (e.ctrlKey) {
        val = this.valueMax + val;

        if (val < this.valueMin + this.rangeMarginValue) {
          val = this.valueMin + this.rangeMarginValue;
        } else if (val > this.maximum) {
          val = this.maximum;
        }
        this.valueMax = val;
      } else if (e.shiftKey) {
        val = this.valueMin + val;
        if (val < this.minimum) {
          val = this.minimum;
        } else if (val > this.valueMax - this.rangeMarginValue) {
          val = this.valueMax - this.rangeMarginValue;
        }
        this.valueMin = val;
      }
    },
    triggerInput() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }

      let retObj = {
        min: this.minimum,
        max: this.maximum,
        minValue: parseFloat(this.valueMin.toFixed(fixed)),
        maxValue: parseFloat(this.valueMax.toFixed(fixed))
      };
      this.$emit("input", retObj);
    }
  },
  computed: {
    minimum() {
      return this.min === undefined ? 0 : this.min;
    },
    maximum() {
      let _labels = this.labels || [];
      let max = _labels.length ? _labels.length - 1 : 100;
      return this.max === undefined ? max : this.max;
    },
    stepCount() {
      let _labels = this.labels || [];
      if (_labels.length) {
        return _labels.length - 1;
      }
      return Math.floor((this.maximum - this.minimum) / this.step);
    },
    subStepCount() {
      let _labels = this.labels || [];
      if (_labels.length && this.step > 1) {
        return (this.maximum - this.minimum) / this.step;
      }
      return 0;
    },
    barMin() {
      let per =
        ((this.valueMin - this.minimum) / (this.maximum - this.minimum)) * 100;
      return per;
    },
    barMax() {
      let per =
        100 -
        ((this.valueMax - this.minimum) / (this.maximum - this.minimum)) * 100;
      return per;
    },
    barMinVal() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }
      return (this.valueMin || 0).toFixed(fixed);
    },
    barMaxVal() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }
      return (this.valueMax || 100).toFixed(fixed);
    },
    scaleLabels() {
      let _labels = this.labels || [];
      if (_labels.length === 0) {
        _labels = [];
        _labels.push(this.minimum);
        _labels.push(this.maximum);
      }

      return _labels;
    }
  },
  watch: {
    valueMin() {
      this.triggerInput();
    },
    valueMax() {
      this.triggerInput();
    },
    minValue(newValue) {
      this.valueMin = newValue < this.minimum ? this.minimum : newValue;
    },
    maxValue(newValue) {
      this.valueMax = newValue > this.maximum ? this.maximum : newValue;
    }
  },
  mounted() {}
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=template&id=cff044c2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/multi-range-slider-vue/MultiRangeSlider.vue?vue&type=template&id=cff044c2& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    {
      class: [
        _vm.baseClassName,
        _vm.rangeMarginValue === 0 ? "zero-ranage-margin" : ""
      ],
      on: {
        mousewheel: function($event) {
          $event.preventDefault()
          $event.stopPropagation()
          return _vm.onMouseWheel.apply(null, arguments)
        }
      }
    },
    [
      _c("div", { staticClass: "bar" }, [
        _c("div", {
          staticClass: "bar-left",
          style: { width: _vm.barMin + "%" },
          on: { click: _vm.onBarLeftClick }
        }),
        _vm._v(" "),
        _c("input", {
          staticClass: "input-type-range input-type-range-min",
          attrs: {
            type: "range",
            min: _vm.minimum,
            max: _vm.maximum,
            step: _vm.step
          },
          domProps: { value: _vm.valueMin },
          on: {
            input: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.onInputMinChange.apply(null, arguments)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "thumb thumb-left",
            on: {
              mousedown: _vm.onLeftThumbMousedown,
              touchstart: _vm.onLeftThumbMousedown
            }
          },
          [
            _c("div", { staticClass: "caption" }, [
              _c("span", { staticClass: "min-caption" }, [
                _vm._v(_vm._s(_vm.minCaption || _vm.barMinVal))
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "bar-inner" }, [
          _c("div", {
            staticClass: "bar-inner-left",
            on: { click: _vm.onInnerBarLeftClick }
          }),
          _vm._v(" "),
          _c("div", {
            staticClass: "bar-inner-right",
            on: { click: _vm.onInnerBarRightClick }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "input-type-range input-type-range-max",
          attrs: {
            type: "range",
            min: _vm.minimum,
            max: _vm.maximum,
            step: _vm.step
          },
          domProps: { value: _vm.valueMax },
          on: {
            input: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              return _vm.onInputMaxChange.apply(null, arguments)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "thumb thumb-right",
            on: {
              mousedown: _vm.onRightThumbMousedown,
              touchstart: _vm.onRightThumbMousedown
            }
          },
          [
            _c("div", { staticClass: "caption" }, [
              _c("span", { staticClass: "max-caption" }, [
                _vm._v(_vm._s(_vm.maxCaption || _vm.barMaxVal))
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "bar-right",
          style: { width: _vm.barMax + "%" },
          on: { click: _vm.onBarRightClick }
        })
      ]),
      _vm._v(" "),
      _vm.ruler
        ? _c(
            "div",
            { staticClass: "ruler" },
            _vm._l(_vm.stepCount, function(n) {
              return _c("div", { key: n, staticClass: "ruler-rule" })
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.subStepCount
        ? _c(
            "div",
            { staticClass: "sub-ruler" },
            _vm._l(_vm.subStepCount, function(n) {
              return _c("div", { key: n, staticClass: "ruler-sub-rule" })
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.label
        ? _c(
            "div",
            { staticClass: "labels" },
            _vm._l(_vm.scaleLabels, function(label) {
              return _c("div", { key: label, staticClass: "label" }, [
                _vm._v("\n      " + _vm._s(label) + "\n    ")
              ])
            }),
            0
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);