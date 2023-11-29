"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/InvestmentCalculator/page",{

/***/ "(app-client)/./src/app/InvestmentCalculator/page.jsx":
/*!***********************************************!*\
  !*** ./src/app/InvestmentCalculator/page.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"(app-client)/./src/app/InvestmentCalculator/components/Header.jsx\");\n/* harmony import */ var _components_InputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InputComponent */ \"(app-client)/./src/app/InvestmentCalculator/components/InputComponent.jsx\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Results */ \"(app-client)/./src/app/InvestmentCalculator/components/Results.jsx\");\n/* harmony import */ var _components_InvestmentChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/InvestmentChart */ \"(app-client)/./src/app/InvestmentCalculator/components/InvestmentChart.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst InvestmentCalculator = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        initialInvestment: 15000,\n        annualInvestment: 1200,\n        expectedReturn: 6,\n        duration: 10\n    });\n    const inputIsValid = userInput.duration >= 1;\n    function handleChange(inputIdentifier, newValue) {\n        setUserInput((prevUserInput)=>{\n            return {\n                ...prevUserInput,\n                [inputIdentifier]: +newValue\n            };\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"investmentCalculator\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"p-[1rem] my-[2rem] mx-auto rounded bg-[#307e6c]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-evenly gap-[1.5rem]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    label: \"INITIAL INVESTMENT\",\n                                    value: userInput.initialInvestment,\n                                    inputIdentifier: \"initialInvestment\",\n                                    onChangeValue: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    label: \"ANNUAL INVESTMENT\",\n                                    value: userInput.annualInvestment,\n                                    inputIdentifier: \"annualInvestment\",\n                                    onChangeValue: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    label: \"EXPECTED RETURN %\",\n                                    value: userInput.expectedReturn,\n                                    inputIdentifier: \"expectedReturn\",\n                                    onChangeValue: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InputComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    label: \"DURATION\",\n                                    value: userInput.duration,\n                                    inputIdentifier: \"duration\",\n                                    onChangeValue: handleChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    !inputIsValid && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"center\",\n                        children: \"Please enter a duration greater than zero.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    inputIsValid && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InvestmentChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: userInput\n                    }, void 0, false, {\n                        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 26\n                    }, undefined),\n                    inputIsValid && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        userInput: userInput\n                    }, void 0, false, {\n                        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 26\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/app/InvestmentCalculator/page.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InvestmentCalculator, \"cmbnVd6cAX8EZsFiK6OyRGnv8Q8=\");\n_c = InvestmentCalculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvestmentCalculator);\nvar _c;\n$RefreshReg$(_c, \"InvestmentCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9JbnZlc3RtZW50Q2FsY3VsYXRvci9wYWdlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBDO0FBQ0Y7QUFDaUI7QUFDZDtBQUNnQjtBQUUzRCxNQUFNTSx1QkFBdUIsSUFBTTs7SUFDakMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3pDUSxtQkFBbUI7UUFDbkJDLGtCQUFrQjtRQUNsQkMsZ0JBQWdCO1FBQ2hCQyxVQUFVO0lBQ1o7SUFFQSxNQUFNQyxlQUFnQk4sVUFBVUssUUFBUSxJQUFJO0lBRTVDLFNBQVNFLGFBQWFDLGVBQWUsRUFBRUMsUUFBUSxFQUFDO1FBQzlDUixhQUFhLENBQUNTLGdCQUFrQjtZQUM5QixPQUFPO2dCQUNMLEdBQUdBLGFBQWE7Z0JBQ2hCLENBQUNGLGdCQUFnQixFQUFFLENBQUNDO1lBQ3RCO1FBQ0Y7SUFDRjtJQUdBLHFCQUNFLDhEQUFDRTtRQUFRQyxJQUFHOzswQkFDViw4REFBQ2pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNrQjs7a0NBQ0MsOERBQUNGO3dCQUFRRyxXQUFVO2tDQUNqQiw0RUFBQ0M7NEJBQUlELFdBQVU7OzhDQUNYLDhEQUFDbEIsa0VBQWNBO29DQUNib0IsT0FBTztvQ0FDUEMsT0FBT2pCLFVBQVVFLGlCQUFpQjtvQ0FDbENNLGlCQUFpQjtvQ0FDakJVLGVBQWVYOzs7Ozs7OENBQ2pCLDhEQUFDWCxrRUFBY0E7b0NBQ2JvQixPQUFPO29DQUNQQyxPQUFPakIsVUFBVUcsZ0JBQWdCO29DQUNqQ0ssaUJBQWlCO29DQUNqQlUsZUFBZVg7Ozs7Ozs4Q0FDakIsOERBQUNYLGtFQUFjQTtvQ0FDYm9CLE9BQU87b0NBQ1BDLE9BQU9qQixVQUFVSSxjQUFjO29DQUMvQkksaUJBQWlCO29DQUNqQlUsZUFBZVg7Ozs7Ozs4Q0FDakIsOERBQUNYLGtFQUFjQTtvQ0FDYm9CLE9BQU87b0NBQ1BDLE9BQU9qQixVQUFVSyxRQUFRO29DQUN6QkcsaUJBQWlCO29DQUNqQlUsZUFBZVg7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUd0QixDQUFDRCw4QkFDQSw4REFBQ2E7d0JBQUVMLFdBQVU7a0NBQVM7Ozs7OztvQkFFdkJSLDhCQUFnQiw4REFBQ1IsbUVBQWVBO3dCQUFDc0IsTUFBTXBCOzs7Ozs7b0JBQ3ZDTSw4QkFBZ0IsOERBQUNULDJEQUFPQTt3QkFBQ0csV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QztHQXpETUQ7S0FBQUE7QUEyRE4sK0RBQWVBLG9CQUFvQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0ludmVzdG1lbnRDYWxjdWxhdG9yL3BhZ2UuanN4PzM4MDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgSW5wdXRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9JbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSBcIi4vY29tcG9uZW50cy9SZXN1bHRzXCI7XG5pbXBvcnQgSW52ZXN0bWVudENoYXJ0IGZyb20gXCIuL2NvbXBvbmVudHMvSW52ZXN0bWVudENoYXJ0XCI7XG5cbmNvbnN0IEludmVzdG1lbnRDYWxjdWxhdG9yID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoe1xuICAgIGluaXRpYWxJbnZlc3RtZW50OiAxNTAwMCxcbiAgICBhbm51YWxJbnZlc3RtZW50OiAxMjAwLFxuICAgIGV4cGVjdGVkUmV0dXJuOiA2LFxuICAgIGR1cmF0aW9uOiAxMFxuICB9KTtcblxuICBjb25zdCBpbnB1dElzVmFsaWQgPSAgdXNlcklucHV0LmR1cmF0aW9uID49IDE7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGlucHV0SWRlbnRpZmllciwgbmV3VmFsdWUpe1xuICAgIHNldFVzZXJJbnB1dCgocHJldlVzZXJJbnB1dCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlVzZXJJbnB1dCxcbiAgICAgICAgW2lucHV0SWRlbnRpZmllcl06ICtuZXdWYWx1ZSxcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImludmVzdG1lbnRDYWxjdWxhdG9yXCI+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwLVsxcmVtXSBteS1bMnJlbV0gbXgtYXV0byByb3VuZGVkIGJnLVsjMzA3ZTZjXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBnYXAtWzEuNXJlbV1cIj5cbiAgICAgICAgICAgICAgPElucHV0Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgIGxhYmVsPXsnSU5JVElBTCBJTlZFU1RNRU5UJ30gXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dC5pbml0aWFsSW52ZXN0bWVudH0gIFxuICAgICAgICAgICAgICAgIGlucHV0SWRlbnRpZmllcj17J2luaXRpYWxJbnZlc3RtZW50J31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVZhbHVlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPElucHV0Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgIGxhYmVsPXsnQU5OVUFMIElOVkVTVE1FTlQnfSBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcklucHV0LmFubnVhbEludmVzdG1lbnR9IFxuICAgICAgICAgICAgICAgIGlucHV0SWRlbnRpZmllcj17J2FubnVhbEludmVzdG1lbnQnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlVmFsdWU9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICA8SW5wdXRDb21wb25lbnQgXG4gICAgICAgICAgICAgICAgbGFiZWw9eydFWFBFQ1RFRCBSRVRVUk4gJSd9IFxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXQuZXhwZWN0ZWRSZXR1cm59IFxuICAgICAgICAgICAgICAgIGlucHV0SWRlbnRpZmllcj17J2V4cGVjdGVkUmV0dXJuJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVZhbHVlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPElucHV0Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgIGxhYmVsPXsnRFVSQVRJT04nfSBcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcklucHV0LmR1cmF0aW9ufSBcbiAgICAgICAgICAgICAgICBpbnB1dElkZW50aWZpZXI9eydkdXJhdGlvbid9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VWYWx1ZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgeyFpbnB1dElzVmFsaWQgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNlbnRlclwiPlBsZWFzZSBlbnRlciBhIGR1cmF0aW9uIGdyZWF0ZXIgdGhhbiB6ZXJvLjwvcD5cbiAgICAgICAgKX1cbiAgICAgICAge2lucHV0SXNWYWxpZCAmJiA8SW52ZXN0bWVudENoYXJ0IGRhdGE9e3VzZXJJbnB1dH0gLz59XG4gICAgICAgIHtpbnB1dElzVmFsaWQgJiYgPFJlc3VsdHMgdXNlcklucHV0PXt1c2VySW5wdXR9Lz59XG4gICAgICAgIFxuICAgICAgPC9tYWluPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZlc3RtZW50Q2FsY3VsYXRvclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJJbnB1dENvbXBvbmVudCIsIlJlc3VsdHMiLCJJbnZlc3RtZW50Q2hhcnQiLCJJbnZlc3RtZW50Q2FsY3VsYXRvciIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImluaXRpYWxJbnZlc3RtZW50IiwiYW5udWFsSW52ZXN0bWVudCIsImV4cGVjdGVkUmV0dXJuIiwiZHVyYXRpb24iLCJpbnB1dElzVmFsaWQiLCJoYW5kbGVDaGFuZ2UiLCJpbnB1dElkZW50aWZpZXIiLCJuZXdWYWx1ZSIsInByZXZVc2VySW5wdXQiLCJzZWN0aW9uIiwiaWQiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlVmFsdWUiLCJwIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/InvestmentCalculator/page.jsx\n"));

/***/ })

});