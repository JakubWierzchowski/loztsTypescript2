exports.id = 247;
exports.ids = [247];
exports.modules = {

/***/ 89247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LeagueMainTableComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12697);
/* harmony import */ var _leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_hooks_getAnimationClass_getAnimationClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2253);




function LeagueMainTableComponent({ data, index, title }) {
    const slideInFirst = "slideIn";
    const slideInSecond = "slideOut";
    const { ref, getAnimationClass } = (0,_utils_hooks_getAnimationClass_getAnimationClass__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(slideInFirst, slideInSecond);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        ref: ref,
        className: `${(_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper2)} ${getAnimationClass(index || 0)}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: `${(_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tableTitle)} ${(_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`${title}`.split(" ").join("")]}`,
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().table),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            className: `${(_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().thead)} ${(_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`${title}`.split(" ").join("") || (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["default"])]}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().th),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "LP"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().th),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Klub"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().th),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Ilość meczy"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().th),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Punkty"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().th),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Gry+"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().th),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            children: "Gry-"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            children: data?.map((details, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().tr),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().td),
                                            children: [
                                                " ",
                                                index + 1
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().td),
                                            children: details.team
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().td),
                                            children: details.result.length
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().td),
                                            children: details.wyniki.reduce((acc, el)=>acc + el, 0)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().td),
                                            children: details.result.map(Number).reduce((acc, el)=>acc + el, 0)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: (_leagueMainTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default().td),
                                            children: details.result.length * 10 - details.result.map(Number).reduce((acc, el)=>acc + el, 0)
                                        })
                                    ]
                                }, index))
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 12697:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "leagueMainTable_wrapper__zE_er",
	"title": "leagueMainTable_title__UTYXT",
	"wrapper2": "leagueMainTable_wrapper2__FH7U0",
	"tableTitle": "leagueMainTable_tableTitle__9ywl0",
	"GrupaAwansowa": "leagueMainTable_GrupaAwansowa__tt_Om",
	"GrupaSpadkowa": "leagueMainTable_GrupaSpadkowa__6H5sC",
	"GrupaPółnocna": "leagueMainTable_GrupaP__nocna__AJMpa",
	"GrupaPołudniowa": "leagueMainTable_GrupaPo_udniowa__QId_N",
	"IILigaKobiet": "leagueMainTable_IILigaKobiet__e2z4H",
	"IILigaMężczyzn": "leagueMainTable_IILigaM__czyzn__o0ha8",
	"IIILigaMężczyzn": "leagueMainTable_IIILigaM__czyzn__N1wBc",
	"IVLigaMężczyzn": "leagueMainTable_IVLigaM__czyzn__ToKF1",
	"default": "leagueMainTable_default__fsduG",
	"table": "leagueMainTable_table__iGr4U",
	"thead": "leagueMainTable_thead__oqRFg",
	"th": "leagueMainTable_th__jREoS",
	"tbody": "leagueMainTable_tbody__nchx4",
	"tr": "leagueMainTable_tr__dr5rN",
	"td": "leagueMainTable_td__2__US"
};


/***/ })

};
;