"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/anime/[id]",{

/***/ "./src/components/anime/EpisodeSection.tsx":
/*!*************************************************!*\
  !*** ./src/components/anime/EpisodeSection.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_anime_Episode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/anime/Episode */ \"./src/components/anime/Episode.tsx\");\n/* harmony import */ var _styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/episodes.module.css */ \"./src/styles/episodes.module.css\");\n/* harmony import */ var _styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Section = function(param) {\n    var anime = param.anime, episodes = param.episodes;\n    var _this1 = _this;\n    _s();\n    var animeListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginLeft: \"4%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3___default().episodeP),\n                children: \"Episodes\"\n            }, void 0, false, {\n                fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Recommendations\"\n            }, void 0, false, {\n                fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                tabIndex: 0,\n                className: (_styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3___default().episodes),\n                ref: animeListRef,\n                onMouseEnter: function() {\n                    return animeListRef.current.focus();\n                },\n                children: new Array(episodes.episodeCount > 8 ? 8 : episodes.episodeCount).fill(1).map(function(_v, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_anime_Episode__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        anime: anime,\n                        number: i + 1,\n                        episode: episodes.episodes.nodes[i]\n                    }, i + 1, false, {\n                        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(Section, \"ZGuLRpRYxTnH8Ol9hw2pmMtpGvs=\");\n_c = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c;\n$RefreshReg$(_c, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbmltZS9FcGlzb2RlU2VjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBc0M7QUFFYztBQUdDOztBQU9yRCxJQUFNSSxPQUFPLEdBQTJCLGdCQUF5QjtRQUF0QkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7O0lBQ3hELElBQU1DLFlBQVksR0FBR04sNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFakMscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLFVBQVUsRUFBRSxJQUFJO1NBQUU7OzBCQUM5Qiw4REFBQ0MsR0FBQztnQkFBQ0MsU0FBUyxFQUFFVCw2RUFBZTswQkFBRSxVQUUvQjs7Ozs7cUJBQUk7MEJBRUosOERBQUNRLEdBQUM7MEJBQUMsaUJBRUg7Ozs7O3FCQUFJOzBCQUVKLDhEQUFDSCxLQUFHO2dCQUNGTSxRQUFRLEVBQUUsQ0FBQztnQkFDWEYsU0FBUyxFQUFFVCw2RUFBZTtnQkFDMUJZLEdBQUcsRUFBRVIsWUFBWTtnQkFDakJTLFlBQVksRUFBRTsyQkFBTVQsWUFBWSxDQUFDVSxPQUFPLENBQUNDLEtBQUssRUFBRTtpQkFBQTswQkFFL0MsSUFBSUMsS0FBSyxDQUFDYixRQUFRLENBQUNjLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHZCxRQUFRLENBQUNjLFlBQVksQ0FBQyxDQUM5REMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQQyxHQUFHLENBQUMsU0FBQ0MsRUFBRSxFQUFFQyxDQUFDO3lDQUNULDhEQUFDdEIsaUVBQVc7d0JBRVZHLEtBQUssRUFBRUEsS0FBSzt3QkFDWm9CLE1BQU0sRUFBRUQsQ0FBQyxHQUFHLENBQUM7d0JBQ2JFLE9BQU8sRUFBRXBCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDcUIsS0FBSyxDQUFDSCxDQUFDLENBQUM7dUJBSDlCQSxDQUFDLEdBQUcsQ0FBQzs7Ozs4QkFJVjtpQkFDSCxDQUFDOzs7OztxQkFDQTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBaENLcEIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBa0NiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYW5pbWUvRXBpc29kZVNlY3Rpb24udHN4PzI4NDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEVwaXNvZGVDYXJkIGZyb20gJ0Bjb21wb25lbnRzL2FuaW1lL0VwaXNvZGUnO1xuaW1wb3J0IHsgQW5pbWVCYW5uZXJGcmFnbWVudCB9IGZyb20gJ0BnZW5lcmF0ZWQvYW5pTGlzdCc7XG5pbXBvcnQgeyBFcGlzb2Rlc0xpc3RGcmFnbWVudCB9IGZyb20gJ0BnZW5lcmF0ZWQva2l0c3UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvZXBpc29kZXMubW9kdWxlLmNzcydcblxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uUHJvcHMge1xuICBhbmltZTogQW5pbWVCYW5uZXJGcmFnbWVudDtcbiAgZXBpc29kZXM6IEVwaXNvZGVzTGlzdEZyYWdtZW50O1xufVxuXG5jb25zdCBTZWN0aW9uOiBSZWFjdC5GQzxTZWN0aW9uUHJvcHM+ID0gKHsgYW5pbWUsIGVwaXNvZGVzIH0pID0+IHtcbiAgY29uc3QgYW5pbWVMaXN0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNCUnIH19PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZVB9PlxuICAgICAgICBFcGlzb2Rlc1xuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgUmVjb21tZW5kYXRpb25zXG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGVzfVxuICAgICAgICByZWY9e2FuaW1lTGlzdFJlZn1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBhbmltZUxpc3RSZWYuY3VycmVudC5mb2N1cygpfVxuICAgICAgPlxuICAgICAgICB7bmV3IEFycmF5KGVwaXNvZGVzLmVwaXNvZGVDb3VudCA+IDggPyA4IDogZXBpc29kZXMuZXBpc29kZUNvdW50KVxuICAgICAgICAgIC5maWxsKDEpXG4gICAgICAgICAgLm1hcCgoX3YsIGkpID0+IChcbiAgICAgICAgICAgIDxFcGlzb2RlQ2FyZFxuICAgICAgICAgICAgICBrZXk9e2kgKyAxfVxuICAgICAgICAgICAgICBhbmltZT17YW5pbWV9XG4gICAgICAgICAgICAgIG51bWJlcj17aSArIDF9XG4gICAgICAgICAgICAgIGVwaXNvZGU9e2VwaXNvZGVzLmVwaXNvZGVzLm5vZGVzW2ldfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkVwaXNvZGVDYXJkIiwic3R5bGVzIiwiU2VjdGlvbiIsImFuaW1lIiwiZXBpc29kZXMiLCJhbmltZUxpc3RSZWYiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJwIiwiY2xhc3NOYW1lIiwiZXBpc29kZVAiLCJ0YWJJbmRleCIsInJlZiIsIm9uTW91c2VFbnRlciIsImN1cnJlbnQiLCJmb2N1cyIsIkFycmF5IiwiZXBpc29kZUNvdW50IiwiZmlsbCIsIm1hcCIsIl92IiwiaSIsIm51bWJlciIsImVwaXNvZGUiLCJub2RlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/anime/EpisodeSection.tsx\n"));

/***/ })

});