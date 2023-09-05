"use strict";
(() => {
var exports = {};
exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 89276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/allLeague/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./utils/api/buildExtractPath.ts
var buildExtractPath = __webpack_require__(93470);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(7399);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 3 modules
var v4 = __webpack_require__(51063);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(57147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: ./app/api/allLeague/route.ts





async function GET(req, res) {
    const filePath = (0,buildExtractPath/* buildPath */.L)("league.json");
    const leagueData = (0,buildExtractPath/* extractPath */.v)(filePath);
    return new Response(JSON.stringify(leagueData));
}
async function POST(req, res) {
    const filePath = (0,buildExtractPath/* buildPath */.L)("league.json");
    const leagueData = (0,buildExtractPath/* extractPath */.v)(filePath);
    const myDate = moment_default()().format("YYYY-DD-MM HH:mm:ss");
    const { matchDay, path } = await req.json();
    const leagueDataFilter = leagueData.filter((item)=>item.league === path);
    const newMatchDate = {
        id: (0,v4/* default */.Z)(),
        day: new Date().toISOString(),
        matchDay: matchDay
    };
    const existingCategory = leagueDataFilter.flatMap((item)=>item.queueDetails.filter((item2)=>item2.matchDay === newMatchDate.matchDay));
    if (existingCategory.length > 0) {
        return next_response/* default */.Z.json({
            message: "Taka kolejka już istnieje"
        }, {
            status: 409
        });
    }
    if (!leagueData.find((item)=>item.queueDetails)) {
        return next_response/* default */.Z.json({
            message: "Nie można znaleźć takiej ligi"
        }, {
            status: 404
        });
    }
    if (leagueDataFilter) {
        leagueDataFilter.map((item)=>item.queueDetails.push(newMatchDate));
    }
    external_fs_default().writeFileSync(filePath, JSON.stringify(leagueData, null, 2));
    return new Response(JSON.stringify({
        message: "Dodano kolejkę",
        newMatchDate
    }));
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FallLeague%2Froute&name=app%2Fapi%2FallLeague%2Froute&pagePath=private-next-app-dir%2Fapi%2FallLeague%2Froute.ts&appDir=%2FUsers%2FKuba%2Floztstypescript%2Floztstypescript2%2Fapp&appPaths=%2Fapi%2FallLeague%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/allLeague/route","pathname":"/api/allLeague","filename":"route","bundlePath":"app/api/allLeague/route"},"resolvedPagePath":"/Users/Kuba/loztstypescript/loztstypescript2/app/api/allLeague/route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/allLeague/route"

    

/***/ }),

/***/ 93470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ buildPath),
/* harmony export */   v: () => (/* binding */ extractPath)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


function buildPath(dataName) {
    return path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "data", dataName);
}
function extractPath(filePath) {
    const fileData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);
    return data;
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [212,632,335,434,63], () => (__webpack_exec__(89276)));
module.exports = __webpack_exports__;

})();