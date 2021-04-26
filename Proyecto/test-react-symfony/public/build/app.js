(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _components_SignInForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SignInForm */ "./assets/components/SignInForm.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./assets/components/Home.js");






react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "container mt-5"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_4__.default, null))), document.getElementById("root"));

/***/ }),

/***/ "./assets/components/Home.js":
/*!***********************************!*\
  !*** ./assets/components/Home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _SignInForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignInForm */ "./assets/components/SignInForm.js");
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignUpForm */ "./assets/components/SignUpForm.js");





var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
    exact: true,
    from: "/",
    to: "/SignInForm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/SignInForm",
    component: _SignInForm__WEBPACK_IMPORTED_MODULE_1__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/SignUpForm",
    component: _SignUpForm__WEBPACK_IMPORTED_MODULE_2__.default
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/components/SignInForm.js":
/*!*****************************************!*\
  !*** ./assets/components/SignInForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _constants_MyTextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/MyTextInput */ "./assets/constants/MyTextInput.js");
/* harmony import */ var _constants_MyPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/MyPassword */ "./assets/constants/MyPassword.js");
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignUpForm */ "./assets/components/SignUpForm.js");








var SignInForm = function SignInForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Loggin!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      user: "",
      password: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__.object({
      user: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Introduce tu usuario."),
      password: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Introduce la contraseña.")
    }),
    onSubmit: function onSubmit(values) {
      console.log(values);
      window.location = "https://www.divinacocina.es/Categorias/recetas-de-la-abuela/";
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_constants_MyTextInput__WEBPACK_IMPORTED_MODULE_3__.default, {
    label: "Usuario",
    name: "user",
    type: "text",
    placeholder: "Usuario"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_constants_MyPassword__WEBPACK_IMPORTED_MODULE_4__.default, {
    label: "Contrase\xF1a",
    name: "password",
    type: "password",
    placeholder: "password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Inicia la sesi\xF3n"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/SignUpForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btn btn-success"
  }, "Registrate")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignInForm);

/***/ }),

/***/ "./assets/components/SignUpForm.js":
/*!*****************************************!*\
  !*** ./assets/components/SignUpForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _constants_MyTextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/MyTextInput */ "./assets/constants/MyTextInput.js");
/* harmony import */ var _constants_MyPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/MyPassword */ "./assets/constants/MyPassword.js");






var SignUpForm = function SignUpForm() {
  var botonRegistrate = function botonRegistrate() {
    window.location = "https://github.com/FrankPalomino/proyectoFinal";
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Registation!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: {
      user: "",
      password: ""
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__.object({
      user: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Introduce tu usuario."),
      correo: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Introduce tu correo."),
      password: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Introduce la contraseña.")
    }),
    onSubmit: function onSubmit(values) {
      console.log(values);
      window.location = "https://www.divinacocina.es/Categorias/recetas-de-la-abuela/";
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_constants_MyTextInput__WEBPACK_IMPORTED_MODULE_3__.default, {
    label: "Usuario",
    name: "user",
    type: "text",
    placeholder: "Usuario"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_constants_MyTextInput__WEBPACK_IMPORTED_MODULE_3__.default, {
    label: "Correo",
    name: "correo",
    type: "text",
    placeholder: "Correo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_constants_MyPassword__WEBPACK_IMPORTED_MODULE_4__.default, {
    label: "Contrase\xF1a",
    name: "password",
    type: "password",
    placeholder: "password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_constants_MyPassword__WEBPACK_IMPORTED_MODULE_4__.default, {
    label: "Repite Contrase\xF1a",
    name: "password2",
    type: "password",
    placeholder: "repite password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Registrarse"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpForm);

/***/ }),

/***/ "./assets/constants/MyPassword.js":
/*!****************************************!*\
  !*** ./assets/constants/MyPassword.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }























function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var MyPassword = function MyPassword(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_22__.useField)(_objectSpread(_objectSpread({}, props), {}, {
    type: "password"
  })),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("label", {
    htmlFor: props.id || props.name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("input", _extends({
    type: "password"
  }, field, props)), meta.touched && meta.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("div", {
    className: "error"
  }, meta.error) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyPassword);

/***/ }),

/***/ "./assets/constants/MyTextInput.js":
/*!*****************************************!*\
  !*** ./assets/constants/MyTextInput.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var MyTextInput = function MyTextInput(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  var _useField = (0,formik__WEBPACK_IMPORTED_MODULE_15__.useField)(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(react__WEBPACK_IMPORTED_MODULE_14__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("label", {
    htmlFor: props.id || props.name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("input", _extends({
    className: "text-input"
  }, field, props)), meta.touched && meta.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
    className: "error"
  }, meta.error) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTextInput);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-307739"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2lnbkluRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TaWduVXBGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb25zdGFudHMvTXlQYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29uc3RhbnRzL015VGV4dElucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJIb21lIiwiU2lnbkluRm9ybSIsIlNpZ25VcEZvcm0iLCJ1c2VyIiwicGFzc3dvcmQiLCJZdXAiLCJyZXF1aXJlZCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImJvdG9uUmVnaXN0cmF0ZSIsImNvcnJlbyIsIk15UGFzc3dvcmQiLCJsYWJlbCIsInByb3BzIiwidXNlRmllbGQiLCJ0eXBlIiwiZmllbGQiLCJtZXRhIiwiaWQiLCJuYW1lIiwidG91Y2hlZCIsImVycm9yIiwiTXlUZXh0SW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsNkNBQUEsZUFDRSxpREFBQywyREFBRCxxQkFDRTtBQUFLLFdBQVMsRUFBQztBQUFmLGdCQUNFLGlEQUFDLHFEQUFELE9BREYsQ0FERixDQURGLEVBTUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQU5GLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLHNCQUNFLGlEQUFDLG9EQUFE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QXRDLEVBRkYsRUFHR0ksSUFBSSxDQUFDRyxPQUFMLElBQWdCSCxJQUFJLENBQUNJLEtBQXJCLGdCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBd0JKLElBQUksQ0FBQ0ksS0FBN0IsQ0FERCxHQUVHLElBTE4sQ0FERjtBQVNELENBWEQ7O0FBYUEsaUVBQWVWLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7O0FBRUEsSUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBeUI7QUFBQSxNQUF0QlYsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBWkMsS0FBWTs7QUFDM0Msa0JBQXNCQyxpREFBUSxDQUFDRCxLQUFELENBQTlCO0FBQUE7QUFBQSxNQUFPRyxLQUFQO0FBQUEsTUFBY0MsSUFBZDs7QUFDQSxzQkFDRSxrREFBQyw0Q0FBRCxxQkFDRTtBQUFPLFdBQU8sRUFBRUosS0FBSyxDQUFDSyxFQUFOLElBQVlMLEtBQUssQ0FBQ007QUFBbEMsS0FBeUNQLEtBQXpDLENBREYsZUFFRTtBQUFPLGFBQVMsRUFBQztBQUFqQixLQUFrQ0ksS0FBbEMsRUFBNkNILEtBQTdDLEVBRkYsRUFHR0ksSUFBSSxDQUFDRyxPQUFMLElBQWdCSCxJQUFJLENBQUNJLEtBQXJCLGdCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBd0JKLElBQUksQ0FBQ0ksS0FBN0IsQ0FERCxHQUVHLElBTE4sQ0FERjtBQVNELENBWEQ7O0FBYUEsaUVBQWVDLFdBQWYsRTs7Ozs7Ozs7Ozs7O0FDaEJBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuY3NzXCI7XHJcbmltcG9ydCBTaWduSW5Gb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvU2lnbkluRm9ybVwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9jb21wb25lbnRzL0hvbWVcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8Um91dGVyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXQtNVwiPlxyXG4gICAgICA8SG9tZSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9Sb3V0ZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIFJlZGlyZWN0LCBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNpZ25JbkZvcm0gZnJvbSBcIi4vU2lnbkluRm9ybVwiO1xyXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tIFwiLi9TaWduVXBGb3JtXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpdGNoPlxyXG4gICAgICA8UmVkaXJlY3QgZXhhY3QgZnJvbT1cIi9cIiB0bz1cIi9TaWduSW5Gb3JtXCI+PC9SZWRpcmVjdD5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvU2lnbkluRm9ybVwiIGNvbXBvbmVudD17U2lnbkluRm9ybX0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvU2lnblVwRm9ybVwiIGNvbXBvbmVudD17U2lnblVwRm9ybX0gLz5cclxuICAgIDwvU3dpdGNoPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCwgTGluaywgd2l0aFJvdXRlciwgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IE15VGV4dElucHV0IGZyb20gXCIuLi9jb25zdGFudHMvTXlUZXh0SW5wdXRcIjtcclxuaW1wb3J0IE15UGFzc3dvcmQgZnJvbSBcIi4uL2NvbnN0YW50cy9NeVBhc3N3b3JkXCI7XHJcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gXCIuL1NpZ25VcEZvcm1cIjtcclxuXHJcbmNvbnN0IFNpZ25JbkZvcm0gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGgxPkxvZ2dpbiE8L2gxPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgdXNlcjogXCJcIixcclxuICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17WXVwLm9iamVjdCh7XHJcbiAgICAgICAgICB1c2VyOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJJbnRyb2R1Y2UgdHUgdXN1YXJpby5cIiksXHJcbiAgICAgICAgICBwYXNzd29yZDogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiSW50cm9kdWNlIGxhIGNvbnRyYXNlw7FhLlwiKSxcclxuICAgICAgICB9KX1cclxuICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9XHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZGl2aW5hY29jaW5hLmVzL0NhdGVnb3JpYXMvcmVjZXRhcy1kZS1sYS1hYnVlbGEvXCI7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPE15VGV4dElucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXN1YXJpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzdWFyaW9cIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TXlQYXNzd29yZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBJbmljaWEgbGEgc2VzacOzblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgICAgPExpbmsgdG89e1wiL1NpZ25VcEZvcm1cIn0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5SZWdpc3RyYXRlPC9idXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbkZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCBNeVRleHRJbnB1dCBmcm9tIFwiLi4vY29uc3RhbnRzL015VGV4dElucHV0XCI7XHJcbmltcG9ydCBNeVBhc3N3b3JkIGZyb20gXCIuLi9jb25zdGFudHMvTXlQYXNzd29yZFwiO1xyXG5cclxuY29uc3QgU2lnblVwRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBib3RvblJlZ2lzdHJhdGUgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9GcmFua1BhbG9taW5vL3Byb3llY3RvRmluYWxcIjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8aDE+UmVnaXN0YXRpb24hPC9oMT5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIHVzZXI6IFwiXCIsXHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1l1cC5vYmplY3Qoe1xyXG4gICAgICAgICAgdXNlcjogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwiSW50cm9kdWNlIHR1IHVzdWFyaW8uXCIpLFxyXG4gICAgICAgICAgY29ycmVvOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJJbnRyb2R1Y2UgdHUgY29ycmVvLlwiKSxcclxuICAgICAgICAgIHBhc3N3b3JkOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJJbnRyb2R1Y2UgbGEgY29udHJhc2XDsWEuXCIpLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID1cclxuICAgICAgICAgICAgXCJodHRwczovL3d3dy5kaXZpbmFjb2NpbmEuZXMvQ2F0ZWdvcmlhcy9yZWNldGFzLWRlLWxhLWFidWVsYS9cIjtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8TXlUZXh0SW5wdXRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc3VhcmlvXCJcclxuICAgICAgICAgICAgbmFtZT1cInVzZXJcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXN1YXJpb1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxNeVRleHRJbnB1dFxyXG4gICAgICAgICAgICBsYWJlbD1cIkNvcnJlb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29ycmVvXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE15UGFzc3dvcmRcclxuICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TXlQYXNzd29yZFxyXG4gICAgICAgICAgICBsYWJlbD1cIlJlcGl0ZSBDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZDJcIlxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlcGl0ZSBwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBSZWdpc3RyYXJzZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcEZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuXHJcbmNvbnN0IE15UGFzc3dvcmQgPSAoeyBsYWJlbCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtmaWVsZCwgbWV0YV0gPSB1c2VGaWVsZCh7IC4uLnByb3BzLCB0eXBlOiBcInBhc3N3b3JkXCIgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pZCB8fCBwcm9wcy5uYW1lfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi5maWVsZH0gey4uLnByb3BzfSAvPlxyXG4gICAgICB7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPnttZXRhLmVycm9yfTwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeVBhc3N3b3JkOyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuXHJcbmNvbnN0IE15VGV4dElucHV0ID0gKHsgbGFiZWwsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBbZmllbGQsIG1ldGFdID0gdXNlRmllbGQocHJvcHMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5pZCB8fCBwcm9wcy5uYW1lfT57bGFiZWx9PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIiB7Li4uZmllbGR9IHsuLi5wcm9wc30gLz5cclxuICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57bWV0YS5lcnJvcn08L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeVRleHRJbnB1dDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9