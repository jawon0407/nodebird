"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CommentList.js":
/*!***********************************!*\
  !*** ./components/CommentList.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _actions_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post */ \"./actions/post.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/jawon0407/code/Nodebird/prepare/front/components/CommentList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar userSelector = function userSelector(state) {\n  return state.user;\n};\n\nvar postSelector = function postSelector(state) {\n  return state.post;\n};\n\nvar CommentList = function CommentList(_ref) {\n  _s();\n\n  var item = _ref.item,\n      post = _ref.post,\n      LoginConfirm = _ref.LoginConfirm;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(userSelector),\n      me = _useSelector.me;\n\n  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(postSelector),\n      mainPosts = _useSelector2.mainPosts;\n\n  var id = me === null || me === void 0 ? void 0 : me.id;\n  var comment = post.Comments.find(function (v) {\n    return v.id === item.id;\n  });\n  var liked = comment.CommentLikers.find(function (v) {\n    return v.id === id;\n  });\n  console.log(comment);\n  var onLikeComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    LoginConfirm(); // 해당 댓글의 id를 찾아서 likeComment에 넘겨준다.\n\n    dispatch((0,_actions_post__WEBPACK_IMPORTED_MODULE_3__.likeComment)({\n      commentId: item.id,\n      postId: post.id\n    }));\n  }, [me, mainPosts]);\n  var onUnLikeComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    LoginConfirm();\n    dispatch((0,_actions_post__WEBPACK_IMPORTED_MODULE_3__.unLikeComment)({\n      commentId: item.id,\n      postId: post.id\n    }));\n  }, [me, mainPosts]);\n  var onRemoveComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    LoginConfirm();\n    dispatch((0,_actions_post__WEBPACK_IMPORTED_MODULE_3__.removeComment)({\n      commentId: item.id,\n      postId: post.id\n    }));\n  }, [me, mainPosts]);\n  var onRetweetComment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n    LoginConfirm();\n    dispatch((0,_actions_post__WEBPACK_IMPORTED_MODULE_3__.retweetComment)({\n      commentId: item.id,\n      postId: post.id\n    }));\n  }, [me, mainPosts]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Comment, {\n      author: item.User.nickname,\n      avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/user/\".concat(item.User.id),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n          children: item.User.nickname[0]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 21\n      }, _this),\n      content: item.content,\n      actions: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.RetweetOutlined, {\n        onClick: onRetweetComment\n      }, \"retweet\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 21\n      }, _this), liked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.HeartTwoTone, {\n        twoToneColor: \"#eb2f96\",\n        onClick: onUnLikeComment\n      }, 'heart', false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 23\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.HeartOutlined, {\n        onClick: onLikeComment\n      }, \"heart\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 23\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Popover, {\n        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button.Group, {\n          children: id === comment.UserID ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              children: \"\\uC218\\uC815\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 37\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              type: \"danger\",\n              onClick: onRemoveComment,\n              children: \"\\uC0AD\\uC81C\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 37\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              children: \"\\uC2E0\\uACE0\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 37\n            }, _this)]\n          }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {\n            children: \"\\uC2E0\\uACE0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 33\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 25\n        }, _this),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.EllipsisOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 25\n        }, _this)\n      }, \"more\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(CommentList, \"IT+kI3AZhZwvDJ5YAeOMmdoxEvA=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = CommentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentList);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2NBQUE7WUFBQSxTQUhKO1VBQUEsZ0JBREYsZ0JBTUUsOERBQUMsd0NBQUQ7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFQUjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREo7UUFBQSx1QkFXSSw4REFBQywrREFBRDtVQUFBO1VBQUE7VUFBQTtRQUFBO01BWEosR0FBYSxNQUFiO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FMTztJQVJmO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFESixpQkFESjtBQWdDSCxDQS9ERDs7R0FBTW5CO1VBQ2VsQixzREFDRkQsc0RBQ09BOzs7S0FIcEJtQjtBQWlFTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0LmpzP2RkMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciAsIHVzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBQb3BvdmVyICwgQXZhdGFyICwgQ29tbWVudCAsIEJ1dHRvbiAgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFJldHdlZXRPdXRsaW5lZCAsIEhlYXJ0T3V0bGluZWQgLCBIZWFydFR3b1RvbmUgLCBFbGxpcHNpc091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgbGlrZUNvbW1lbnQgLCB1bkxpa2VDb21tZW50ICwgcmVtb3ZlQ29tbWVudCAsIHJldHdlZXRDb21tZW50IH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0JztcblxuY29uc3QgdXNlclNlbGVjdG9yID0gKHN0YXRlKSA9PiBzdGF0ZS51c2VyO1xuY29uc3QgcG9zdFNlbGVjdG9yID0gKHN0YXRlKSA9PiBzdGF0ZS5wb3N0O1xuXG5jb25zdCBDb21tZW50TGlzdCA9ICh7IGl0ZW0gLCBwb3N0ICwgTG9naW5Db25maXJtIH0pID0+IHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IodXNlclNlbGVjdG9yKTtcbiAgICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IocG9zdFNlbGVjdG9yKTtcbiAgICBjb25zdCBpZCA9IG1lPy5pZDtcbiAgICBjb25zdCBjb21tZW50ID0gcG9zdC5Db21tZW50cy5maW5kKCh2KSA9PiB2LmlkID09PSBpdGVtLmlkKTtcbiAgICBjb25zdCBsaWtlZCA9IGNvbW1lbnQuQ29tbWVudExpa2Vycy5maW5kKCh2KSA9PiB2LmlkID09PSBpZCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb21tZW50KTtcblxuICAgIGNvbnN0IG9uTGlrZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIExvZ2luQ29uZmlybSgpO1xuICAgICAgICAvLyDtlbTri7kg64yT6riA7J2YIGlk66W8IOywvuyVhOyEnCBsaWtlQ29tbWVudOyXkCDrhJjqsqjspIDri6QuXG4gICAgICAgIGRpc3BhdGNoKGxpa2VDb21tZW50KHtjb21tZW50SWQgOiBpdGVtLmlkICwgcG9zdElkIDogcG9zdC5pZH0pKTtcbiAgICB9LFttZSwgbWFpblBvc3RzXSk7XG4gICAgXG4gICAgY29uc3Qgb25Vbkxpa2VDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBMb2dpbkNvbmZpcm0oKTtcbiAgICAgICAgZGlzcGF0Y2godW5MaWtlQ29tbWVudCh7Y29tbWVudElkIDogaXRlbS5pZCAsIHBvc3RJZCA6IHBvc3QuaWR9KSk7XG4gICAgfSxbbWUsIG1haW5Qb3N0c10pO1xuICAgIFxuICAgIGNvbnN0IG9uUmVtb3ZlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgTG9naW5Db25maXJtKCk7XG4gICAgICAgIGRpc3BhdGNoKHJlbW92ZUNvbW1lbnQoe2NvbW1lbnRJZCA6IGl0ZW0uaWQgLCBwb3N0SWQgOiBwb3N0LmlkfSkpO1xuICAgIH0sW21lLCBtYWluUG9zdHNdKTtcbiAgICBcbiAgICBjb25zdCBvblJldHdlZXRDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBMb2dpbkNvbmZpcm0oKTtcbiAgICAgICAgZGlzcGF0Y2gocmV0d2VldENvbW1lbnQoe2NvbW1lbnRJZCA6IGl0ZW0uaWQgLCBwb3N0SWQgOiBwb3N0LmlkfSkpO1xuICAgIH0sW21lLCBtYWluUG9zdHNdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAgYXV0aG9yID0ge2l0ZW0uVXNlci5uaWNrbmFtZX1cbiAgICAgICAgICAgICAgICBhdmF0YXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke2l0ZW0uVXNlci5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZW50ID0ge2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgICBhY3Rpb25zID0ge1tcbiAgICAgICAgICAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgb25DbGljaz17b25SZXR3ZWV0Q29tbWVudH0vPixcbiAgICAgICAgICAgICAgICAgICAgbGlrZWQgXG4gICAgICAgICAgICAgICAgICAgID8gPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9JyNlYjJmOTYnIGtleT0naGVhcnQnIG9uQ2xpY2s9e29uVW5MaWtlQ29tbWVudH0vPiBcbiAgICAgICAgICAgICAgICAgICAgOiA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uTGlrZUNvbW1lbnR9Lz4sXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGtleT1cIm1vcmVcIiBjb250ZW50PXsoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQgPT09IGNvbW1lbnQuVXNlcklEID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7siJjsoJU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRhbmdlclwiIG9uQ2xpY2s9e29uUmVtb3ZlQ29tbWVudH0+7IKt7KCcPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwiTGluayIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJQb3BvdmVyIiwiQXZhdGFyIiwiQ29tbWVudCIsIkJ1dHRvbiIsIlJldHdlZXRPdXRsaW5lZCIsIkhlYXJ0T3V0bGluZWQiLCJIZWFydFR3b1RvbmUiLCJFbGxpcHNpc091dGxpbmVkIiwibGlrZUNvbW1lbnQiLCJ1bkxpa2VDb21tZW50IiwicmVtb3ZlQ29tbWVudCIsInJldHdlZXRDb21tZW50IiwidXNlclNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicG9zdFNlbGVjdG9yIiwicG9zdCIsIkNvbW1lbnRMaXN0IiwiaXRlbSIsIkxvZ2luQ29uZmlybSIsImRpc3BhdGNoIiwibWUiLCJtYWluUG9zdHMiLCJpZCIsImNvbW1lbnQiLCJDb21tZW50cyIsImZpbmQiLCJ2IiwibGlrZWQiLCJDb21tZW50TGlrZXJzIiwiY29uc29sZSIsImxvZyIsIm9uTGlrZUNvbW1lbnQiLCJjb21tZW50SWQiLCJwb3N0SWQiLCJvblVuTGlrZUNvbW1lbnQiLCJvblJlbW92ZUNvbW1lbnQiLCJvblJldHdlZXRDb21tZW50IiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIlVzZXJJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CommentList.js\n"));

/***/ })

});