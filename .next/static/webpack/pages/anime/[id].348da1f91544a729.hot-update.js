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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_anime_Episode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/anime/Episode */ \"./src/components/anime/Episode.tsx\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Section = function(param) {\n    var anime = param.anime, episodes = param.episodes;\n    var _this1 = _this;\n    _s();\n    var animeListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 ml-3 text-base font-semibold text-white sm:ml-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl\",\n                children: \"Episodes\"\n            }, void 0, false, {\n                fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                tabIndex: 0,\n                className: \"mt-2 mb-8 ml-3 flex space-x-4 overflow-y-hidden overflow-x-scroll outline-none scrollbar-hide sm:ml-6\",\n                style: {\n                    height: \"25vh\"\n                },\n                ref: animeListRef,\n                onMouseEnter: function() {\n                    return animeListRef.current.focus();\n                },\n                children: new Array(episodes.episodeCount > 8 ? 8 : episodes.episodeCount).fill(1).map(function(_v, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_anime_Episode__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        anime: anime,\n                        number: i + 1,\n                        episode: episodes.episodes.nodes[i]\n                    }, i + 1, false, {\n                        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Section, \"ZGuLRpRYxTnH8Ol9hw2pmMtpGvs=\");\n_c = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c;\n$RefreshReg$(_c, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbmltZS9FcGlzb2RlU2VjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQXNDO0FBRWM7O0FBVXBELElBQU1HLE9BQU8sR0FBMkIsZ0JBQXlCO1FBQXRCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFROzs7SUFDeEQsSUFBTUMsWUFBWSxHQUFHTCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUVqQyxxQkFDRTs7MEJBQ0UsOERBQUNNLEdBQUM7Z0JBQUNDLFNBQVMsRUFBQyxpSEFBaUg7MEJBQUMsVUFFL0g7Ozs7O3FCQUFJOzBCQUVKLDhEQUFDQyxLQUFHO2dCQUNGQyxRQUFRLEVBQUUsQ0FBQztnQkFDWEYsU0FBUyxFQUFDLHVHQUF1RztnQkFDakhHLEtBQUssRUFBRTtvQkFBRUMsTUFBTSxFQUFFLE1BQU07aUJBQUU7Z0JBQ3pCQyxHQUFHLEVBQUVQLFlBQVk7Z0JBQ2pCUSxZQUFZLEVBQUU7MkJBQU1SLFlBQVksQ0FBQ1MsT0FBTyxDQUFDQyxLQUFLLEVBQUU7aUJBQUE7MEJBRS9DLElBQUlDLEtBQUssQ0FBQ1osUUFBUSxDQUFDYSxZQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBR2IsUUFBUSxDQUFDYSxZQUFZLENBQUMsQ0FDOURDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUEMsR0FBRyxDQUFDLFNBQUNDLEVBQUUsRUFBRUMsQ0FBQzt5Q0FDVCw4REFBQ3BCLGlFQUFXO3dCQUVWRSxLQUFLLEVBQUVBLEtBQUs7d0JBQ1ptQixNQUFNLEVBQUVELENBQUMsR0FBRyxDQUFDO3dCQUNiRSxPQUFPLEVBQUVuQixRQUFRLENBQUNBLFFBQVEsQ0FBQ29CLEtBQUssQ0FBQ0gsQ0FBQyxDQUFDO3VCQUg5QkEsQ0FBQyxHQUFHLENBQUM7Ozs7OEJBSVY7aUJBQ0gsQ0FBQzs7Ozs7cUJBQ0E7O29CQUNMLENBQ0g7Q0FDSDtHQTdCS25CLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQStCYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FuaW1lL0VwaXNvZGVTZWN0aW9uLnRzeD8yODQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBFcGlzb2RlQ2FyZCBmcm9tICdAY29tcG9uZW50cy9hbmltZS9FcGlzb2RlJztcbmltcG9ydCB7IEFuaW1lQmFubmVyRnJhZ21lbnQgfSBmcm9tICdAZ2VuZXJhdGVkL2FuaUxpc3QnO1xuaW1wb3J0IHsgRXBpc29kZXNMaXN0RnJhZ21lbnQgfSBmcm9tICdAZ2VuZXJhdGVkL2tpdHN1JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2VwaXNvZGVzLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvblByb3BzIHtcbiAgYW5pbWU6IEFuaW1lQmFubmVyRnJhZ21lbnQ7XG4gIGVwaXNvZGVzOiBFcGlzb2Rlc0xpc3RGcmFnbWVudDtcbn1cblxuY29uc3QgU2VjdGlvbjogUmVhY3QuRkM8U2VjdGlvblByb3BzPiA9ICh7IGFuaW1lLCBlcGlzb2RlcyB9KSA9PiB7XG4gIGNvbnN0IGFuaW1lTGlzdFJlZiA9IHVzZVJlZihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00IG1sLTMgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTptbC02IHNtOnRleHQtbGcgbWQ6dGV4dC14bCBsZzp0ZXh0LTJ4bCB4bDp0ZXh0LTN4bCAyeGw6dGV4dC00eGxcIj5cbiAgICAgICAgRXBpc29kZXNcbiAgICAgIDwvcD5cblxuICAgICAgPGRpdlxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBtYi04IG1sLTMgZmxleCBzcGFjZS14LTQgb3ZlcmZsb3cteS1oaWRkZW4gb3ZlcmZsb3cteC1zY3JvbGwgb3V0bGluZS1ub25lIHNjcm9sbGJhci1oaWRlIHNtOm1sLTZcIlxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcyNXZoJyB9fVxuICAgICAgICByZWY9e2FuaW1lTGlzdFJlZn1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBhbmltZUxpc3RSZWYuY3VycmVudC5mb2N1cygpfVxuICAgICAgPlxuICAgICAgICB7bmV3IEFycmF5KGVwaXNvZGVzLmVwaXNvZGVDb3VudCA+IDggPyA4IDogZXBpc29kZXMuZXBpc29kZUNvdW50KVxuICAgICAgICAgIC5maWxsKDEpXG4gICAgICAgICAgLm1hcCgoX3YsIGkpID0+IChcbiAgICAgICAgICAgIDxFcGlzb2RlQ2FyZFxuICAgICAgICAgICAgICBrZXk9e2kgKyAxfVxuICAgICAgICAgICAgICBhbmltZT17YW5pbWV9XG4gICAgICAgICAgICAgIG51bWJlcj17aSArIDF9XG4gICAgICAgICAgICAgIGVwaXNvZGU9e2VwaXNvZGVzLmVwaXNvZGVzLm5vZGVzW2ldfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkVwaXNvZGVDYXJkIiwiU2VjdGlvbiIsImFuaW1lIiwiZXBpc29kZXMiLCJhbmltZUxpc3RSZWYiLCJwIiwiY2xhc3NOYW1lIiwiZGl2IiwidGFiSW5kZXgiLCJzdHlsZSIsImhlaWdodCIsInJlZiIsIm9uTW91c2VFbnRlciIsImN1cnJlbnQiLCJmb2N1cyIsIkFycmF5IiwiZXBpc29kZUNvdW50IiwiZmlsbCIsIm1hcCIsIl92IiwiaSIsIm51bWJlciIsImVwaXNvZGUiLCJub2RlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/anime/EpisodeSection.tsx\n"));

/***/ })

});