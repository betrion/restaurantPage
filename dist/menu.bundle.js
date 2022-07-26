"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["menu"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! bakery.ttf */ "./src/bakery.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&family=Poppins:ital,wght@1,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: titleFont;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  --nav-bg-color: #042f4b;\n  --sel-text-color: #ed1250;\n  --main-color: #fff6da;\n  --menu-color: #caaa41;\n  --title-font: titleFont, sans-serif;\n  --sub-font: \"Edu NSW ACT Foundation\", cursive;\n  --pizza-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed;\n  --default-shadow: 2px 2px 2px black;\n}\n\n.content {\n  background: var(--pizza-image);\n  display: flex;\n  height: 92vh;\n}\n\nul {\n  display: flex;\n  list-style-type: none;\n  gap: 1rem;\n  align-self: center;\n}\nul button {\n  background-color: transparent;\n  border: none;\n  color: var(--main-color);\n  padding: 1rem;\n  font-family: var(--sub-font);\n  font-size: 28px;\n  text-shadow: var(--default-shadow);\n}\nul button:hover {\n  color: var(--sel-text-color);\n}\nul button:active {\n  color: var(--menu-color);\n}\n\n.navbar {\n  background-color: var(--nav-bg-color);\n  display: flex;\n  justify-content: space-around;\n}\nh1 {\n  color: var(--sel-text-color);\n  font-size: 56px;\n  font-family: var(--title-font);\n  text-shadow: var(--default-shadow);\n}\nh3 {\n  font-family: var(--sub-font);\n  color: var(--main-color);\n  font-size: 32px;\n  text-shadow: var(--default-shadow);\n}\n\n.main {\n  margin: auto;\n  text-align: center;\n}\narticle {\n  background-color: rgba(0, 0, 0, 0.412);\n  color: var(--main-color);\n  display: flex;\n\n  width: 30vh;\n  height: 10vh;\n  justify-content: center;\n  align-items: center;\n}\ni {\n  color: var(--sel-text-color);\n  padding-right: 10px;\n}\n\nimg {\n  width: calc(5rem + 8vw);\n  height: calc(5rem + 8vw);\n}\n.menu {\n  margin: auto;\n  background-color: var(--menu-color);\n}\n.menu-container {\n  display: flex;\n  height: 100vh;\n  flex-wrap: wrap;\n  gap: 5rem;\n  justify-content: center;\n}\n.menu-item {\n  display: flex;\n  gap: 1rem;\n}\nh5 {\n  color: var(--main-color);\n  text-shadow: var(--default-shadow);\n  text-align: end;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;EACE,sBAAsB;EACtB,4CAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;EACrB,mCAAmC;EACnC,6CAA6C;EAC7C,oFAAyE;EACzE,mCAAmC;AACrC;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,wBAAwB;EACxB,aAAa;EACb,4BAA4B;EAC5B,eAAe;EACf,kCAAkC;AACpC;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;EACrC,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,4BAA4B;EAC5B,eAAe;EACf,8BAA8B;EAC9B,kCAAkC;AACpC;AACA;EACE,4BAA4B;EAC5B,wBAAwB;EACxB,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,sCAAsC;EACtC,wBAAwB;EACxB,aAAa;;EAEb,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,aAAa;EACb,eAAe;EACf,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,wBAAwB;EACxB,kCAAkC;EAClC,eAAe;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&family=Poppins:ital,wght@1,500&display=swap\");\n@font-face {\n  font-family: titleFont;\n  src: url(\"bakery.ttf\");\n}\n\n:root {\n  --nav-bg-color: #042f4b;\n  --sel-text-color: #ed1250;\n  --main-color: #fff6da;\n  --menu-color: #caaa41;\n  --title-font: titleFont, sans-serif;\n  --sub-font: \"Edu NSW ACT Foundation\", cursive;\n  --pizza-image: url(\"images/background.jpg\") no-repeat center center fixed;\n  --default-shadow: 2px 2px 2px black;\n}\n\n.content {\n  background: var(--pizza-image);\n  display: flex;\n  height: 92vh;\n}\n\nul {\n  display: flex;\n  list-style-type: none;\n  gap: 1rem;\n  align-self: center;\n}\nul button {\n  background-color: transparent;\n  border: none;\n  color: var(--main-color);\n  padding: 1rem;\n  font-family: var(--sub-font);\n  font-size: 28px;\n  text-shadow: var(--default-shadow);\n}\nul button:hover {\n  color: var(--sel-text-color);\n}\nul button:active {\n  color: var(--menu-color);\n}\n\n.navbar {\n  background-color: var(--nav-bg-color);\n  display: flex;\n  justify-content: space-around;\n}\nh1 {\n  color: var(--sel-text-color);\n  font-size: 56px;\n  font-family: var(--title-font);\n  text-shadow: var(--default-shadow);\n}\nh3 {\n  font-family: var(--sub-font);\n  color: var(--main-color);\n  font-size: 32px;\n  text-shadow: var(--default-shadow);\n}\n\n.main {\n  margin: auto;\n  text-align: center;\n}\narticle {\n  background-color: rgba(0, 0, 0, 0.412);\n  color: var(--main-color);\n  display: flex;\n\n  width: 30vh;\n  height: 10vh;\n  justify-content: center;\n  align-items: center;\n}\ni {\n  color: var(--sel-text-color);\n  padding-right: 10px;\n}\n\nimg {\n  width: calc(5rem + 8vw);\n  height: calc(5rem + 8vw);\n}\n.menu {\n  margin: auto;\n  background-color: var(--menu-color);\n}\n.menu-container {\n  display: flex;\n  height: 100vh;\n  flex-wrap: wrap;\n  gap: 5rem;\n  justify-content: center;\n}\n.menu-item {\n  display: flex;\n  gap: 1rem;\n}\nh5 {\n  color: var(--main-color);\n  text-shadow: var(--default-shadow);\n  text-align: end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage() {
  const contact = document.createElement("section");
  contact.classList.add("main");
  const contactContainer = document.createElement("div");
  const address = document.createElement("p");
  address.innerHTML =
    "11900 Wilshire Blvd, Los Angeles, CA 90025, United States";
  contactContainer.appendChild(address);
  const mapLocation = document.createElement("p");
  mapLocation.innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=kfc%20los%20angeles&key=AIzaSyB9ncKGorBUZGp_7FjigmvnJjwS9__ZhqM"></iframe>  `;
  contact.appendChild(address);
  contact.appendChild(mapLocation);
  return contact;
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
function homePage() {
  const main = document.createElement("section");
  main.classList.add("main");
  main.innerHTML = `            <h1>Come for Delicious food!</h1>
            <h3>tasty and cheap!</h3>
            <article><i class="fi-xnsuxl-map-marker-solid"><svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path></svg></i>1024 Oakwood Ave
                San Diego, CA 22434</article>
            <br>
            <article>
                <i class="fi-cnsuhl-clock-solid"><svg class="fi-padding" role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 550 250C 550 250 550 445 550 445C 565 458 575 478 575 500C 575 541 541 575 500 575C 499 575 497 575 496 575C 496 575 285 785 285 785C 266 805 234 806 214 786C 194 766 195 734 215 715C 215 715 425 504 425 504C 425 503 425 501 425 500C 425 478 435 458 450 445C 450 445 450 250 450 250C 450 222 472 200 499 199C 527 199 550 222 550 250C 550 250 550 250 550 250" transform="translate(1000,0) scale(-1,1) "></path></svg></i>Mon-Thurs: 8am-8pm <br>
                Fri-Sun: 8am-11pm
            </article>`;

  return main;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _images_hamburger_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/hamburger.png */ "./src/images/hamburger.png");
/* harmony import */ var _images_cheeseburger_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cheeseburger.png */ "./src/images/cheeseburger.png");
/* harmony import */ var _images_doublecheese_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/doublecheese.png */ "./src/images/doublecheese.png");
/* harmony import */ var _images_french_fries_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/french-fries.png */ "./src/images/french-fries.png");
/* harmony import */ var _images_ribs_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/ribs.png */ "./src/images/ribs.png");
/* harmony import */ var _images_steak_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/steak.jpg */ "./src/images/steak.jpg");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu */ "./src/menu.js");











const menuItems = [
  {
    name: "Hamburger",
    desc: "Delicious hamburger you cant pass on!",
    price: "1.99$",
    pic: _images_hamburger_png__WEBPACK_IMPORTED_MODULE_4__,
  },
  {
    name: "Cheeseburger",
    desc: "Hamburger with cheese on top! Amazing!",
    price: "2.99$",
    pic: _images_cheeseburger_png__WEBPACK_IMPORTED_MODULE_5__,
  },
  {
    name: "Double Cheese",
    desc: "Double the goodness you know and love!",
    price: "4.99$",
    pic: _images_doublecheese_png__WEBPACK_IMPORTED_MODULE_6__,
  },
  {
    name: "French Fries",
    desc: "You can't pass on them, comes with kechup!",
    price: ".99$",
    pic: _images_french_fries_png__WEBPACK_IMPORTED_MODULE_7__,
  },
  {
    name: "BBQ Ribs",
    desc: "Delicious plate of ribs with extra homemade bbq sauce!",
    price: "9.99$",
    pic: _images_ribs_png__WEBPACK_IMPORTED_MODULE_8__,
  },
  {
    name: "Steak",
    desc: "Medium to well done, to your taste!",
    price: "12.99$",
    pic: _images_steak_jpg__WEBPACK_IMPORTED_MODULE_9__,
  },
];
document.body.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild(createContent());

const menuButtons = document.querySelectorAll("button");
const contentSelector = document.querySelector(".content");
// contentSelector.appendChild(homePage());

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  return content;
}
menuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    clearContent();
    switch (e.target.innerText) {
      case "Home":
        console.log(e.target.innerText);
        contentSelector.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
        break;
      case "Menu":
        console.log(e.target.innerText);

        contentSelector.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_10__["default"])());
        break;
      case "Contact Us":
        console.log(e.target.innerText);
        contentSelector.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
        break;
      default:
        break;
    }
  });
});

function clearContent() {
  return (contentSelector.innerHTML = "");
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawMenu)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");

function drawMenu() {
  const menu = document.createElement("section");
  menu.classList.add("menu");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  ___WEBPACK_IMPORTED_MODULE_0__.menuItems.forEach((item) => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `<img src="${item.pic}" alt="" srcset="">
                    <div class="item-content">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <h5>${item.price}</h5>
                    </div>`;
    menuContainer.appendChild(menuItem);
  });
  menu.appendChild(menuContainer);

  return menu;
}


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNavbar)
/* harmony export */ });
function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");
  const pageTitle = document.createElement("h1");
  pageTitle.innerHTML = "My-Fast-Food-Restaraunt";

  const pageElements = ["Home", "Menu", "Contact Us"];
  const navButtons = document.createElement("ul");
  navButtons.classList.add("navlist");

  pageElements.forEach((pageElem) => {
    let currElem = document.createElement("li");
    currElem.innerHTML = `<button>${pageElem}</button>`;
    navButtons.appendChild(currElem);
  });

  navbar.appendChild(pageTitle);
  navbar.appendChild(navButtons);
  return navbar;
}


/***/ }),

/***/ "./src/bakery.ttf":
/*!************************!*\
  !*** ./src/bakery.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f77e3312edce0e86765d.ttf";

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21c4dd324630b7537742.jpg";

/***/ }),

/***/ "./src/images/cheeseburger.png":
/*!*************************************!*\
  !*** ./src/images/cheeseburger.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f86b7ff35c6df640fa2e.png";

/***/ }),

/***/ "./src/images/doublecheese.png":
/*!*************************************!*\
  !*** ./src/images/doublecheese.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "971e27eb3db1014934ce.png";

/***/ }),

/***/ "./src/images/french-fries.png":
/*!*************************************!*\
  !*** ./src/images/french-fries.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3de4f85c5ae658981ef3.png";

/***/ }),

/***/ "./src/images/hamburger.png":
/*!**********************************!*\
  !*** ./src/images/hamburger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61033cabaa408558fed1.png";

/***/ }),

/***/ "./src/images/ribs.png":
/*!*****************************!*\
  !*** ./src/images/ribs.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90cd73f9a328a3ff716f.png";

/***/ }),

/***/ "./src/images/steak.jpg":
/*!******************************!*\
  !*** ./src/images/steak.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1663c004f9a16fb7200d.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9uYXZiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImJha2VyeS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVkdStOU1crQUNUK0ZvdW5kYXRpb24mZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDEsNTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdGl0bGVGb250O1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW5hdi1iZy1jb2xvcjogIzA0MmY0YjtcXG4gIC0tc2VsLXRleHQtY29sb3I6ICNlZDEyNTA7XFxuICAtLW1haW4tY29sb3I6ICNmZmY2ZGE7XFxuICAtLW1lbnUtY29sb3I6ICNjYWFhNDE7XFxuICAtLXRpdGxlLWZvbnQ6IHRpdGxlRm9udCwgc2Fucy1zZXJpZjtcXG4gIC0tc3ViLWZvbnQ6IFxcXCJFZHUgTlNXIEFDVCBGb3VuZGF0aW9uXFxcIiwgY3Vyc2l2ZTtcXG4gIC0tcGl6emEtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAtLWRlZmF1bHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGl6emEtaW1hZ2UpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogOTJ2aDtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxudWwgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zdWItZm9udCk7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcbn1cXG51bCBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlbC10ZXh0LWNvbG9yKTtcXG59XFxudWwgYnV0dG9uOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuaDEge1xcbiAgY29sb3I6IHZhcigtLXNlbC10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogNTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxufVxcbmgzIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zdWItZm9udCk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBmb250LXNpemU6IDMycHg7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQxMik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgd2lkdGg6IDMwdmg7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmkge1xcbiAgY29sb3I6IHZhcigtLXNlbC10ZXh0LWNvbG9yKTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogY2FsYyg1cmVtICsgOHZ3KTtcXG4gIGhlaWdodDogY2FsYyg1cmVtICsgOHZ3KTtcXG59XFxuLm1lbnUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XFxufVxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcbmg1IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyw2Q0FBNkM7RUFDN0Msb0ZBQXlFO0VBQ3pFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLHdCQUF3QjtFQUN4QixhQUFhOztFQUViLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFlBQVk7RUFDWixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FZHUrTlNXK0FDVCtGb3VuZGF0aW9uJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAxLDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICBzcmM6IHVybChcXFwiYmFrZXJ5LnR0ZlxcXCIpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW5hdi1iZy1jb2xvcjogIzA0MmY0YjtcXG4gIC0tc2VsLXRleHQtY29sb3I6ICNlZDEyNTA7XFxuICAtLW1haW4tY29sb3I6ICNmZmY2ZGE7XFxuICAtLW1lbnUtY29sb3I6ICNjYWFhNDE7XFxuICAtLXRpdGxlLWZvbnQ6IHRpdGxlRm9udCwgc2Fucy1zZXJpZjtcXG4gIC0tc3ViLWZvbnQ6IFxcXCJFZHUgTlNXIEFDVCBGb3VuZGF0aW9uXFxcIiwgY3Vyc2l2ZTtcXG4gIC0tcGl6emEtaW1hZ2U6IHVybChcXFwiaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAtLWRlZmF1bHQtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGl6emEtaW1hZ2UpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogOTJ2aDtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxudWwgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zdWItZm9udCk7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcbn1cXG51bCBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXNlbC10ZXh0LWNvbG9yKTtcXG59XFxudWwgYnV0dG9uOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuaDEge1xcbiAgY29sb3I6IHZhcigtLXNlbC10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogNTZweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZS1mb250KTtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxufVxcbmgzIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1zdWItZm9udCk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBmb250LXNpemU6IDMycHg7XFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tZGVmYXVsdC1zaGFkb3cpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQxMik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgd2lkdGg6IDMwdmg7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmkge1xcbiAgY29sb3I6IHZhcigtLXNlbC10ZXh0LWNvbG9yKTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogY2FsYyg1cmVtICsgOHZ3KTtcXG4gIGhlaWdodDogY2FsYyg1cmVtICsgOHZ3KTtcXG59XFxuLm1lbnUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XFxufVxcbi5tZW51LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWVudS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcbmg1IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1kZWZhdWx0LXNoYWRvdyk7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhZGRyZXNzLmlubmVySFRNTCA9XG4gICAgXCIxMTkwMCBXaWxzaGlyZSBCbHZkLCBMb3MgQW5nZWxlcywgQ0EgOTAwMjUsIFVuaXRlZCBTdGF0ZXNcIjtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29uc3QgbWFwTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWFwTG9jYXRpb24uaW5uZXJIVE1MID0gYDxpZnJhbWUgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowXCIgbG9hZGluZz1cImxhenlcIiBhbGxvd2Z1bGxzY3JlZW4gc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkL3YxL3BsYWNlP3E9a2ZjJTIwbG9zJTIwYW5nZWxlcyZrZXk9QUl6YVN5QjluY0tHb3JCVVpHcF83RmppZ212bkpqd1M5X19aaHFNXCI+PC9pZnJhbWU+ICBgO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKG1hcExvY2F0aW9uKTtcbiAgcmV0dXJuIGNvbnRhY3Q7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBtYWluLmlubmVySFRNTCA9IGAgICAgICAgICAgICA8aDE+Q29tZSBmb3IgRGVsaWNpb3VzIGZvb2QhPC9oMT5cbiAgICAgICAgICAgIDxoMz50YXN0eSBhbmQgY2hlYXAhPC9oMz5cbiAgICAgICAgICAgIDxhcnRpY2xlPjxpIGNsYXNzPVwiZmkteG5zdXhsLW1hcC1tYXJrZXItc29saWRcIj48c3ZnIGNsYXNzPVwiZmktcGFkZGluZ1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCIgTSA1MDAgODhDIDU2NCA4OCA2MjggMTA4IDY4MCAxNDRDIDc5NCAyMjIgODQzIDM3OSA3OTQgNTA3QyA3NDQgNjEyIDY5MyA3MTYgNjQzIDgyMUMgNjE3IDg3MCA2MDEgOTMwIDU0OCA5NTdDIDQ5NCA5ODggNDI2IDk1NiAzOTggOTA0QyAzNDAgNzg4IDI4NSA2NzAgMjI4IDU1M0MgMTg3IDQ4MCAxNzYgMzkwIDIwMSAzMDlDIDIzNyAxODIgMzYyIDg4IDQ5NCA4OEMgNDk2IDg4IDQ5OCA4OCA1MDAgODhDIDUwMCA4OCA1MDAgODggNTAwIDg4TSAzODcgNDAwQyAzODcgNDYyIDQzOCA1MTIgNTAwIDUxMkMgNTYyIDUxMiA2MTMgNDYyIDYxMyA0MDBDIDYxMyAzMzggNTYyIDI4NyA1MDAgMjg3QyA0MzggMjg3IDM4NyAzMzggMzg3IDQwMEMgMzg3IDQwMCAzODcgNDAwIDM4NyA0MDBcIiB0cmFuc2Zvcm09XCJcIj48L3BhdGg+PC9zdmc+PC9pPjEwMjQgT2Frd29vZCBBdmVcbiAgICAgICAgICAgICAgICBTYW4gRGllZ28sIENBIDIyNDM0PC9hcnRpY2xlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmaS1jbnN1aGwtY2xvY2stc29saWRcIj48c3ZnIGNsYXNzPVwiZmktcGFkZGluZ1wiIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNIDUwMCAwQyAyMjQgMCAwIDIyNCAwIDUwMEMgMCA3NzYgMjI0IDEwMDAgNTAwIDEwMDBDIDc3NiAxMDAwIDEwMDAgNzc2IDEwMDAgNTAwQyAxMDAwIDIyNCA3NzYgMCA1MDAgMEMgNTAwIDAgNTAwIDAgNTAwIDAgTSA1NTAgMjUwQyA1NTAgMjUwIDU1MCA0NDUgNTUwIDQ0NUMgNTY1IDQ1OCA1NzUgNDc4IDU3NSA1MDBDIDU3NSA1NDEgNTQxIDU3NSA1MDAgNTc1QyA0OTkgNTc1IDQ5NyA1NzUgNDk2IDU3NUMgNDk2IDU3NSAyODUgNzg1IDI4NSA3ODVDIDI2NiA4MDUgMjM0IDgwNiAyMTQgNzg2QyAxOTQgNzY2IDE5NSA3MzQgMjE1IDcxNUMgMjE1IDcxNSA0MjUgNTA0IDQyNSA1MDRDIDQyNSA1MDMgNDI1IDUwMSA0MjUgNTAwQyA0MjUgNDc4IDQzNSA0NTggNDUwIDQ0NUMgNDUwIDQ0NSA0NTAgMjUwIDQ1MCAyNTBDIDQ1MCAyMjIgNDcyIDIwMCA0OTkgMTk5QyA1MjcgMTk5IDU1MCAyMjIgNTUwIDI1MEMgNTUwIDI1MCA1NTAgMjUwIDU1MCAyNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwMCwwKSBzY2FsZSgtMSwxKSBcIj48L3BhdGg+PC9zdmc+PC9pPk1vbi1UaHVyczogOGFtLThwbSA8YnI+XG4gICAgICAgICAgICAgICAgRnJpLVN1bjogOGFtLTExcG1cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5gO1xuXG4gIHJldHVybiBtYWluO1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBjcmVhdGVOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBoYW1idXJnZXIgZnJvbSBcIi4vaW1hZ2VzL2hhbWJ1cmdlci5wbmdcIjtcbmltcG9ydCBjaGVlc2VidXJnZXIgZnJvbSBcIi4vaW1hZ2VzL2NoZWVzZWJ1cmdlci5wbmdcIjtcbmltcG9ydCBkb3VibGVjaGVlc2UgZnJvbSBcIi4vaW1hZ2VzL2RvdWJsZWNoZWVzZS5wbmdcIjtcbmltcG9ydCBmcmVuY2ggZnJvbSBcIi4vaW1hZ2VzL2ZyZW5jaC1mcmllcy5wbmdcIjtcbmltcG9ydCByaWJzIGZyb20gXCIuL2ltYWdlcy9yaWJzLnBuZ1wiO1xuaW1wb3J0IHN0ZWFrIGZyb20gXCIuL2ltYWdlcy9zdGVhay5qcGdcIjtcbmltcG9ydCBkcmF3TWVudSBmcm9tIFwiLi9tZW51XCI7XG5leHBvcnQgY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgbmFtZTogXCJIYW1idXJnZXJcIixcbiAgICBkZXNjOiBcIkRlbGljaW91cyBoYW1idXJnZXIgeW91IGNhbnQgcGFzcyBvbiFcIixcbiAgICBwcmljZTogXCIxLjk5JFwiLFxuICAgIHBpYzogaGFtYnVyZ2VyLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDaGVlc2VidXJnZXJcIixcbiAgICBkZXNjOiBcIkhhbWJ1cmdlciB3aXRoIGNoZWVzZSBvbiB0b3AhIEFtYXppbmchXCIsXG4gICAgcHJpY2U6IFwiMi45OSRcIixcbiAgICBwaWM6IGNoZWVzZWJ1cmdlcixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRG91YmxlIENoZWVzZVwiLFxuICAgIGRlc2M6IFwiRG91YmxlIHRoZSBnb29kbmVzcyB5b3Uga25vdyBhbmQgbG92ZSFcIixcbiAgICBwcmljZTogXCI0Ljk5JFwiLFxuICAgIHBpYzogZG91YmxlY2hlZXNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGcmVuY2ggRnJpZXNcIixcbiAgICBkZXNjOiBcIllvdSBjYW4ndCBwYXNzIG9uIHRoZW0sIGNvbWVzIHdpdGgga2VjaHVwIVwiLFxuICAgIHByaWNlOiBcIi45OSRcIixcbiAgICBwaWM6IGZyZW5jaCxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQkJRIFJpYnNcIixcbiAgICBkZXNjOiBcIkRlbGljaW91cyBwbGF0ZSBvZiByaWJzIHdpdGggZXh0cmEgaG9tZW1hZGUgYmJxIHNhdWNlIVwiLFxuICAgIHByaWNlOiBcIjkuOTkkXCIsXG4gICAgcGljOiByaWJzLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTdGVha1wiLFxuICAgIGRlc2M6IFwiTWVkaXVtIHRvIHdlbGwgZG9uZSwgdG8geW91ciB0YXN0ZSFcIixcbiAgICBwcmljZTogXCIxMi45OSRcIixcbiAgICBwaWM6IHN0ZWFrLFxuICB9LFxuXTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpO1xuXG5jb25zdCBtZW51QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG5jb25zdCBjb250ZW50U2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4vLyBjb250ZW50U2VsZWN0b3IuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICByZXR1cm4gY29udGVudDtcbn1cbm1lbnVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgc3dpdGNoIChlLnRhcmdldC5pbm5lclRleHQpIHtcbiAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgIGNvbnRlbnRTZWxlY3Rvci5hcHBlbmRDaGlsZChob21lUGFnZSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTWVudVwiOlxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQpO1xuXG4gICAgICAgIGNvbnRlbnRTZWxlY3Rvci5hcHBlbmRDaGlsZChkcmF3TWVudSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQ29udGFjdCBVc1wiOlxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICBjb250ZW50U2VsZWN0b3IuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gIHJldHVybiAoY29udGVudFNlbGVjdG9yLmlubmVySFRNTCA9IFwiXCIpO1xufVxuIiwiaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSBcIi5cIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcblxuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcbiAgICBtZW51SXRlbS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2l0ZW0ucGljfVwiIGFsdD1cIlwiIHNyY3NldD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+JHtpdGVtLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT4ke2l0ZW0ucHJpY2V9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG1lbnU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHBhZ2VUaXRsZS5pbm5lckhUTUwgPSBcIk15LUZhc3QtRm9vZC1SZXN0YXJhdW50XCI7XG5cbiAgY29uc3QgcGFnZUVsZW1lbnRzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0IFVzXCJdO1xuICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBuYXZCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJuYXZsaXN0XCIpO1xuXG4gIHBhZ2VFbGVtZW50cy5mb3JFYWNoKChwYWdlRWxlbSkgPT4ge1xuICAgIGxldCBjdXJyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjdXJyRWxlbS5pbm5lckhUTUwgPSBgPGJ1dHRvbj4ke3BhZ2VFbGVtfTwvYnV0dG9uPmA7XG4gICAgbmF2QnV0dG9ucy5hcHBlbmRDaGlsZChjdXJyRWxlbSk7XG4gIH0pO1xuXG4gIG5hdmJhci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9ucyk7XG4gIHJldHVybiBuYXZiYXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=