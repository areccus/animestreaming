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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_anime_Episode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/anime/Episode */ \"./src/components/anime/Episode.tsx\");\n/* harmony import */ var _styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/episodes.module.css */ \"./src/styles/episodes.module.css\");\n/* harmony import */ var _styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Section = function(param) {\n    var anime = param.anime, episodes = param.episodes;\n    var _this1 = _this;\n    _s();\n    var animeListRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginLeft: \"5%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 ml-3 text-base font-semibold text-white sm:ml-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl\",\n                children: \"Episodes\"\n            }, void 0, false, {\n                fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                tabIndex: 0,\n                className: (_styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3___default().episodes),\n                ref: animeListRef,\n                onMouseEnter: function() {\n                    return animeListRef.current.focus();\n                },\n                children: new Array(episodes.episodeCount > 8 ? 8 : episodes.episodeCount).fill(1).map(function(_v, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_anime_Episode__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        anime: anime,\n                        number: i + 1,\n                        episode: episodes.episodes.nodes[i]\n                    }, i + 1, false, {\n                        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/EpisodeSection.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(Section, \"ZGuLRpRYxTnH8Ol9hw2pmMtpGvs=\");\n_c = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c;\n$RefreshReg$(_c, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbmltZS9FcGlzb2RlU2VjdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBc0M7QUFFYztBQUdDOztBQU9yRCxJQUFNSSxPQUFPLEdBQTJCLGdCQUF5QjtRQUF0QkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs7O0lBQ3hELElBQU1DLFlBQVksR0FBR04sNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFakMscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLFVBQVUsRUFBRSxJQUFJO1NBQUU7OzBCQUM5Qiw4REFBQ0MsR0FBQztnQkFBQ0MsU0FBUyxFQUFDLGlIQUFpSDswQkFBQyxVQUUvSDs7Ozs7cUJBQUk7MEJBRUosOERBQUNKLEtBQUc7Z0JBQ0ZLLFFBQVEsRUFBRSxDQUFDO2dCQUNYRCxTQUFTLEVBQUVULDZFQUFlO2dCQUMxQlcsR0FBRyxFQUFFUCxZQUFZO2dCQUNqQlEsWUFBWSxFQUFFOzJCQUFNUixZQUFZLENBQUNTLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO2lCQUFBOzBCQUUvQyxJQUFJQyxLQUFLLENBQUNaLFFBQVEsQ0FBQ2EsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUdiLFFBQVEsQ0FBQ2EsWUFBWSxDQUFDLENBQzlEQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1BDLEdBQUcsQ0FBQyxTQUFDQyxFQUFFLEVBQUVDLENBQUM7eUNBQ1QsOERBQUNyQixpRUFBVzt3QkFFVkcsS0FBSyxFQUFFQSxLQUFLO3dCQUNabUIsTUFBTSxFQUFFRCxDQUFDLEdBQUcsQ0FBQzt3QkFDYkUsT0FBTyxFQUFFbkIsUUFBUSxDQUFDQSxRQUFRLENBQUNvQixLQUFLLENBQUNILENBQUMsQ0FBQzt1QkFIOUJBLENBQUMsR0FBRyxDQUFDOzs7OzhCQUlWO2lCQUNILENBQUM7Ozs7O3FCQUNBOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0E1QktuQixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUE4QmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hbmltZS9FcGlzb2RlU2VjdGlvbi50c3g/Mjg0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRXBpc29kZUNhcmQgZnJvbSAnQGNvbXBvbmVudHMvYW5pbWUvRXBpc29kZSc7XG5pbXBvcnQgeyBBbmltZUJhbm5lckZyYWdtZW50IH0gZnJvbSAnQGdlbmVyYXRlZC9hbmlMaXN0JztcbmltcG9ydCB7IEVwaXNvZGVzTGlzdEZyYWdtZW50IH0gZnJvbSAnQGdlbmVyYXRlZC9raXRzdSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9lcGlzb2Rlcy5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb25Qcm9wcyB7XG4gIGFuaW1lOiBBbmltZUJhbm5lckZyYWdtZW50O1xuICBlcGlzb2RlczogRXBpc29kZXNMaXN0RnJhZ21lbnQ7XG59XG5cbmNvbnN0IFNlY3Rpb246IFJlYWN0LkZDPFNlY3Rpb25Qcm9wcz4gPSAoeyBhbmltZSwgZXBpc29kZXMgfSkgPT4ge1xuICBjb25zdCBhbmltZUxpc3RSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICc1JScgfX0+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00IG1sLTMgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzbTptbC02IHNtOnRleHQtbGcgbWQ6dGV4dC14bCBsZzp0ZXh0LTJ4bCB4bDp0ZXh0LTN4bCAyeGw6dGV4dC00eGxcIj5cbiAgICAgICAgRXBpc29kZXNcbiAgICAgIDwvcD5cblxuICAgICAgPGRpdlxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXBpc29kZXN9XG4gICAgICAgIHJlZj17YW5pbWVMaXN0UmVmfVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGFuaW1lTGlzdFJlZi5jdXJyZW50LmZvY3VzKCl9XG4gICAgICA+XG4gICAgICAgIHtuZXcgQXJyYXkoZXBpc29kZXMuZXBpc29kZUNvdW50ID4gOCA/IDggOiBlcGlzb2Rlcy5lcGlzb2RlQ291bnQpXG4gICAgICAgICAgLmZpbGwoMSlcbiAgICAgICAgICAubWFwKChfdiwgaSkgPT4gKFxuICAgICAgICAgICAgPEVwaXNvZGVDYXJkXG4gICAgICAgICAgICAgIGtleT17aSArIDF9XG4gICAgICAgICAgICAgIGFuaW1lPXthbmltZX1cbiAgICAgICAgICAgICAgbnVtYmVyPXtpICsgMX1cbiAgICAgICAgICAgICAgZXBpc29kZT17ZXBpc29kZXMuZXBpc29kZXMubm9kZXNbaV19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiRXBpc29kZUNhcmQiLCJzdHlsZXMiLCJTZWN0aW9uIiwiYW5pbWUiLCJlcGlzb2RlcyIsImFuaW1lTGlzdFJlZiIsImRpdiIsInN0eWxlIiwibWFyZ2luTGVmdCIsInAiLCJjbGFzc05hbWUiLCJ0YWJJbmRleCIsInJlZiIsIm9uTW91c2VFbnRlciIsImN1cnJlbnQiLCJmb2N1cyIsIkFycmF5IiwiZXBpc29kZUNvdW50IiwiZmlsbCIsIm1hcCIsIl92IiwiaSIsIm51bWJlciIsImVwaXNvZGUiLCJub2RlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/anime/EpisodeSection.tsx\n"));

/***/ })

});