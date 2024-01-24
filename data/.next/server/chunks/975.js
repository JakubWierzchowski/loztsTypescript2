"use strict";
exports.id = 975;
exports.ids = [975];
exports.modules = {

/***/ 2253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   f: () => (/* binding */ AnimationClassHook)
/* harmony export */ });
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33503);
/* harmony import */ var _getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23169);
/* harmony import */ var _getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ AnimationClassHook,default auto */ 

const AnimationClassHook = (slideInFirst, slideInSecond)=>{
    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_0__/* .useInView */ .YD)({
        triggerOnce: true,
        threshold: 0.2
    });
    const getAnimationClass = (index)=>{
        if (inView) {
            return index % 2 === 0 ? (_getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1___default())[slideInFirst] : (_getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1___default())[slideInSecond];
        }
        return "";
    };
    const getShowAnimationClass = ()=>{
        if (inView) {
            return (_getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1___default())[slideInFirst];
        }
        return "";
    };
    return {
        ref,
        getAnimationClass,
        getShowAnimationClass
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationClassHook);


/***/ }),

/***/ 1649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49559);



function IsAdmin({ children }) {
    const { admin } = (0,_utils_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useUserContext)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: admin ? children : null
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IsAdmin);


/***/ })

};
;