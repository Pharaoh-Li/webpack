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
/******/ 			return "" + chunkId + ".bundle.js";
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
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 		// no prefetching
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lodash_lodash_js","vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-58772e"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFZO1dBQ2xEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFckZBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxsby13b3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhLmNzdiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzg3ZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmxlc3M/OGU3NCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2RhdGEueG1sIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcclxuICByZXR1cm4gaW1wb3J0KCdsb2Rhc2gnKVxyXG4gICAgLnRoZW4oKHsgZGVmYXVsdDogXyB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ2hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKVxyXG4gICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfSlcclxufVxyXG5cclxuZ2V0Q29tcG9uZW50KCkudGhlbigoZWxlbWVudCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxufSkiLCJmdW5jdGlvbiBnZXRTdHJpbmcoKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKCdIZWxsbyB3b3JsZCEnKVxyXG4gICAgfSwgMjAwMClcclxuICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoZWxsb1dvcmxkKCkge1xyXG4gIGNvbnN0IHN0cmluZyA9IGF3YWl0IGdldFN0cmluZygpXHJcbiAgY29uc29sZS5sb2coc3RyaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVsbG9Xb3JsZCIsImltcG9ydCBoZWxsb1dvcmxkIGZyb20gJy4vaGVsbG8td29ybGQnXHJcbmltcG9ydCBpbWdTcmMgZnJvbSAnLi9hc3NldHMvYmVhci5wbmcnXHJcbmltcG9ydCBsb2dvU3ZnIGZyb20gJy4vYXNzZXRzL1NoYXBlLnN2ZydcclxuaW1wb3J0IGV4YW1wbGVUZXh0IGZyb20gJy4vYXNzZXRzL2V4YW1wbGUudHh0J1xyXG5pbXBvcnQganBnTWFwIGZyb20gJy4vYXNzZXRzL2RpeUVnZy5qcGcnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5sZXNzJ1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuL2Fzc2V0cy9kYXRhLmNzdidcclxuaW1wb3J0IE5vdGUgZnJvbSAnLi9hc3NldHMvZGF0YS54bWwnXHJcbmltcG9ydCB0b21sIGZyb20gJy4vYXNzZXRzL2RhdGEudG9tbCdcclxuaW1wb3J0IHlhbWwgZnJvbSAnLi9hc3NldHMvZGF0YS55YW1sJ1xyXG5pbXBvcnQganNvbjUgZnJvbSAnLi9hc3NldHMvZGF0YS5qc29uNSdcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgJy4vYXN5bmMtbW9kdWxlJ1xyXG5cclxuaGVsbG9Xb3JsZCgpXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbmltZy5zcmMgPSBpbWdTcmNcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpXHJcblxyXG5jb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuaW1nMi5zcmMgPSBsb2dvU3ZnXHJcbmltZzIuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogNjAwcHg7IGhlaWdodDogMjAwcHgnXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nMilcclxuXHJcbmNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuYmxvY2suc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7IGJhY2tncm91bmQ6IGFsaWNlYmx1ZSdcclxuYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2stYmcnKVxyXG5ibG9jay50ZXh0Q29udGVudCA9IGV4YW1wbGVUZXh0XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmxvY2spXHJcblxyXG5jb25zdCBpbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuaW1nMy5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA0MDBweDsgaGVpZ2h0OiA0MDBweDsgZGlzcGxheTogYmxvY2snXHJcbmltZzMuc3JjID0ganBnTWFwXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nMylcclxuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKVxyXG5cclxuY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG5zcGFuLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxyXG5zcGFuLmlubmVySFRNTCA9ICcmI3hlNjM5OydcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuKVxyXG5cclxuY29uc29sZS5sb2coRGF0YSk7XHJcbmNvbnNvbGUubG9nKE5vdGUpO1xyXG5cclxuY29uc29sZS5sb2codG9tbC50aXRsZSk7XHJcbmNvbnNvbGUubG9nKHRvbWwub3duZXIubmFtZSk7XHJcbmNvbnNvbGUubG9nKHlhbWwudGl0bGUpO1xyXG5jb25zb2xlLmxvZyh5YW1sLm93bmVyLm5hbWUpO1xyXG5jb25zb2xlLmxvZyhqc29uNS50aXRsZSk7XHJcbmNvbnNvbGUubG9nKGpzb241Lm93bmVyLm5hbWUpO1xyXG5cclxuY29uc29sZS5sb2coXy5qb2luKFsnaW5kZXgnLCAnbW9kdWxlJywgJ2xvYWRlZCddLCAnICcpKTtcclxuXHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbmJ1dHRvbi50ZXh0Q29udGVudCA9ICfngrnlh7vliqDms5UnXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ21hdGgnLCB3ZWJwYWNrUHJlbG9hZDogdHJ1ZSAqLycuL21hdGgnKS50aGVuKCh7IGFkZCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhhZGQoNCwgNSkpO1xyXG4gIH0pXHJcbn0pXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uKSIsIm1vZHVsZS5leHBvcnRzID0gW1tcImFzZFwiLFwiYXNkYVwiLFwiZmFzZmFzXCIsXCJhc2Rhc1wiXSxbXCJzYWRzYVwiLFwiYXNkYXNkXCIsXCJhc2Rhc2RcIixcImFzZFwiXSxbXCJhc2Rhc1wiLFwiYXNkYXNcIixcInNkYVwiLFwiYXNkXCJdLFtcInNkZlwiLFwic2RmXCIsXCJzZGFmXCIsXCJzZGZcIl1dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xuLy8gZGF0YS13ZWJwYWNrIGlzIG5vdCB1c2VkIGFzIGJ1aWxkIGhhcyBubyB1bmlxdWVOYW1lXG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2JhYmVsX3J1bnRpbWVfcmVnZW5lcmF0b3JfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2JhYmVsX3J1bnRpbWVfaGVscGVyc19lcy01ODc3MmVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJnZXRDb21wb25lbnQiLCJ0aGVuIiwiXyIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJqb2luIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0U3RyaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiaGVsbG9Xb3JsZCIsInN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJpbWdTcmMiLCJsb2dvU3ZnIiwiZXhhbXBsZVRleHQiLCJqcGdNYXAiLCJEYXRhIiwiTm90ZSIsInRvbWwiLCJ5YW1sIiwianNvbjUiLCJpbWciLCJzcmMiLCJpbWcyIiwic3R5bGUiLCJjc3NUZXh0IiwiYmxvY2siLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImltZzMiLCJzcGFuIiwidGl0bGUiLCJvd25lciIsIm5hbWUiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==