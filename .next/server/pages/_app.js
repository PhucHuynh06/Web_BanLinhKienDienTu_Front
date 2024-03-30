"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartContextProvider: () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartContextProvider({ children }) {\n    const ls =  false ? 0 : null;\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (cartProducts?.length > 0) {\n            ls?.setItem(\"cart\", JSON.stringify(cartProducts));\n        }\n    }, [\n        cartProducts\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (ls && ls.getItem(\"cart\")) {\n            setCartProducts(JSON.parse(ls.getItem(\"cart\")));\n        }\n    }, []);\n    function addProduct(productId) {\n        setCartProducts((prev)=>[\n                ...prev,\n                productId\n            ]);\n    }\n    function removeProduct(productId) {\n        setCartProducts((prev)=>{\n            const pos = prev.indexOf(productId);\n            if (pos !== -1) {\n                return prev.filter((value, index)=>index !== pos);\n            }\n            return prev;\n        });\n    }\n    function clearCart() {\n        setCartProducts([]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartProducts,\n            setCartProducts,\n            addProduct,\n            removeProduct,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Do an CN & TT\\\\website-thuongmai\\\\web-font\\\\components\\\\CartContext.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUQ7QUFFbEQsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUV0QyxTQUFTSSxvQkFBb0IsRUFBQ0MsUUFBUSxFQUFDO0lBQzVDLE1BQU1DLEtBQUssTUFBNkIsR0FBR0MsQ0FBbUIsR0FBRztJQUNqRSxNQUFNLENBQUNFLGNBQWFDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2xERCxnREFBU0EsQ0FBQztRQUNSLElBQUlRLGNBQWNFLFNBQVMsR0FBRztZQUM1QkwsSUFBSU0sUUFBUSxRQUFRQyxLQUFLQyxTQUFTLENBQUNMO1FBQ3JDO0lBQ0YsR0FBRztRQUFDQTtLQUFhO0lBQ2pCUixnREFBU0EsQ0FBQztRQUNSLElBQUlLLE1BQU1BLEdBQUdTLE9BQU8sQ0FBQyxTQUFTO1lBQzVCTCxnQkFBZ0JHLEtBQUtHLEtBQUssQ0FBQ1YsR0FBR1MsT0FBTyxDQUFDO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsU0FBU0UsV0FBV0MsU0FBUztRQUMzQlIsZ0JBQWdCUyxDQUFBQSxPQUFRO21CQUFJQTtnQkFBS0Q7YUFBVTtJQUM3QztJQUNBLFNBQVNFLGNBQWNGLFNBQVM7UUFDOUJSLGdCQUFnQlMsQ0FBQUE7WUFDZCxNQUFNRSxNQUFNRixLQUFLRyxPQUFPLENBQUNKO1lBQ3pCLElBQUlHLFFBQVEsQ0FBQyxHQUFHO2dCQUNkLE9BQU9GLEtBQUtJLE1BQU0sQ0FBQyxDQUFDQyxPQUFNQyxRQUFVQSxVQUFVSjtZQUNoRDtZQUNBLE9BQU9GO1FBQ1Q7SUFDRjtJQUNBLFNBQVNPO1FBQ1BoQixnQkFBZ0IsRUFBRTtJQUNwQjtJQUNBLHFCQUNFLDhEQUFDUCxZQUFZd0IsUUFBUTtRQUFDSCxPQUFPO1lBQUNmO1lBQWFDO1lBQWdCTztZQUFXRztZQUFjTTtRQUFTO2tCQUMxRnJCOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1mb250Ly4vY29tcG9uZW50cy9DYXJ0Q29udGV4dC5qcz84MjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0Q29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcclxuICBjb25zdCBscyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYWxTdG9yYWdlIDogbnVsbDtcclxuICBjb25zdCBbY2FydFByb2R1Y3RzLHNldENhcnRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXJ0UHJvZHVjdHM/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbHM/LnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0UHJvZHVjdHMpKTtcclxuICAgIH1cclxuICB9LCBbY2FydFByb2R1Y3RzXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChscyAmJiBscy5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgc2V0Q2FydFByb2R1Y3RzKEpTT04ucGFyc2UobHMuZ2V0SXRlbSgnY2FydCcpKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGZ1bmN0aW9uIGFkZFByb2R1Y3QocHJvZHVjdElkKSB7XHJcbiAgICBzZXRDYXJ0UHJvZHVjdHMocHJldiA9PiBbLi4ucHJldixwcm9kdWN0SWRdKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIHNldENhcnRQcm9kdWN0cyhwcmV2ID0+IHtcclxuICAgICAgY29uc3QgcG9zID0gcHJldi5pbmRleE9mKHByb2R1Y3RJZCk7XHJcbiAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYuZmlsdGVyKCh2YWx1ZSxpbmRleCkgPT4gaW5kZXggIT09IHBvcyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2xlYXJDYXJ0KCkge1xyXG4gICAgc2V0Q2FydFByb2R1Y3RzKFtdKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnRQcm9kdWN0cyxzZXRDYXJ0UHJvZHVjdHMsYWRkUHJvZHVjdCxyZW1vdmVQcm9kdWN0LGNsZWFyQ2FydH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJscyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsImxlbmd0aCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SXRlbSIsInBhcnNlIiwiYWRkUHJvZHVjdCIsInByb2R1Y3RJZCIsInByZXYiLCJyZW1vdmVQcm9kdWN0IiwicG9zIiwiaW5kZXhPZiIsImZpbHRlciIsInZhbHVlIiwiaW5kZXgiLCJjbGVhckNhcnQiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CartContext */ \"./components/CartContext.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`\n  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');\n  body{\n    background-color: #eee;\n    padding:0;\n    margin:0;\n    font-family: 'Poppins', sans-serif;\n  }\n  hr{\n    display: block;\n    border:0;\n    border-top:1px solid #ccc;\n  }\n`;\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Do an CN & TT\\\\website-thuongmai\\\\web-font\\\\pages\\\\_app.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartContextProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Do an CN & TT\\\\website-thuongmai\\\\web-font\\\\pages\\\\_app.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Do an CN & TT\\\\website-thuongmai\\\\web-font\\\\pages\\\\_app.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Do an CN & TT\\\\website-thuongmai\\\\web-font\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNTO0FBQ2I7QUFFaEQsTUFBTUcsZUFBZUgsZ0VBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhdkMsQ0FBQztBQUVjLFNBQVNJLElBQUksRUFBRUMsU0FBUyxFQUFFQyxXQUFVLEVBQUNDLE9BQU8sRUFBRSxHQUFHRCxXQUFVLEVBQUU7SUFDMUUscUJBQ0U7OzBCQUNFLDhEQUFDSDs7Ozs7MEJBQ0QsOERBQUNELDREQUFlQTswQkFDZCw0RUFBQ0Qsd0VBQW1CQTs4QkFDbEIsNEVBQUNJO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1mb250Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHtDYXJ0Q29udGV4dFByb3ZpZGVyfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhcnRDb250ZXh0XCI7XG5pbXBvcnQge1Nlc3Npb25Qcm92aWRlcn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcbiAgYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIGhye1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjowO1xuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNjY2M7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOntzZXNzaW9uLCAuLi5wYWdlUHJvcHN9IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgPFNlc3Npb25Qcm92aWRlcj5cbiAgICAgICAgPENhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwiR2xvYmFsU3R5bGVzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();