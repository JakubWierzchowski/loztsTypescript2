exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 2253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33503);
/* harmony import */ var _getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23169);
/* harmony import */ var _getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_getAnimationStyles_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

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

/***/ 23169:
/***/ ((module) => {

// Exports
module.exports = {
	"slideIn": "getAnimationStyles_slideIn__WjWHg",
	"slideInAnimationRight": "getAnimationStyles_slideInAnimationRight__hZBN4",
	"slideOut": "getAnimationStyles_slideOut__Wg2L9",
	"slideInAnimationLeft": "getAnimationStyles_slideInAnimationLeft__NxbYP",
	"slideInTop": "getAnimationStyles_slideInTop__KEZhb",
	"slideInAnimationTop": "getAnimationStyles_slideInAnimationTop__bViRP",
	"slideInBottom": "getAnimationStyles_slideInBottom__1BFwT",
	"slideInAnimationBottom": "getAnimationStyles_slideInAnimationBottom__SswQB",
	"showAnimationDelay": "getAnimationStyles_showAnimationDelay__x7yGm",
	"showItems": "getAnimationStyles_showItems___yUM4"
};


/***/ })

};
;