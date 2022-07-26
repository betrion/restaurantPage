"use strict";
(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([["navbar"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/navbar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHBhZ2VUaXRsZS5pbm5lckhUTUwgPSBcIk15LUZhc3QtRm9vZC1SZXN0YXJhdW50XCI7XG5cbiAgY29uc3QgcGFnZUVsZW1lbnRzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0IFVzXCJdO1xuICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBuYXZCdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJuYXZsaXN0XCIpO1xuXG4gIHBhZ2VFbGVtZW50cy5mb3JFYWNoKChwYWdlRWxlbSkgPT4ge1xuICAgIGxldCBjdXJyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjdXJyRWxlbS5pbm5lckhUTUwgPSBgPGJ1dHRvbj4ke3BhZ2VFbGVtfTwvYnV0dG9uPmA7XG4gICAgbmF2QnV0dG9ucy5hcHBlbmRDaGlsZChjdXJyRWxlbSk7XG4gIH0pO1xuXG4gIG5hdmJhci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2QnV0dG9ucyk7XG4gIHJldHVybiBuYXZiYXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=