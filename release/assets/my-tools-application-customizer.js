define("8726f5a0-3ac9-4495-b877-68ec4edca97e_0.0.1", ["@microsoft/sp-dialog","MyToolsApplicationCustomizerStrings","@microsoft/sp-application-base","@microsoft/sp-core-library"], function(__WEBPACK_EXTERNAL_MODULE__Cqt__, __WEBPACK_EXTERNAL_MODULE__5CP6__, __WEBPACK_EXTERNAL_MODULE_GPet__, __WEBPACK_EXTERNAL_MODULE_UWqr__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "gf2h");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Cqt":
/*!***************************************!*\
  !*** external "@microsoft/sp-dialog" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__Cqt__;

/***/ }),

/***/ "5CP6":
/*!******************************************************!*\
  !*** external "MyToolsApplicationCustomizerStrings" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5CP6__;

/***/ }),

/***/ "GPet":
/*!*************************************************!*\
  !*** external "@microsoft/sp-application-base" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_GPet__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "gf2h":
/*!****************************************************************!*\
  !*** ./lib/extensions/myTools/MyToolsApplicationCustomizer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-application-base */ "GPet");
/* harmony import */ var _microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-dialog */ "/Cqt");
/* harmony import */ var _microsoft_sp_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var MyToolsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! MyToolsApplicationCustomizerStrings */ "5CP6");
/* harmony import */ var MyToolsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(MyToolsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var LOG_SOURCE = 'MyToolsApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var MyToolsApplicationCustomizer = /** @class */ (function (_super) {
    __extends(MyToolsApplicationCustomizer, _super);
    function MyToolsApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyToolsApplicationCustomizer.prototype.onInit = function () {
        this.render();
        _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Log"].info(LOG_SOURCE, "Initialized ".concat(MyToolsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__["Title"]));
        console.log("Hello from MyToolsApplicationCustomizer");
        // let message: string = this.properties.testMessage;
        // if (!message) {
        //   message = '(No properties were provided.)';
        // }
        // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
        //   /* handle error */
        // });
        console.log("didn't work ");
        return Promise.resolve();
    };
    MyToolsApplicationCustomizer.prototype.render = function () {
        //CREATE NEW HTML VARIABLE TO APPEND TO THE APP BAR
        var newHtml = "<li class=\"sp-appBar-linkLi sp-appBar-dividerElement\"><div class=\"sp-appBar-linkLiDiv\"><a aria-labelledby=\"sp-appbar-tooltiplabel-create\" data-interception=\"off\" id=\"sp-appBar-link-create\" href=\"https://w6fx2.sharepoint.com/_layouts/15/spappbar.aspx?workload=create\" role=\"button\" class=\"sp-appBar-link\" data-automation-id=\"sp-appBar-link-create\" aria-expanded=\"false\" aria-haspopup=\"dialog\" style=\"display: flex; justify-content: center; align-items: center; color: rgb(96, 94, 92);\"><i style=\"height: 22.7px; width: 22.7px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2048 2048\" class=\"svg_dd790ee3\" focusable=\"false\"><path d=\"M1664 1152h-128v704q0 40-15 75t-41 61-61 41-75 15q-40 0-75-15t-61-41-41-61-15-75v-704h-128v-128h256V475l-128-128V0h384v347l-128 128v549h256v128zm-384-859l64 65 64-65V128h-128v165zm128 859h-128v704q0 26 19 45t45 19q26 0 45-19t19-45v-704zM704 0q66 0 124 25t101 69 69 102 26 124q0 75-34 142t-94 113v1281q0 40-15 75t-41 61-61 41-75 15q-40 0-75-15t-61-41-41-61-15-75V575q-60-45-94-112t-34-143q0-66 25-124t68-101 102-69T704 0zm64 504q28-16 51-34t41-39 26-49 10-62q0-30-9-58t-26-52-41-42-52-28v180l-64 64-64-64V140q-29 10-52 28t-40 42-26 52-10 58q0 35 9 62t27 48 40 40 52 34v1352q0 26 19 45t45 19q26 0 45-19t19-45V504z\"></path></svg><div class=\"sp-appBar-borderLeft\"></div></i></a><div class=\"sp-appBar-tooltipDiv\"><span class=\"sp-appBar-tooltip\" role=\"tooltip\" id=\"sp-appbar-tooltiplabel-create\">Create</span></div></div></li>";
        //GET CLASS OF THE APP CONTAINER AND 
        var html = document.getElementsByClassName("sp-appBar-linkContainer")[0];
        //APPEND THE NEW HTML
        html.innerHTML += newHtml;
        //RED APP BAR TEST
        // document.getElementById("sp-appBar").style.backgroundColor = "red";
        var message = this.properties.testMessage;
        if (!message) {
            message = '(No properties were provided.)';
        }
        _microsoft_sp_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"].alert("Hello from ".concat(MyToolsApplicationCustomizerStrings__WEBPACK_IMPORTED_MODULE_3__["Title"], ":\n\n").concat(message)).catch(function () {
            /* handle error */
        });
    };
    return MyToolsApplicationCustomizer;
}(_microsoft_sp_application_base__WEBPACK_IMPORTED_MODULE_1__["BaseApplicationCustomizer"]));
/* harmony default export */ __webpack_exports__["default"] = (MyToolsApplicationCustomizer);
console.log("didn't work 2 ");


/***/ })

/******/ })});;
//# sourceMappingURL=my-tools-application-customizer.js.map