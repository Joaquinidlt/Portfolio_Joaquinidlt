"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/InvestmentCalculator/components/InputComponent.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/InvestmentCalculator/components/InputComponent.jsx ***!
  \***************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction InputComponent(param) {\n    let { label , value , inputIdentifier , onChangeValue  } = param;\n    function handleChange(event) {\n        onChangeValue(inputIdentifier, event.target.value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"block mb-[0.25rem] text-xs font-sans font-bold uppercase\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InputComponent.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                required: true,\n                value: value,\n                onChange: handleChange,\n                className: \"w-full p-[0.5rem]\"\n            }, void 0, false, {\n                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InputComponent.jsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InputComponent.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = InputComponent;\nvar _c;\n$RefreshReg$(_c, \"InputComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvSW52ZXN0bWVudENhbGN1bGF0b3IvY29tcG9uZW50cy9JbnB1dENvbXBvbmVudC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsU0FBU0EsZUFBZSxLQUFnRCxFQUFFO1FBQWxELEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxnQkFBZSxFQUFFQyxjQUFhLEVBQUUsR0FBaEQ7SUFFbkMsU0FBU0MsYUFBYUMsS0FBSyxFQUFFO1FBQ3pCRixjQUFjRCxpQkFBaUJHLE1BQU1DLE1BQU0sQ0FBQ0wsS0FBSztJQUNyRDtJQUVBLHFCQUNJLDhEQUFDTTs7MEJBQ0csOERBQUNQO2dCQUFNUSxXQUFVOzBCQUE0RFI7Ozs7OzswQkFDN0UsOERBQUNTO2dCQUFNQyxNQUFLO2dCQUFTQyxRQUFRO2dCQUFDVixPQUFPQTtnQkFBT1csVUFBVVI7Z0JBQ2xESSxXQUFVOzs7Ozs7Ozs7Ozs7QUFJMUIsQ0FBQztLQWR1QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW52ZXN0bWVudENhbGN1bGF0b3IvY29tcG9uZW50cy9JbnB1dENvbXBvbmVudC5qc3g/ZGM4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dENvbXBvbmVudCh7IGxhYmVsLCB2YWx1ZSwgaW5wdXRJZGVudGlmaWVyLCBvbkNoYW5nZVZhbHVlIH0pIHtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBvbkNoYW5nZVZhbHVlKGlucHV0SWRlbnRpZmllciwgZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLVswLjI1cmVtXSB0ZXh0LXhzIGZvbnQtc2FucyBmb250LWJvbGQgdXBwZXJjYXNlXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyByZXF1aXJlZCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgcC1bMC41cmVtXSdcbiAgICAgICAgICAgIC8+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDwvcD5cbiAgICApXG59Il0sIm5hbWVzIjpbIklucHV0Q29tcG9uZW50IiwibGFiZWwiLCJ2YWx1ZSIsImlucHV0SWRlbnRpZmllciIsIm9uQ2hhbmdlVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInAiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/InvestmentCalculator/components/InputComponent.jsx\n"));

/***/ })

});