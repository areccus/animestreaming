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

/***/ "./src/components/anime/Episode.tsx":
/*!******************************************!*\
  !*** ./src/components/anime/Episode.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Card = function(param) {\n    var anime = param.anime, number = param.number, episode = param.episode;\n    var ref;\n    var title = episode ? episode.titles.canonical : \"Episode No. \".concat(number);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/watch/\".concat(anime.id, \"?episode=\").concat(number),\n        passHref: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"w-64 transform cursor-pointer p-2 transition duration-300 ease-out hover:scale-105 sm:w-80\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"aspect-w-3 aspect-h-2 relative w-64 sm:w-80\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                alt: \"Cover Image\",\n                                src: episode && ((ref = episode.thumbnail) === null || ref === void 0 ? void 0 : ref.original.url) || anime.coverImage.large || anime.coverImage.medium || anime.bannerImage,\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                objectPosition: \"center\",\n                                className: \"rounded-md\"\n                            }, void 0, false, {\n                                fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"absolute top-0 right-0 mt-2 h-12 text-xl font-bold text-white\",\n                            children: number\n                        }, void 0, false, {\n                            fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-2 text-sm font-bold text-white line-clamp-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbmltZS9FcGlzb2RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQStCO0FBQ0Y7QUFZN0IsSUFBTUUsSUFBSSxHQUF3QixnQkFBZ0M7UUFBN0JDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsT0FBTyxTQUFQQSxPQUFPO1FBVy9CQSxHQUFpQjtJQVYzQyxJQUFNQyxLQUFLLEdBQUdELE9BQU8sR0FBR0EsT0FBTyxDQUFDRSxNQUFNLENBQUNDLFNBQVMsR0FBRyxjQUFhLENBQVMsT0FBUEosTUFBTSxDQUFFO0lBRTFFLHFCQUNFLDhEQUFDSCxrREFBSTtRQUFDUSxJQUFJLEVBQUUsU0FBUSxDQUFzQkwsTUFBTSxDQUExQkQsS0FBSyxDQUFDTyxFQUFFLEVBQUMsV0FBUyxDQUFTLFFBQVBOLE1BQU0sQ0FBRTtRQUFFTyxRQUFRO2tCQUMxRCw0RUFBQ0MsR0FBQztZQUFDQyxTQUFTLEVBQUMsNEZBQTRGOzs4QkFDdkcsOERBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxVQUFVOztzQ0FDdkIsOERBQUNDLEtBQUc7NEJBQUNELFNBQVMsRUFBQyw2Q0FBNkM7c0NBQzFELDRFQUFDYixtREFBSztnQ0FDSmUsR0FBRyxFQUFDLGFBQWE7Z0NBQ2pCQyxHQUFHLEVBQ0QsT0FBUSxLQUFJWCxDQUFBQSxHQUFpQixHQUFqQkEsT0FBTyxDQUFDWSxTQUFTLGNBQWpCWixHQUFpQixXQUFVLEdBQTNCQSxLQUFBQSxDQUEyQixHQUEzQkEsR0FBaUIsQ0FBRWEsUUFBUSxDQUFDQyxHQUFHLEtBQzNDaEIsS0FBSyxDQUFDaUIsVUFBVSxDQUFDQyxLQUFLLElBQ3RCbEIsS0FBSyxDQUFDaUIsVUFBVSxDQUFDRSxNQUFNLElBQ3ZCbkIsS0FBSyxDQUFDb0IsV0FBVztnQ0FFbkJDLFNBQVMsRUFBQyxPQUFPO2dDQUNqQkMsTUFBTSxFQUFDLE1BQU07Z0NBQ2JDLGNBQWMsRUFBQyxRQUFRO2dDQUN2QmIsU0FBUyxFQUFDLFlBQVk7Ozs7O3FDQUN0Qjs7Ozs7aUNBQ0U7c0NBQ04sOERBQUNjLEdBQUM7NEJBQUNkLFNBQVMsRUFBQywrREFBK0Q7c0NBQ3pFVCxNQUFNOzs7OztpQ0FDTDs7Ozs7O3lCQUNBOzhCQUVOLDhEQUFDVSxLQUFHOzhCQUNGLDRFQUFDYSxHQUFDO3dCQUFDZCxTQUFTLEVBQUMsZ0RBQWdEO2tDQUMxRFAsS0FBSzs7Ozs7NkJBQ0o7Ozs7O3lCQUNBOzs7Ozs7aUJBQ0o7Ozs7O2FBQ0MsQ0FDUDtDQUNIO0FBbkNLSixLQUFBQSxJQUFJO0FBcUNWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYW5pbWUvRXBpc29kZS50c3g/NDIzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBBbmltZUJhbm5lckZyYWdtZW50LCBBbmltZUluZm9GcmFnbWVudCB9IGZyb20gJ0BnZW5lcmF0ZWQvYW5pTGlzdCc7XG5pbXBvcnQgeyBFcGlzb2RlSW5mb0ZyYWdtZW50IH0gZnJvbSAnQGdlbmVyYXRlZC9raXRzdSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9lcGlzb2Rlcy5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIGFuaW1lOiBBbmltZUJhbm5lckZyYWdtZW50ICYgQW5pbWVJbmZvRnJhZ21lbnQ7XG4gIG51bWJlcjogbnVtYmVyO1xuICBlcGlzb2RlPzogRXBpc29kZUluZm9GcmFnbWVudCB8IG51bGw7XG59XG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPENhcmRQcm9wcz4gPSAoeyBhbmltZSwgbnVtYmVyLCBlcGlzb2RlIH0pID0+IHtcbiAgY29uc3QgdGl0bGUgPSBlcGlzb2RlID8gZXBpc29kZS50aXRsZXMuY2Fub25pY2FsIDogYEVwaXNvZGUgTm8uICR7bnVtYmVyfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtgL3dhdGNoLyR7YW5pbWUuaWR9P2VwaXNvZGU9JHtudW1iZXJ9YH0gcGFzc0hyZWY+XG4gICAgICA8YSBjbGFzc05hbWU9XCJ3LTY0IHRyYW5zZm9ybSBjdXJzb3ItcG9pbnRlciBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgaG92ZXI6c2NhbGUtMTA1IHNtOnctODBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LXctMyBhc3BlY3QtaC0yIHJlbGF0aXZlIHctNjQgc206dy04MFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIGFsdD1cIkNvdmVyIEltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAoZXBpc29kZSAmJiBlcGlzb2RlLnRodW1ibmFpbD8ub3JpZ2luYWwudXJsKSB8fFxuICAgICAgICAgICAgICAgIGFuaW1lLmNvdmVySW1hZ2UubGFyZ2UgfHxcbiAgICAgICAgICAgICAgICBhbmltZS5jb3ZlckltYWdlLm1lZGl1bSB8fFxuICAgICAgICAgICAgICAgIGFuaW1lLmJhbm5lckltYWdlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBtdC0yIGgtMTIgdGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge251bWJlcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGxpbmUtY2xhbXAtMlwiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJDYXJkIiwiYW5pbWUiLCJudW1iZXIiLCJlcGlzb2RlIiwidGl0bGUiLCJ0aXRsZXMiLCJjYW5vbmljYWwiLCJocmVmIiwiaWQiLCJwYXNzSHJlZiIsImEiLCJjbGFzc05hbWUiLCJkaXYiLCJhbHQiLCJzcmMiLCJ0aHVtYm5haWwiLCJvcmlnaW5hbCIsInVybCIsImNvdmVySW1hZ2UiLCJsYXJnZSIsIm1lZGl1bSIsImJhbm5lckltYWdlIiwib2JqZWN0Rml0IiwibGF5b3V0Iiwib2JqZWN0UG9zaXRpb24iLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/anime/Episode.tsx\n"));

/***/ })

});