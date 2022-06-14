/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/async-module.js":
/*!*****************************!*\
  !*** ./src/async-module.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function getComponent() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "../node_modules/lodash/lodash.js", 23)).then(function (_ref) {
    var _ = _ref["default"];
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    return element;
  });
}

getComponent().then(function (element) {
  document.body.appendChild(element);
});

/***/ }),

/***/ "./src/hello-world.js":
/*!****************************!*\
  !*** ./src/hello-world.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);



function getString() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Hello world!');
    }, 2000);
  });
}

function helloWorld() {
  return _helloWorld.apply(this, arguments);
}

function _helloWorld() {
  _helloWorld = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var string;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getString();

          case 2:
            string = _context.sent;
            console.log(string);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _helloWorld.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloWorld);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world */ "./src/hello-world.js");
/* harmony import */ var _assets_bear_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/bear.png */ "./src/assets/bear.png");
/* harmony import */ var _assets_Shape_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Shape.svg */ "./src/assets/Shape.svg");
/* harmony import */ var _assets_example_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/example.txt */ "./src/assets/example.txt");
/* harmony import */ var _assets_diyEgg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/diyEgg.jpg */ "./src/assets/diyEgg.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.less */ "./src/style.less");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/data.csv */ "./src/assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/data.xml */ "./src/assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_data_toml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/data.toml */ "./src/assets/data.toml");
/* harmony import */ var _assets_data_yaml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/data.yaml */ "./src/assets/data.yaml");
/* harmony import */ var _assets_data_json5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/data.json5 */ "./src/assets/data.json5");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _async_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./async-module */ "./src/async-module.js");
/* harmony import */ var _async_module__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_async_module__WEBPACK_IMPORTED_MODULE_13__);














(0,_hello_world__WEBPACK_IMPORTED_MODULE_0__["default"])();
var img = document.createElement('img');
img.src = _assets_bear_png__WEBPACK_IMPORTED_MODULE_1__;
document.body.appendChild(img);
var img2 = document.createElement('img');
img2.src = _assets_Shape_svg__WEBPACK_IMPORTED_MODULE_2__;
img2.style.cssText = 'width: 600px; height: 200px';
document.body.appendChild(img2);
var block = document.createElement('div');
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue';
block.classList.add('block-bg');
block.textContent = _assets_example_txt__WEBPACK_IMPORTED_MODULE_3__;
document.body.appendChild(block);
var img3 = document.createElement('img');
img3.style.cssText = 'width: 400px; height: 400px; display: block';
img3.src = _assets_diyEgg_jpg__WEBPACK_IMPORTED_MODULE_4__;
document.body.appendChild(img3);
document.body.classList.add('hello');
var span = document.createElement('span');
span.classList.add('icon');
span.innerHTML = '&#xe639;';
document.body.appendChild(span);
console.log((_assets_data_csv__WEBPACK_IMPORTED_MODULE_7___default()));
console.log((_assets_data_xml__WEBPACK_IMPORTED_MODULE_8___default()));
console.log(_assets_data_toml__WEBPACK_IMPORTED_MODULE_9__.title);
console.log(_assets_data_toml__WEBPACK_IMPORTED_MODULE_9__.owner.name);
console.log(_assets_data_yaml__WEBPACK_IMPORTED_MODULE_10__.title);
console.log(_assets_data_yaml__WEBPACK_IMPORTED_MODULE_10__.owner.name);
console.log(_assets_data_json5__WEBPACK_IMPORTED_MODULE_11__.title);
console.log(_assets_data_json5__WEBPACK_IMPORTED_MODULE_11__.owner.name);
console.log(lodash__WEBPACK_IMPORTED_MODULE_12___default().join(['index', 'module', 'loaded'], ' '));
var button = document.createElement('button');
button.textContent = '点击加法';
button.addEventListener('click', function () {
  __webpack_require__.e(/*! import() | math */ "math").then(__webpack_require__.bind(__webpack_require__, /*! ./math */ "./src/math.js")).then(function (_ref) {
    var add = _ref.add;
    console.log(add(4, 5));
  });
});
document.body.appendChild(button);

/***/ }),

/***/ "./src/assets/data.csv":
/*!*****************************!*\
  !*** ./src/assets/data.csv ***!
  \*****************************/
/***/ ((module) => {

module.exports = [["asd","asda","fasfas","asdas"],["sadsa","asdasd","asdasd","asd"],["asdas","asdas","sda","asd"],["sdf","sdf","sdaf","sdf"]]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/data.xml":
/*!*****************************!*\
  !*** ./src/assets/data.xml ***!
  \*****************************/
/***/ ((module) => {

module.exports = {"note":{"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]}}

/***/ }),

/***/ "./src/assets/Shape.svg":
/*!******************************!*\
  !*** ./src/assets/Shape.svg ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMTIyIDMzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Mi43MDE5IDE4LjE1NUM4Mi40MTcgMTkuMjEwMiA4MS41MjM1IDE5LjA3MTUgODEuMzAwMiAxOC42MTcxVjE4LjYwOTRDODEuMTcyNyAxOC4zNSA4MS4xMDQ1IDE4LjI5MjMgODAuOTk4NCAxOC4yMDI2QzgwLjkyNSAxOC4xNDA2IDgwLjgzMzUgMTguMDYzMiA4MC42OTE3IDE3Ljg5MzFDNzguNTE5OCAxNS42NTE5IDc2LjMwMTYgMTcuNTQ2NSA3NC44NjkgMTkuMzEwM0M3Mi40NzM3IDIxLjk3NTIgNjkuNjQ3MSAzMS4zMDIyIDcyLjcyNzkgMjkuNjMwOUM3NS4yNTgxIDI4LjM5MzEgNzcuNDY4IDI0LjY3NDQgNzguOTQzNSAyMi4xOTE3Qzc5LjM0MDkgMjEuNTIzIDc5LjY4NSAyMC45NDM5IDc5Ljk2NzcgMjAuNTI3MkM4MS4zMDAyIDE4LjU2MzIgODMuNTU2OCAxOS40NjQzIDgzLjIxMDMgMjEuNzIxQzgzLjE5NDQgMjEuODI3NCA4My4xNzE1IDIxLjk2NjQgODMuMTQ0MiAyMi4xMzIyQzgyLjk0NjMgMjMuMzM0MyA4Mi41MTY2IDI1Ljk0NDUgODIuODQ4MyAyNy43NTE2QzgzLjE5MTIgMjkuNjIwMSA4NS4wOTE5IDI3LjI4NTYgODUuOTUwNyAyNi4yMzA5Qzg2LjAzNyAyNi4xMjQ4IDg2LjExMjkgMjYuMDMxNyA4Ni4xNzU1IDI1Ljk1NzFDODUuNzIwNSAyMy4wNTI0IDg2LjIyMzQgMjAuMDc4NSA4Ny42MDgxIDE3LjQ4NDlDOTAuOTg5MiAxMS4yMjMyIDk3LjY3NDUgMTMuMTk0OSA5NS45NjQ3IDE4LjY3ODdDOTUuMjA3OSAyMS4yOCA5My4yNjU5IDIzLjM3MDUgOTAuNzI3NCAyNC4zMTY2Qzg5LjcxODQgMjQuNjk0IDg5LjAzMjkgMjMuNjIzNCA5MC4xMDM1IDIyLjc3NjJDOTEuNDAyNSAyMS45NTQ3IDkyLjQzOTQgMjAuNzc4OSA5My4wOTE5IDE5LjM4NzNDOTQuMDQ2OSAxNy41OTI3IDkyLjk3NjMgMTYuMTM3MSA5MS4yMjggMTcuMzg0OEM4OC42NDAxIDE5LjI1NjQgODcuNDAwMSAyNy41ODk5IDkxLjMxMjcgMzAuMDM5MUM5NS4wNDA1IDMxLjk2NDYgOTcuOTM2NCAyOC4xMDU5IDEwMC41NTUgMjMuMzE1M0M5OS4xOTE4IDE3LjgwMDcgOTkuNDkyMiA4LjA5NjIzIDEwMy4zNDMgMy4xMTMwN0MxMDcuMzcxIC0yLjA3ODA1IDExMy4wMTcgLTAuMDI5MzMzMSAxMTMuMTE3IDMuODIxNjVDMTEzLjIzIDkuMDc3MyAxMDkuMDk0IDE2LjM4MDYgMTA3LjE5NSAxOS43MzQzQzEwNi43NjUgMjAuNDk0MiAxMDYuNDQ5IDIxLjA1MTMgMTA2LjMyNCAyMS4zMzU5QzEwNS44NjkgMjIuMzUyNiAxMDQuMzk4IDIxLjk1OTggMTA1LjA5OSAyMC40MTk0QzEwOS45MjggMTEuNzYyNCAxMTAuMjA2IDUuMTg0ODkgMTEwLjAyOCAzLjY5ODQxQzEwOS43MTMgMC45OTUwMjcgMTA3LjUxIDEuNjI2NTkgMTA1LjQwNyAzLjkzNzE4QzEwMC40ODYgMTAuODIyNyAxMDIuNzEyIDIxLjA2NjMgMTA0LjI1MiAyNi45MTk4QzEwNC40ODUgMjcuNzk2MiAxMDQuNzQ2IDI4LjU3MzMgMTA0Ljk2NSAyOS4yMjZDMTA1LjI2MSAzMC4xMDQ5IDEwNS40OCAzMC43NTgzIDEwNS40NTQgMzEuMTI1MUMxMDUuMzMgMzMuMTI3NiAxMDMuNjkgMzIuODUwMyAxMDIuOTIgMzEuMzA5OUMxMDIuMjY3IDI5LjgzODEgMTAxLjc1MSAyOC4zMDkyIDEwMS4zNzkgMjYuNzQyN0M5Ny40ODIgMzIuOTExOSA5Mi4xOTA3IDMzLjMyNzkgODkuMjMzMiAzMS4zMDIyQzg4LjE5NTUgMzAuNTI2IDg3LjM0OTcgMjkuNTIyMSA4Ni43NjA5IDI4LjM2NzhDODIuNjk0MiAzMi4yNDE5IDc5LjI4MjMgMjkuNjIzMiA3OS4xNTkgMjUuNjAyOEM3OS4xMTcyIDI1LjY1ODEgNzkuMDU4MSAyNS43NDAyIDc4Ljk4MjYgMjUuODQ0OUM3OC4yODEyIDI2LjgxOTEgNzYuMTY2NyAyOS43NTU3IDczLjMzNjMgMzEuNDE3OEM3MC43NDg1IDMyLjkyNzMgNjguNTIyNiAzMi4wMzM5IDY4LjMyMjQgMjkuNTg0N0M2OC4wNDUxIDI0Ljk4NjYgNzIuNTUwOCAxOC42Nzg3IDc0LjA5MTEgMTYuOTY4OUM3NS43NjI1IDE1LjEyODEgNzcuNDI2MSAxMy44ODgxIDc5LjcxMzYgMTMuOTU3NEM4Mi4wMDExIDE0LjAyNjcgODMuMDI1NCAxNi45Njg5IDgyLjcwMTkgMTguMTU1Wk0zMi41MjM3IDI4LjE1MjFDMzEuMzI5OSAyMi4yNzU1IDM0LjA3OTUgMTYuNTIyMiAzNC45MTkgMTUuODI5SDM0Ljk0MjFDMzUuNTQ5MiAxNS4yNTE0IDM2LjQ2NzIgMTUuMTUgMzcuMTg1NyAxNS41ODEyQzM3LjkwNDMgMTYuMDEyMyAzOC4yNDY4IDE2Ljg3IDM4LjAyMjkgMTcuNjc3NUMzNy44MTQgMTguNTE4IDM3LjUzNTcgMTkuMzM5OCAzNy4xOTExIDIwLjEzNDRDMzYuMjI4MiAyMi42ODY0IDM1Ljc0MjYgMjUuMzkzNyAzNS43NTg1IDI4LjEyMTNDMzYuMDM2OSAzMi4yNzY0IDM3LjY3ODYgMzAuOTQ1MyAzOC4xNTAxIDMwLjU2MzFMMzguMTUwMSAzMC41NjMxQzM4LjE4NzMgMzAuNTMyOSAzOC4yMTcxIDMwLjUwODcgMzguMjM4NSAzMC40OTM1QzM4LjUzMTIgMzAuMjg1NiAzOS43NjM1IDI4Ljk1MzEgNDAuMjcxOCAyNS44MDNDNDAuNjU2OSAyMy40MTU0IDQyLjA4MTggMTcuNzMxNCA0Ni45NTcxIDE1LjM0MzhDNTAuMjkyMSAxMy43MjY0IDUyLjY3OTcgMTUuNTY3MSA1Mi43NDkgMTcuNjU0NEM1Mi44MTgzIDE5Ljc0MTYgNTAuNSAxOS4zMTAzIDQ5Ljg5OTMgMTguNTk0QzQ5Ljg2NzEgMTguNTUxNiA0OS44MzM2IDE4LjUwNTggNDkuNzk4NSAxOC40NTc5QzQ5LjQzOTEgMTcuOTY2NyA0OC45MTYyIDE3LjI1MjMgNDcuOTk2OSAxNy42MzEzQzQ2LjE1NjEgMTguMzg2MSA0My42OTE1IDIyLjMzNzIgNDMuNzYwOCAyNi43NzM1QzQzLjgzMDEgMzEuMjA5OCA0Ny45MDQ1IDMwLjMzOTUgNTAuMzE1MiAyOC41MjE4QzUyLjcyNTkgMjYuNzA0MiA1NC4zMTI1IDIyLjQ5ODkgNTQuNDUxMSAyMS40ODk5QzU0Ljc3NDYgMTUuNjI4NyA1OC43MjU3IDMuMTA1MzYgNjAuNjEyNyAxLjA3OTc1QzYyLjY2MTQgLTEuMTMwNzEgNjQuNTE3NiAxLjAwMjczIDY0LjA1NTUgMS44NDk5NEM2My41MTMzIDMuMTcxMjggNjIuOTE4MyA0LjUzMzk1IDYyLjMwODQgNS45MzA4NUM1OS42MDg0IDEyLjExNDUgNTYuNjE1NCAxOC45NjkxIDU2LjYxNTQgMjUuODgwMUM1OC40MjU0IDIwLjU1MDMgNjEuOTYwNiAxNi4zNTI3IDY1LjU5NTkgMTUuODI5QzY4Ljk1MzkgMTUuMzM2MSA2OS41MDA4IDE3LjczMTQgNjguNzMwNiAxOS43MjYyQzY4LjYwMjMgMjAuMDU4NSA2OC40NTM1IDIwLjQwMDYgNjguMjk2MSAyMC43NjI0TDY4LjI5NiAyMC43NjI3QzY3LjUwODYgMjIuNTcyNyA2Ni41MDczIDI0Ljg3NDggNjYuNzg5NyAyOC44OTkyQzY2LjgwMTYgMjkuMDU4NCA2Ni44MTc1IDI5LjIzMjcgNjYuODM0MSAyOS40MTZDNjYuOTM2MSAzMC41MzY3IDY3LjA2ODQgMzEuOTkxMiA2Ni41MTI0IDMyLjM0MkM2NC45NzIgMzMuMzA0NyA2NC4yNDggMzEuMzAyMiA2NC4yMDE4IDI5LjA5OTVDNjQuMTYyNCAyNy4yMjIyIDY1LjIwODMgMjMuMzMxMiA2NS42NDIyIDIxLjcxNjlMNjUuNjQyMiAyMS43MTY4TDY1LjY0MjMgMjEuNzE2NEM2NS43MTc1IDIxLjQzNjcgNjUuNzc0MyAyMS4yMjU0IDY1LjgwMzggMjEuMTA0OEM2Ni42MzU2IDE3Ljc1NDUgNjMuNTQ3MiAxOS4wMTc2IDYyLjYzODMgMTkuOTU3M0M1OS41NzEyIDIzLjEzMjcgNTguMDk5MiAyOC4yMzY3IDU3LjUyMTIgMzAuMjQwOEM1Ny40NDE3IDMwLjUxNjQgNTcuMzc5MiAzMC43MzM0IDU3LjMzMTcgMzAuODc4NkM1Ni44Njk2IDMyLjMwMzUgNTUuMDgyNyAzMS42MzM0IDU0LjcyMDcgMjkuOTkyOUM1NC40MjkgMjguOTAwNSA1NC4yNTYgMjcuNzc5OCA1NC4yMDQ3IDI2LjY1MDNDNTAuMzIyOSAzMi4yNzI3IDQyLjk0NDQgMzQuMzY3NiA0MC44NDk1IDI5Ljc5MjdDMzcuMDc1NSAzNC4yNjc1IDMzLjY3OSAzMy4wNDI5IDMyLjUyMzcgMjguMTUyMVpNMjkuOTEyNyAyOC42Mzc0QzI5LjI0MjYgMjYuMDM0MSAyOS42NTg1IDIwLjY2NTggMzAuMDY2NyAxNy41MjM0QzMwLjQyODcgMTQuODYyNyAzMC45NzI4IDEyLjc2MDEgMzEuNDQ4NiAxMC45MjEyTDMxLjQ0ODYgMTAuOTIxMkMzMS45ODUxIDguODQ3NzEgMzIuNDM0OSA3LjEwOTYzIDMyLjQzODkgNS4yODUwMkMzMi40Mzg5IDMuNjgzMDEgMzEuOTM4MyAwLjM2MzQ2NyAyOC40MzM5IDAuMjI0ODMxQzE5Ljc4NDYgLTAuMDY3ODQzIDE2LjU5NiAyMC45NjYyIDE2LjE2NDcgMjMuOTM5MkMxNi4xMDMgMjMuNDY0MSAxNi4wNzQ5IDIyLjIxMTggMTYuMDM3NSAyMC41NDJWMjAuNTQyVjIwLjU0MTlWMjAuNTQxOEMxNS45Njc2IDE3LjQyMDEgMTUuODY0OSAxMi44Mzk1IDE1LjQ0ODQgOS4xNTE0QzE0LjUzMTkgMC43ODcwNzUgMTIuNzIxOSAwLjMwOTU1MyAxMC45MzUxIDAuMTcwOTE4QzUuMDIxNjIgLTAuMjY1NTUyIDQuMTI3MTcgMTAuMTI3NCA0LjA4MTc4IDIxLjAxMDNDNC4wMDI1OSAxOC42Mjc0IDMuNjI5NjggMTUuODQ4NiAyLjEwMDkzIDE0LjE1QzAuOTY4NzQ0IDEyLjg5NDYgLTAuNzc5NjAxIDEzLjAxNzggMC4zODMzOTUgMTQuNjg5MUMwLjQ0Njk1MyAxNC43NzUxIDAuNTEyMzI1IDE0LjkxMTkgMC41ODMwMzcgMTUuMDU5OUMwLjY1Nzk5NSAxNS4yMTY3IDAuNzM4OTUzIDE1LjM4NjIgMC44MzAxMDkgMTUuNTIwOUMxLjg4OTU5IDE3LjExOTIgMi4zNDQ5NyAyMC45ODA4IDIuNzcxNDYgMjQuNTk3M0MzLjI0NzE4IDI4LjYzMTMgMy42ODY5NSAzMi4zNjAzIDQuODg5MDQgMzIuMzAzNUM1LjYwNTMyIDMyLjMwMzUgNi42ODM2IDMxLjk4IDYuNTkxMTcgMjguOTQ1NEM2LjMyMTYxIDE5Ljc5NTUgNy4wMTQ3OCAzLjQxMzQ0IDEwLjEzNDEgMy4zOTgwNEMxMi40MTMgMy4zOTgwNCAxMi43NzIgMTEuMTM5NyAxMy4wOTEzIDE4LjAyMzdDMTMuMjM1IDIxLjEyMDcgMTMuMzcwNSAyNC4wNDQxIDEzLjY2OTMgMjYuMDExQzE0LjIwODQgMjkuMjIyNyAxNy41MjAzIDI5LjQ5MjMgMTguNTkwOCAyNC45MjVDMTguOTU3MSAyMy4zMDQzIDE5LjIzMSAyMS44MzggMTkuNDkyMyAyMC40Mzg5TDE5LjQ5MjMgMjAuNDM4OEMyMC4yMTQ2IDE2LjU3MiAyMC44NDEgMTMuMjE4MSAyMy4wNTggOC41MzUyNEMyNy4wNzA3IDAuMDYzMDkgMzAuMzgyNSAyLjg1ODkgMjguOTU3NyA4Ljc0MzJDMjguODczOCA5LjA3MTg3IDI4Ljc3MDUgOS40NTEwMiAyOC42NTQ2IDkuODc2NTZDMjcuNzA1NyAxMy4zNTk5IDI1LjkxMDEgMTkuOTUxMyAyNy4wMDE0IDI3LjQwNUMyNy4zNTU3IDI5LjgzODkgMjguOTI2OSAzMi45MTk2IDMwLjA4MjEgMzIuMjU3M0MzMC43MTk2IDMxLjg5ODMgMzAuNDQ0IDMwLjgyODQgMjkuOTY0OCAyOC45NjhMMjkuODg5NiAyOC42NzU5TDI5LjkxMjcgMjguNjM3NFpNMTE3Ljk3NyAxNi4zMjE5QzExNy4zNTMgMTQuMjQyNCAxMTIuNjg2IDE1LjIyMDUgMTEzLjcxOCAxNy43MzkxQzExNC4wNzggMTguNjMwMiAxMTUuMjY0IDE5LjM0NzIgMTE2LjY0MyAyMC4xODE0QzExOC4yMDggMjEuMTI4MyAxMjAuMDIzIDIyLjIyNjEgMTIxLjE2NiAyMy45MDA3QzEyNC41MDggMjguODUzIDExNy4wOTkgMzQuMzY3NiAxMTEuNSAzMS43MjU4QzEwNy41NDggMjkuODY5NyAxMDcuNTMzIDI2Ljk4MTQgMTA3Ljc5NSAyNS43OTUzQzEwOC4xNzIgMjQuMDM5MyAxMTAuMTA1IDI0LjAwODUgMTEwLjM3NSAyNC45NDA0QzExMC42MDMgMjYuMDE0MSAxMTAuMzcyIDI2LjM3NjggMTEwLjE4NCAyNi42NzIyQzExMC4wNzMgMjYuODQ1MiAxMDkuOTc4IDI2Ljk5NTEgMTA5Ljk5OCAyNy4yNTFDMTEwLjMwNiAzMC4wNjIyIDExNC44OTYgMzEuMjYzNyAxMTcuMzA3IDI4Ljc5MTRDMTIwLjYxOSAyNS40MzMzIDExNy43MTUgMjMuMjYxNCAxMTcuMTM3IDIyLjg0NTVDMTE2LjU3NSAyMi40Mzc1IDExNS45MjcgMjIuMTQxNSAxMTUuMjY3IDIxLjgzOTNDMTE0LjExOSAyMS4zMTQzIDExMi45MyAyMC43NzA0IDExMi4wNjkgMTkuNTg3NkMxMDkuMTQzIDE1LjU5MDIgMTEzLjY4NyAxMi4xMjQ0IDExNy4wMTQgMTMuMTI1NkMxMTguNTU1IDEzLjU4NzcgMTE5Ljc1NiAxNC42NjYgMTE5LjQ2MyAxNi4xMjk0QzExOS4yMTcgMTcuMzM4NiAxMTguMjU0IDE3LjIzMDggMTE3Ljk3NyAxNi4zMTQyVjE2LjMyMTlaTTM4LjQxNTcgOS40NTk0OEMzNy42MTQ0IDkuNTg0OSAzNi45MjIgMTAuMDg3NCAzNi41NTQ0IDEwLjgxMDRDMzYuMTg2OCAxMS41MzM0IDM2LjE4ODcgMTIuMzg4OSAzNi41NTk1IDEzLjExMDJDMzYuOTg5NiAxMy44MTQ3IDM3Ljg2OCAxNC4xMDIgMzguNjMxMyAxMy43ODhDMzkuNjYwNCAxMy4yNzMgNDAuMzg1NyAxMi4zMDIyIDQwLjU4NzYgMTEuMTY5M0M0MC41ODc2IDEwLjA1MjUgMzkuOTQ4NCA5LjMyMDg0IDM4LjQxNTcgOS40NDQwOFY5LjQ1OTQ4WiIgZmlsbD0iI0NGMUYyRSIvPg0KPC9zdmc+DQo=";

/***/ }),

/***/ "./src/assets/bear.png":
/*!*****************************!*\
  !*** ./src/assets/bear.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/33ca64fa4f30f974a9e4.png";

/***/ }),

/***/ "./src/assets/example.txt":
/*!********************************!*\
  !*** ./src/assets/example.txt ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = "hello webpack";

/***/ }),

/***/ "./src/assets/diyEgg.jpg":
/*!*******************************!*\
  !*** ./src/assets/diyEgg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/88b49ac62f3d9ffe1e63.jpg";

/***/ }),

/***/ "./src/assets/data.json5":
/*!*******************************!*\
  !*** ./src/assets/data.json5 ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"JSON5 Example","owner":{"name":"Tom Preston-Werner","organization":"Github","bio":"Github Cof0under & CEO\\n          Likes tater tots and beer","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ }),

/***/ "./src/assets/data.toml":
/*!******************************!*\
  !*** ./src/assets/data.toml ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"TOML Example","owner":{"name":"Tom Preston-Werner","organization":"Github","bio":"Github Cof0under & CEO\\\\Likes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ }),

/***/ "./src/assets/data.yaml":
/*!******************************!*\
  !*** ./src/assets/data.yaml ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"YAML Example","owner":{"name":"Tom Preston-Werner","organization":"Github","bio":"Github Cof0under & CEO\\nLikes tater tots and beer","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk prefetch function */
/******/ 	(() => {
/******/ 		__webpack_require__.F = {};
/******/ 		__webpack_require__.E = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.F).map((key) => {
/******/ 				__webpack_require__.F[key](chunkId);
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "scripts/" + chunkId + "." + "e71a21985a160dd8a031" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.F.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && true) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "prefetch";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup prefetch */
/******/ 	(() => {
/******/ 		__webpack_require__.O(0, ["index"], () => {
/******/ 			__webpack_require__.E("math");
/******/ 		}, 5);
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vonders"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9pbmRleC42YzMyZWNhNWY4ZDk1OGI2MDFmZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxTQUFTQSxZQUFULEdBQXdCO0VBQ3RCLE9BQU8sNklBQ0pDLElBREksQ0FDQyxnQkFBb0I7SUFBQSxJQUFSQyxDQUFRO0lBQ3hCLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0lBQ0FGLE9BQU8sQ0FBQ0csU0FBUixHQUFvQkosQ0FBQyxDQUFDSyxJQUFGLENBQU8sQ0FBQyxPQUFELEVBQVUsU0FBVixDQUFQLEVBQTZCLEdBQTdCLENBQXBCO0lBQ0EsT0FBT0osT0FBUDtFQUNELENBTEksQ0FBUDtBQU1EOztBQUVESCxZQUFZLEdBQUdDLElBQWYsQ0FBb0IsVUFBQ0UsT0FBRCxFQUFhO0VBQy9CQyxRQUFRLENBQUNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sT0FBMUI7QUFDRCxDQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQSxTQUFTTyxTQUFULEdBQXFCO0VBQ25CLE9BQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtJQUN0Q0MsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDLGNBQUQsQ0FBUDtJQUNELENBRlMsRUFFUCxJQUZPLENBQVY7RUFHRCxDQUpNLENBQVA7QUFLRDs7U0FFY0c7Ozs7O3lMQUFmO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO1lBQUEsT0FDdUJMLFNBQVMsRUFEaEM7O1VBQUE7WUFDUU0sTUFEUjtZQUVFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7VUFGRjtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUE7RUFBQTs7OztBQUtBLGlFQUFlRCxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7V0NsR0E7V0FDQTtXQUNBLENBQUM7Ozs7O1VFRkQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hc3luYy1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbGxvLXdvcmxkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2RhdGEuY3N2Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/ODdmMSIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUubGVzcz84ZTc0Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS54bWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgcHJlZmV0Y2ggZnVuY3Rpb24iLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvc3RhcnR1cCBwcmVmZXRjaCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xyXG4gIHJldHVybiBpbXBvcnQoJ2xvZGFzaCcpXHJcbiAgICAudGhlbigoeyBkZWZhdWx0OiBfIH0pID0+IHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnaGVsbG8nLCAnd2VicGFjayddLCAnICcpXHJcbiAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9KVxyXG59XHJcblxyXG5nZXRDb21wb25lbnQoKS50aGVuKChlbGVtZW50KSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG59KSIsImZ1bmN0aW9uIGdldFN0cmluZygpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHJlc29sdmUoJ0hlbGxvIHdvcmxkIScpXHJcbiAgICB9LCAyMDAwKVxyXG4gIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhlbGxvV29ybGQoKSB7XHJcbiAgY29uc3Qgc3RyaW5nID0gYXdhaXQgZ2V0U3RyaW5nKClcclxuICBjb25zb2xlLmxvZyhzdHJpbmcpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWxsb1dvcmxkIiwiaW1wb3J0IGhlbGxvV29ybGQgZnJvbSAnLi9oZWxsby13b3JsZCdcclxuaW1wb3J0IGltZ1NyYyBmcm9tICcuL2Fzc2V0cy9iZWFyLnBuZydcclxuaW1wb3J0IGxvZ29TdmcgZnJvbSAnLi9hc3NldHMvU2hhcGUuc3ZnJ1xyXG5pbXBvcnQgZXhhbXBsZVRleHQgZnJvbSAnLi9hc3NldHMvZXhhbXBsZS50eHQnXHJcbmltcG9ydCBqcGdNYXAgZnJvbSAnLi9hc3NldHMvZGl5RWdnLmpwZydcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0ICcuL3N0eWxlLmxlc3MnXHJcbmltcG9ydCBEYXRhIGZyb20gJy4vYXNzZXRzL2RhdGEuY3N2J1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuL2Fzc2V0cy9kYXRhLnhtbCdcclxuaW1wb3J0IHRvbWwgZnJvbSAnLi9hc3NldHMvZGF0YS50b21sJ1xyXG5pbXBvcnQgeWFtbCBmcm9tICcuL2Fzc2V0cy9kYXRhLnlhbWwnXHJcbmltcG9ydCBqc29uNSBmcm9tICcuL2Fzc2V0cy9kYXRhLmpzb241J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCAnLi9hc3luYy1tb2R1bGUnXHJcblxyXG5oZWxsb1dvcmxkKClcclxuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuaW1nLnNyYyA9IGltZ1NyY1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZylcclxuXHJcbmNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5pbWcyLnNyYyA9IGxvZ29TdmdcclxuaW1nMi5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA2MDBweDsgaGVpZ2h0OiAyMDBweCdcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcyKVxyXG5cclxuY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5ibG9jay5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiAyMDBweDsgaGVpZ2h0OiAyMDBweDsgYmFja2dyb3VuZDogYWxpY2VibHVlJ1xyXG5ibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jay1iZycpXHJcbmJsb2NrLnRleHRDb250ZW50ID0gZXhhbXBsZVRleHRcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChibG9jaylcclxuXHJcbmNvbnN0IGltZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5pbWczLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDQwMHB4OyBoZWlnaHQ6IDQwMHB4OyBkaXNwbGF5OiBibG9jaydcclxuaW1nMy5zcmMgPSBqcGdNYXBcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWczKVxyXG5cclxuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWxsbycpXHJcblxyXG5jb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbnNwYW4uY2xhc3NMaXN0LmFkZCgnaWNvbicpXHJcbnNwYW4uaW5uZXJIVE1MID0gJyYjeGU2Mzk7J1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW4pXHJcblxyXG5jb25zb2xlLmxvZyhEYXRhKTtcclxuY29uc29sZS5sb2coTm90ZSk7XHJcblxyXG5jb25zb2xlLmxvZyh0b21sLnRpdGxlKTtcclxuY29uc29sZS5sb2codG9tbC5vd25lci5uYW1lKTtcclxuY29uc29sZS5sb2coeWFtbC50aXRsZSk7XHJcbmNvbnNvbGUubG9nKHlhbWwub3duZXIubmFtZSk7XHJcbmNvbnNvbGUubG9nKGpzb241LnRpdGxlKTtcclxuY29uc29sZS5sb2coanNvbjUub3duZXIubmFtZSk7XHJcblxyXG5jb25zb2xlLmxvZyhfLmpvaW4oWydpbmRleCcsICdtb2R1bGUnLCAnbG9hZGVkJ10sICcgJykpO1xyXG5cclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuYnV0dG9uLnRleHRDb250ZW50ID0gJ+eCueWHu+WKoOazlSdcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbWF0aCcsIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSAqLycuL21hdGgnKS50aGVuKCh7IGFkZCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhZGQoNCwgNSkpO1xyXG4gIH0pXHJcbn0pXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKSIsIm1vZHVsZS5leHBvcnRzID0gW1tcImFzZFwiLFwiYXNkYVwiLFwiZmFzZmFzXCIsXCJhc2Rhc1wiXSxbXCJzYWRzYVwiLFwiYXNkYXNkXCIsXCJhc2Rhc2RcIixcImFzZFwiXSxbXCJhc2Rhc1wiLFwiYXNkYXNcIixcInNkYVwiLFwiYXNkXCJdLFtcInNkZlwiLFwic2RmXCIsXCJzZGFmXCIsXCJzZGZcIl1dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5GID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkUgPSAoY2h1bmtJZCkgPT4ge1xuXHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLkYpLm1hcCgoa2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5GW2tleV0oY2h1bmtJZCk7XG5cdH0pO1xufSIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcInNjcmlwdHMvXCIgKyBjaHVua0lkICsgXCIuXCIgKyBcImU3MWEyMTk4NWExNjBkZDhhMDMxXCIgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbi8vIGRhdGEtd2VicGFjayBpcyBub3QgdXNlZCBhcyBidWlsZCBoYXMgbm8gdW5pcXVlTmFtZVxuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5GLmogPSAoY2h1bmtJZCkgPT4ge1xuXHRpZigoIV9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpIHx8IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gdW5kZWZpbmVkKSAmJiB0cnVlKSB7XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gbnVsbDtcblx0XHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRsaW5rLnJlbCA9IFwicHJlZmV0Y2hcIjtcblx0XHRsaW5rLmFzID0gXCJzY3JpcHRcIjtcblx0XHRsaW5rLmhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcblx0fVxufTtcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rXCJdID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5PKDAsIFtcImluZGV4XCJdLCAoKSA9PiB7XG5cdF9fd2VicGFja19yZXF1aXJlX18uRShcIm1hdGhcIik7XG59LCA1KTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2b25kZXJzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZ2V0Q29tcG9uZW50IiwidGhlbiIsIl8iLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiam9pbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdldFN0cmluZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImhlbGxvV29ybGQiLCJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwiaW1nU3JjIiwibG9nb1N2ZyIsImV4YW1wbGVUZXh0IiwianBnTWFwIiwiRGF0YSIsIk5vdGUiLCJ0b21sIiwieWFtbCIsImpzb241IiwiaW1nIiwic3JjIiwiaW1nMiIsInN0eWxlIiwiY3NzVGV4dCIsImJsb2NrIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJpbWczIiwic3BhbiIsInRpdGxlIiwib3duZXIiLCJuYW1lIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=