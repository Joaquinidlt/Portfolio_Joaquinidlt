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

/***/ "(app-client)/./src/components/InvestmentCalculator/components/Results.jsx":
/*!********************************************************************!*\
  !*** ./src/components/InvestmentCalculator/components/Results.jsx ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Results; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _util_investment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/investment */ \"(app-client)/./src/components/InvestmentCalculator/util/investment.js\");\n\n\nfunction Results(param) {\n    let { userInput  } = param;\n    const results = (0,_util_investment__WEBPACK_IMPORTED_MODULE_1__.calculateInvestmentResults)(userInput);\n    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"w-[800px] my-[2rem] mx-auto p-[1rem] table-fixed border-spacing-[2rem] text-right\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                className: \"font-[0.7rem] text-[#83e6c0]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            className: \"px-[4px]\",\n                            children: \"Year\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            className: \"px-[4px]\",\n                            children: \"Investment Value\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            className: \"px-[4px]\",\n                            children: \"Interest (Year)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            className: \"px-[4px]\",\n                            children: \"Total Interest\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            scope: \"col\",\n                            className: \"px-[4px]\",\n                            children: \"Invested Capital\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: \"font-sans font-[0.85rem] text-[#c2e9e0]\",\n                children: results.map((result, resultIndex)=>{\n                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;\n                    const totalAmountInvested = result.valueEndOfYear - totalInterest;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"row\",\n                                children: result.year\n                            }, void 0, false, {\n                                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"row\",\n                                children: _util_investment__WEBPACK_IMPORTED_MODULE_1__.formatter.format(result.valueEndOfYear)\n                            }, void 0, false, {\n                                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"row\",\n                                children: _util_investment__WEBPACK_IMPORTED_MODULE_1__.formatter.format(result.interest)\n                            }, void 0, false, {\n                                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"row\",\n                                children: _util_investment__WEBPACK_IMPORTED_MODULE_1__.formatter.format(totalInterest)\n                            }, void 0, false, {\n                                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"row\",\n                                children: _util_investment__WEBPACK_IMPORTED_MODULE_1__.formatter.format(totalAmountInvested)\n                            }, void 0, false, {\n                                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, resultIndex, true, {\n                        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/Results.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = Results;\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvSW52ZXN0bWVudENhbGN1bGF0b3IvY29tcG9uZW50cy9SZXN1bHRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJFO0FBRTVELFNBQVNFLFFBQVEsS0FBYSxFQUFFO1FBQWYsRUFBRUMsVUFBUyxFQUFFLEdBQWI7SUFDNUIsTUFBTUMsVUFBVUosNEVBQTBCQSxDQUFDRztJQUMzQyxNQUFNRSxvQkFDRkQsT0FBTyxDQUFDLEVBQUUsQ0FBQ0UsY0FBYyxHQUN6QkYsT0FBTyxDQUFDLEVBQUUsQ0FBQ0csUUFBUSxHQUNuQkgsT0FBTyxDQUFDLEVBQUUsQ0FBQ0ksZ0JBQWdCO0lBQy9CLHFCQUNJLDhEQUFDQztRQUFNQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1ELFdBQVU7MEJBQ2IsNEVBQUNFOztzQ0FDRyw4REFBQ0M7NEJBQUdDLE9BQU07NEJBQU1KLFdBQVU7c0NBQVc7Ozs7OztzQ0FDckMsOERBQUNHOzRCQUFHQyxPQUFNOzRCQUFNSixXQUFVO3NDQUFXOzs7Ozs7c0NBQ3JDLDhEQUFDRzs0QkFBR0MsT0FBTTs0QkFBTUosV0FBVTtzQ0FBVzs7Ozs7O3NDQUNyQyw4REFBQ0c7NEJBQUdDLE9BQU07NEJBQU1KLFdBQVU7c0NBQVc7Ozs7OztzQ0FDckMsOERBQUNHOzRCQUFHQyxPQUFNOzRCQUFNSixXQUFVO3NDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHN0MsOERBQUNLO2dCQUFNTCxXQUFVOzBCQUNaTixRQUFRWSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsY0FBZ0I7b0JBQ2xDLE1BQU1DLGdCQUFnQkYsT0FBT1gsY0FBYyxHQUFHVyxPQUFPVCxnQkFBZ0IsR0FBR1MsT0FBT0csSUFBSSxHQUFHZjtvQkFDdEYsTUFBTWdCLHNCQUFzQkosT0FBT1gsY0FBYyxHQUFHYTtvQkFDcEQscUJBQ0EsOERBQUNQOzswQ0FDRyw4REFBQ0M7Z0NBQUdDLE9BQU07MENBQU9HLE9BQU9HLElBQUk7Ozs7OzswQ0FDNUIsOERBQUNQO2dDQUFHQyxPQUFNOzBDQUFPYiw4REFBZ0IsQ0FBQ2dCLE9BQU9YLGNBQWM7Ozs7OzswQ0FDdkQsOERBQUNPO2dDQUFHQyxPQUFNOzBDQUFPYiw4REFBZ0IsQ0FBQ2dCLE9BQU9WLFFBQVE7Ozs7OzswQ0FDakQsOERBQUNNO2dDQUFHQyxPQUFNOzBDQUFPYiw4REFBZ0IsQ0FBQ2tCOzs7Ozs7MENBQ2xDLDhEQUFDTjtnQ0FBR0MsT0FBTTswQ0FBT2IsOERBQWdCLENBQUNvQjs7Ozs7Ozt1QkFMN0JIOzs7OztnQkFRYjs7Ozs7Ozs7Ozs7O0FBSWhCLENBQUM7S0FsQ3VCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW52ZXN0bWVudENhbGN1bGF0b3IvY29tcG9uZW50cy9SZXN1bHRzLmpzeD81NzUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGN1bGF0ZUludmVzdG1lbnRSZXN1bHRzLCBmb3JtYXR0ZXIgfSBmcm9tIFwiLi4vdXRpbC9pbnZlc3RtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHMoeyB1c2VySW5wdXQgfSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBjYWxjdWxhdGVJbnZlc3RtZW50UmVzdWx0cyh1c2VySW5wdXQpO1xuICAgIGNvbnN0IGluaXRpYWxJbnZlc3RtZW50ID0gXG4gICAgICAgIHJlc3VsdHNbMF0udmFsdWVFbmRPZlllYXIgLVxuICAgICAgICByZXN1bHRzWzBdLmludGVyZXN0IC1cbiAgICAgICAgcmVzdWx0c1swXS5hbm51YWxJbnZlc3RtZW50O1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ3LVs4MDBweF0gbXktWzJyZW1dIG14LWF1dG8gcC1bMXJlbV0gdGFibGUtZml4ZWQgYm9yZGVyLXNwYWNpbmctWzJyZW1dIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJmb250LVswLjdyZW1dIHRleHQtWyM4M2U2YzBdXCI+XG4gICAgICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtWzRweF1cIj5ZZWFyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtWzRweF1cIj5JbnZlc3RtZW50IFZhbHVlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtWzRweF1cIj5JbnRlcmVzdCAoWWVhcik8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJweC1bNHB4XVwiPlRvdGFsIEludGVyZXN0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwicHgtWzRweF1cIj5JbnZlc3RlZCBDYXBpdGFsPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJmb250LXNhbnMgZm9udC1bMC44NXJlbV0gdGV4dC1bI2MyZTllMF1cIj5cbiAgICAgICAgICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCwgcmVzdWx0SW5kZXgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsSW50ZXJlc3QgPSByZXN1bHQudmFsdWVFbmRPZlllYXIgLSByZXN1bHQuYW5udWFsSW52ZXN0bWVudCAqIHJlc3VsdC55ZWFyIC0gaW5pdGlhbEludmVzdG1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQW1vdW50SW52ZXN0ZWQgPSByZXN1bHQudmFsdWVFbmRPZlllYXIgLSB0b3RhbEludGVyZXN0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyZXN1bHRJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57cmVzdWx0LnllYXJ9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntmb3JtYXR0ZXIuZm9ybWF0KHJlc3VsdC52YWx1ZUVuZE9mWWVhcil9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntmb3JtYXR0ZXIuZm9ybWF0KHJlc3VsdC5pbnRlcmVzdCl9PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntmb3JtYXR0ZXIuZm9ybWF0KHRvdGFsSW50ZXJlc3QpfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57Zm9ybWF0dGVyLmZvcm1hdCh0b3RhbEFtb3VudEludmVzdGVkKX08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIClcbn0iXSwibmFtZXMiOlsiY2FsY3VsYXRlSW52ZXN0bWVudFJlc3VsdHMiLCJmb3JtYXR0ZXIiLCJSZXN1bHRzIiwidXNlcklucHV0IiwicmVzdWx0cyIsImluaXRpYWxJbnZlc3RtZW50IiwidmFsdWVFbmRPZlllYXIiLCJpbnRlcmVzdCIsImFubnVhbEludmVzdG1lbnQiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsInNjb3BlIiwidGJvZHkiLCJtYXAiLCJyZXN1bHQiLCJyZXN1bHRJbmRleCIsInRvdGFsSW50ZXJlc3QiLCJ5ZWFyIiwidG90YWxBbW91bnRJbnZlc3RlZCIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/InvestmentCalculator/components/Results.jsx\n"));

/***/ })

});