exports.id = 356;
exports.ids = [356];
exports.modules = {

/***/ 2253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 21703:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "table_wrapper__T2f_b",
	"titleClockAnimation": "table_titleClockAnimation__kGZfK",
	"wrapperSection": "table_wrapperSection__XN7TV",
	"tableTitle": "table_tableTitle__4hfly",
	"table": "table_table__kiO1d",
	"thead": "table_thead__ZkPxK",
	"th": "table_th__rbLaz",
	"tr": "table_tr__zVCDH",
	"td": "table_td__Jbf4v",
	"links": "table_links__qb9o2",
	"deleteButton": "table_deleteButton__WwxGd",
	"categories": "table_categories__VGshB",
	"spanCategories": "table_spanCategories__1_jiT",
	"categoryList": "table_categoryList__MlXts",
	"Żacy": "table__acy__MK9P8",
	"Skrzaci": "table_Skrzaci__HMBa4",
	"Młodzicy_Młodsi": "table_M_odzicy_M_odsi__rCn2R",
	"Młodzicy": "table_M_odzicy__I7PdG",
	"Kadeci": "table_Kadeci__oCWa7",
	"Juniorzy": "table_Juniorzy__RweDA",
	"Młodzieżowcy": "table_M_odzie_owcy__YE_AP",
	"Seniorzy": "table_Seniorzy__A1zf3",
	"Liga": "table_Liga__7qwNH"
};


/***/ })

};
;