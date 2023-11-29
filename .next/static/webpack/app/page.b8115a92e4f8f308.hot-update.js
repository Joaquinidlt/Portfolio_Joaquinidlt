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

/***/ "(app-client)/./src/components/InvestmentCalculator/components/InvestmentChart.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/InvestmentCalculator/components/InvestmentChart.jsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_investment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/investment */ \"(app-client)/./src/components/InvestmentCalculator/util/investment.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ \"(app-client)/./node_modules/recharts/es6/chart/LineChart.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"(app-client)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ \"(app-client)/./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ \"(app-client)/./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ \"(app-client)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ \"(app-client)/./node_modules/recharts/es6/component/Legend.js\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ \"(app-client)/./node_modules/recharts/es6/cartesian/Line.js\");\n\n\n\n\nconst InvestmentChart = (param)=>{\n    let { data  } = param;\n    const results = (0,_util_investment__WEBPACK_IMPORTED_MODULE_2__.calculateInvestmentResults)(data);\n    const newdataI = results.map((item)=>{\n        const newData = {\n            year: item.year,\n            investment: item.valueEndOfYear,\n            interest: item.interest,\n            annualInvestment: item.annualInvestment\n        };\n        return newData;\n    });\n    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;\n    const dataWithoutInterest = newdataI.map((entry, entryIndex)=>({\n            year: entry.year,\n            investment: entry.investment,\n            interest: entry.interest,\n            annualInvestment: entry.annualInvestment,\n            investmentWithoutInterest: initialInvestment + entry.annualInvestment + entry.annualInvestment * entryIndex\n        }));\n    const currencyFormatter = (value)=>\"$\".concat(value.toLocaleString()); // Formatea el valor como moneda\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center w-auto my-[2rem] mx-auto p-[1rem]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {\n            width: 600,\n            height: 300,\n            data: dataWithoutInterest,\n            margin: {\n                top: 5,\n                right: 30,\n                left: 30,\n                bottom: 5\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                    dataKey: \"year\"\n                }, void 0, false, {\n                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_5__.YAxis, {\n                    tickFormatter: currencyFormatter\n                }, void 0, false, {\n                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_6__.CartesianGrid, {\n                    strokeDasharray: \"3 3\"\n                }, void 0, false, {\n                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {\n                    formatter: currencyFormatter\n                }, void 0, false, {\n                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_8__.Legend, {}, void 0, false, {\n                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Line, {\n                    type: \"monotone\",\n                    dataKey: \"investment\",\n                    stroke: \"#8884d8\",\n                    activeDot: {\n                        r: 8\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Line, {\n                    type: \"monotone\",\n                    dataKey: \"investmentWithoutInterest\",\n                    stroke: \"#82ca9d\",\n                    name: \"Without annual interest\"\n                }, void 0, false, {\n                    fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/joaquindelatorre/Desktop/Proyects/Portfolio_Joaquinidlt/src/components/InvestmentCalculator/components/InvestmentChart.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_c = InvestmentChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InvestmentChart);\nvar _c;\n$RefreshReg$(_c, \"InvestmentChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvSW52ZXN0bWVudENhbGN1bGF0b3IvY29tcG9uZW50cy9JbnZlc3RtZW50Q2hhcnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDc0M7QUFDeUI7QUFFekYsTUFBTVMsa0JBQWtCLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7SUFDN0IsTUFBTUMsVUFBVVYsNEVBQTBCQSxDQUFDUztJQUUzQyxNQUFNRSxXQUFXRCxRQUFRRSxHQUFHLENBQUMsQ0FBQ0MsT0FBUztRQUNuQyxNQUFNQyxVQUFVO1lBQ1pDLE1BQU1GLEtBQUtFLElBQUk7WUFDZkMsWUFBWUgsS0FBS0ksY0FBYztZQUMvQkMsVUFBVUwsS0FBS0ssUUFBUTtZQUN2QkMsa0JBQWtCTixLQUFLTSxnQkFBZ0I7UUFDM0M7UUFDQSxPQUFPTDtJQUNYO0lBQ0EsTUFBTU0sb0JBQ05WLE9BQU8sQ0FBQyxFQUFFLENBQUNPLGNBQWMsR0FDekJQLE9BQU8sQ0FBQyxFQUFFLENBQUNRLFFBQVEsR0FDbkJSLE9BQU8sQ0FBQyxFQUFFLENBQUNTLGdCQUFnQjtJQUUzQixNQUFNRSxzQkFBc0JWLFNBQVNDLEdBQUcsQ0FBQyxDQUFDVSxPQUFPQyxhQUFnQjtZQUM3RFIsTUFBTU8sTUFBTVAsSUFBSTtZQUNoQkMsWUFBWU0sTUFBTU4sVUFBVTtZQUM1QkUsVUFBVUksTUFBTUosUUFBUTtZQUN4QkMsa0JBQWtCRyxNQUFNSCxnQkFBZ0I7WUFDeENLLDJCQUEyQkosb0JBQW9CRSxNQUFNSCxnQkFBZ0IsR0FBSUcsTUFBTUgsZ0JBQWdCLEdBQUdJO1FBQ3BHO0lBRUYsTUFBTUUsb0JBQW9CLENBQUNDLFFBQVUsSUFBMkIsT0FBdkJBLE1BQU1DLGNBQWMsS0FBTSxnQ0FBZ0M7SUFFbkcscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUM1QiwrQ0FBU0E7WUFBQzZCLE9BQU87WUFBS0MsUUFBUTtZQUFLdEIsTUFBTVk7WUFBcUJXLFFBQVE7Z0JBQUVDLEtBQUs7Z0JBQUdDLE9BQU87Z0JBQUlDLE1BQU07Z0JBQUlDLFFBQVE7WUFBRTs7OEJBQ2hILDhEQUFDakMsMkNBQUtBO29CQUFDa0MsU0FBUTs7Ozs7OzhCQUNmLDhEQUFDakMsMkNBQUtBO29CQUFDa0MsZUFBZWI7Ozs7Ozs4QkFDdEIsOERBQUNwQixtREFBYUE7b0JBQUNrQyxpQkFBZ0I7Ozs7Ozs4QkFDL0IsOERBQUNqQyw2Q0FBT0E7b0JBQUNrQyxXQUFXZjs7Ozs7OzhCQUNwQiw4REFBQ2xCLDRDQUFNQTs7Ozs7OEJBQ1AsOERBQUNMLDBDQUFJQTtvQkFBQ3VDLE1BQUs7b0JBQVdKLFNBQVE7b0JBQWFLLFFBQU87b0JBQVVDLFdBQVc7d0JBQUVDLEdBQUc7b0JBQUU7Ozs7Ozs4QkFDOUUsOERBQUMxQywwQ0FBSUE7b0JBQUN1QyxNQUFLO29CQUFXSixTQUFRO29CQUE0QkssUUFBTztvQkFBVUcsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUY7S0F4Q01yQztBQTBDTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbnZlc3RtZW50Q2FsY3VsYXRvci9jb21wb25lbnRzL0ludmVzdG1lbnRDaGFydC5qc3g/ODliMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW52ZXN0bWVudFJlc3VsdHMgfSBmcm9tIFwiLi4vdXRpbC9pbnZlc3RtZW50XCI7XG5pbXBvcnQgeyBMaW5lQ2hhcnQsIExpbmUsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSAncmVjaGFydHMnO1xuXG5jb25zdCBJbnZlc3RtZW50Q2hhcnQgPSAoeyBkYXRhIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHRzID0gY2FsY3VsYXRlSW52ZXN0bWVudFJlc3VsdHMoZGF0YSk7XG5cbiAgICBjb25zdCBuZXdkYXRhSSA9IHJlc3VsdHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICAgICAgICB5ZWFyOiBpdGVtLnllYXIsXG4gICAgICAgICAgICBpbnZlc3RtZW50OiBpdGVtLnZhbHVlRW5kT2ZZZWFyLFxuICAgICAgICAgICAgaW50ZXJlc3Q6IGl0ZW0uaW50ZXJlc3QsXG4gICAgICAgICAgICBhbm51YWxJbnZlc3RtZW50OiBpdGVtLmFubnVhbEludmVzdG1lbnRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RGF0YVxuICAgIH0pXG4gICAgY29uc3QgaW5pdGlhbEludmVzdG1lbnQgPSBcbiAgICByZXN1bHRzWzBdLnZhbHVlRW5kT2ZZZWFyIC1cbiAgICByZXN1bHRzWzBdLmludGVyZXN0IC1cbiAgICByZXN1bHRzWzBdLmFubnVhbEludmVzdG1lbnQ7XG5cbiAgICBjb25zdCBkYXRhV2l0aG91dEludGVyZXN0ID0gbmV3ZGF0YUkubWFwKChlbnRyeSwgZW50cnlJbmRleCkgPT4gKHtcbiAgICAgICAgeWVhcjogZW50cnkueWVhcixcbiAgICAgICAgaW52ZXN0bWVudDogZW50cnkuaW52ZXN0bWVudCxcbiAgICAgICAgaW50ZXJlc3Q6IGVudHJ5LmludGVyZXN0LFxuICAgICAgICBhbm51YWxJbnZlc3RtZW50OiBlbnRyeS5hbm51YWxJbnZlc3RtZW50LFxuICAgICAgICBpbnZlc3RtZW50V2l0aG91dEludGVyZXN0OiBpbml0aWFsSW52ZXN0bWVudCArIGVudHJ5LmFubnVhbEludmVzdG1lbnQgKyAoZW50cnkuYW5udWFsSW52ZXN0bWVudCAqIGVudHJ5SW5kZXgpLFxuICAgICAgfSkpO1xuICAgICAgXG4gICAgY29uc3QgY3VycmVuY3lGb3JtYXR0ZXIgPSAodmFsdWUpID0+IGAkJHt2YWx1ZS50b0xvY2FsZVN0cmluZygpfWA7IC8vIEZvcm1hdGVhIGVsIHZhbG9yIGNvbW8gbW9uZWRhXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciB3LWF1dG8gbXktWzJyZW1dIG14LWF1dG8gcC1bMXJlbV0nPlxuICAgICAgICAgICAgPExpbmVDaGFydCB3aWR0aD17NjAwfSBoZWlnaHQ9ezMwMH0gZGF0YT17ZGF0YVdpdGhvdXRJbnRlcmVzdH0gbWFyZ2luPXt7IHRvcDogNSwgcmlnaHQ6IDMwLCBsZWZ0OiAzMCwgYm90dG9tOiA1IH19PlxuICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJ5ZWFyXCIgLz5cbiAgICAgICAgICAgIDxZQXhpcyB0aWNrRm9ybWF0dGVyPXtjdXJyZW5jeUZvcm1hdHRlcn0gLz5cbiAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIC8+XG4gICAgICAgICAgICA8VG9vbHRpcCBmb3JtYXR0ZXI9e2N1cnJlbmN5Rm9ybWF0dGVyfSAvPlxuICAgICAgICAgICAgPExlZ2VuZCAvPlxuICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImludmVzdG1lbnRcIiBzdHJva2U9XCIjODg4NGQ4XCIgYWN0aXZlRG90PXt7IHI6IDggfX0vPlxuICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImludmVzdG1lbnRXaXRob3V0SW50ZXJlc3RcIiBzdHJva2U9XCIjODJjYTlkXCIgbmFtZT1cIldpdGhvdXQgYW5udWFsIGludGVyZXN0XCIgLz5cbiAgICAgICAgICAgIDwvTGluZUNoYXJ0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW52ZXN0bWVudENoYXJ0OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNhbGN1bGF0ZUludmVzdG1lbnRSZXN1bHRzIiwiTGluZUNoYXJ0IiwiTGluZSIsIlhBeGlzIiwiWUF4aXMiLCJDYXJ0ZXNpYW5HcmlkIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkludmVzdG1lbnRDaGFydCIsImRhdGEiLCJyZXN1bHRzIiwibmV3ZGF0YUkiLCJtYXAiLCJpdGVtIiwibmV3RGF0YSIsInllYXIiLCJpbnZlc3RtZW50IiwidmFsdWVFbmRPZlllYXIiLCJpbnRlcmVzdCIsImFubnVhbEludmVzdG1lbnQiLCJpbml0aWFsSW52ZXN0bWVudCIsImRhdGFXaXRob3V0SW50ZXJlc3QiLCJlbnRyeSIsImVudHJ5SW5kZXgiLCJpbnZlc3RtZW50V2l0aG91dEludGVyZXN0IiwiY3VycmVuY3lGb3JtYXR0ZXIiLCJ2YWx1ZSIsInRvTG9jYWxlU3RyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJkYXRhS2V5IiwidGlja0Zvcm1hdHRlciIsInN0cm9rZURhc2hhcnJheSIsImZvcm1hdHRlciIsInR5cGUiLCJzdHJva2UiLCJhY3RpdmVEb3QiLCJyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/InvestmentCalculator/components/InvestmentChart.jsx\n"));

/***/ })

});