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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/episodes.module.css */ \"./src/styles/episodes.module.css\");\n/* harmony import */ var _styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar Card = function(param) {\n    var anime = param.anime, number = param.number, episode = param.episode;\n    var ref;\n    var title = episode ? episode.titles.canonical : \"Episode No. \".concat(number);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/watch/\".concat(anime.id, \"?episode=\").concat(number),\n        passHref: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: (_styles_episodes_module_css__WEBPACK_IMPORTED_MODULE_3___default().episode),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"aspect-w-3 aspect-h-2 relative w-64 sm:w-80\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            alt: \"Cover Image\",\n                            src: episode && ((ref = episode.thumbnail) === null || ref === void 0 ? void 0 : ref.original.url) || anime.coverImage.large || anime.coverImage.medium || anime.bannerImage,\n                            objectFit: \"cover\",\n                            layout: \"fill\",\n                            objectPosition: \"center\",\n                            className: \"rounded-md\"\n                        }, void 0, false, {\n                            fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-2 text-sm font-bold text-white line-clamp-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/areccusbranch/Documents/PersonalProjects/animestreaming/src/components/anime/Episode.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbmltZS9FcGlzb2RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDRjtBQUl3QjtBQVFyRCxJQUFNRyxJQUFJLEdBQXdCLGdCQUFnQztRQUE3QkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87UUFXL0JBLEdBQWlCO0lBVjNDLElBQU1DLEtBQUssR0FBR0QsT0FBTyxHQUFHQSxPQUFPLENBQUNFLE1BQU0sQ0FBQ0MsU0FBUyxHQUFHLGNBQWEsQ0FBUyxPQUFQSixNQUFNLENBQUU7SUFFMUUscUJBQ0UsOERBQUNKLGtEQUFJO1FBQUNTLElBQUksRUFBRSxTQUFRLENBQXNCTCxNQUFNLENBQTFCRCxLQUFLLENBQUNPLEVBQUUsRUFBQyxXQUFTLENBQVMsUUFBUE4sTUFBTSxDQUFFO1FBQUVPLFFBQVE7a0JBQzFELDRFQUFDQyxHQUFDO1lBQUNDLFNBQVMsRUFBRVosNEVBQWM7OzhCQUMxQiw4REFBQ2EsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLFVBQVU7OEJBQ3ZCLDRFQUFDQyxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsNkNBQTZDO2tDQUMxRCw0RUFBQ2QsbURBQUs7NEJBQ0pnQixHQUFHLEVBQUMsYUFBYTs0QkFDakJDLEdBQUcsRUFDRCxPQUFRLEtBQUlYLENBQUFBLEdBQWlCLEdBQWpCQSxPQUFPLENBQUNZLFNBQVMsY0FBakJaLEdBQWlCLFdBQVUsR0FBM0JBLEtBQUFBLENBQTJCLEdBQTNCQSxHQUFpQixDQUFFYSxRQUFRLENBQUNDLEdBQUcsS0FDM0NoQixLQUFLLENBQUNpQixVQUFVLENBQUNDLEtBQUssSUFDdEJsQixLQUFLLENBQUNpQixVQUFVLENBQUNFLE1BQU0sSUFDdkJuQixLQUFLLENBQUNvQixXQUFXOzRCQUVuQkMsU0FBUyxFQUFDLE9BQU87NEJBQ2pCQyxNQUFNLEVBQUMsTUFBTTs0QkFDYkMsY0FBYyxFQUFDLFFBQVE7NEJBQ3ZCYixTQUFTLEVBQUMsWUFBWTs7Ozs7aUNBQ3RCOzs7Ozs2QkFDRTs7Ozs7eUJBSUY7OEJBRU4sOERBQUNDLEtBQUc7OEJBQ0YsNEVBQUNhLEdBQUM7d0JBQUNkLFNBQVMsRUFBQyxnREFBZ0Q7a0NBQzFEUCxLQUFLOzs7Ozs2QkFDSjs7Ozs7eUJBQ0E7Ozs7OztpQkFDSjs7Ozs7YUFDQyxDQUNQO0NBQ0g7QUFuQ0tKLEtBQUFBLElBQUk7QUFxQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hbmltZS9FcGlzb2RlLnRzeD80MjMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IEFuaW1lQmFubmVyRnJhZ21lbnQsIEFuaW1lSW5mb0ZyYWdtZW50IH0gZnJvbSAnQGdlbmVyYXRlZC9hbmlMaXN0JztcbmltcG9ydCB7IEVwaXNvZGVJbmZvRnJhZ21lbnQgfSBmcm9tICdAZ2VuZXJhdGVkL2tpdHN1JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2VwaXNvZGVzLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFByb3BzIHtcbiAgYW5pbWU6IEFuaW1lQmFubmVyRnJhZ21lbnQgJiBBbmltZUluZm9GcmFnbWVudDtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGVwaXNvZGU/OiBFcGlzb2RlSW5mb0ZyYWdtZW50IHwgbnVsbDtcbn1cblxuY29uc3QgQ2FyZDogUmVhY3QuRkM8Q2FyZFByb3BzPiA9ICh7IGFuaW1lLCBudW1iZXIsIGVwaXNvZGUgfSkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGVwaXNvZGUgPyBlcGlzb2RlLnRpdGxlcy5jYW5vbmljYWwgOiBgRXBpc29kZSBOby4gJHtudW1iZXJ9YDtcblxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2Avd2F0Y2gvJHthbmltZS5pZH0/ZXBpc29kZT0ke251bWJlcn1gfSBwYXNzSHJlZj5cbiAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3Qtdy0zIGFzcGVjdC1oLTIgcmVsYXRpdmUgdy02NCBzbTp3LTgwXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgYWx0PVwiQ292ZXIgSW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIChlcGlzb2RlICYmIGVwaXNvZGUudGh1bWJuYWlsPy5vcmlnaW5hbC51cmwpIHx8XG4gICAgICAgICAgICAgICAgYW5pbWUuY292ZXJJbWFnZS5sYXJnZSB8fFxuICAgICAgICAgICAgICAgIGFuaW1lLmNvdmVySW1hZ2UubWVkaXVtIHx8XG4gICAgICAgICAgICAgICAgYW5pbWUuYmFubmVySW1hZ2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBtdC0yIGgtMTIgdGV4dC14bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAge251bWJlcn1cbiAgICAgICAgICA8L3A+ICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBsaW5lLWNsYW1wLTJcIj5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwic3R5bGVzIiwiQ2FyZCIsImFuaW1lIiwibnVtYmVyIiwiZXBpc29kZSIsInRpdGxlIiwidGl0bGVzIiwiY2Fub25pY2FsIiwiaHJlZiIsImlkIiwicGFzc0hyZWYiLCJhIiwiY2xhc3NOYW1lIiwiZGl2IiwiYWx0Iiwic3JjIiwidGh1bWJuYWlsIiwib3JpZ2luYWwiLCJ1cmwiLCJjb3ZlckltYWdlIiwibGFyZ2UiLCJtZWRpdW0iLCJiYW5uZXJJbWFnZSIsIm9iamVjdEZpdCIsImxheW91dCIsIm9iamVjdFBvc2l0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/anime/Episode.tsx\n"));

/***/ })

});