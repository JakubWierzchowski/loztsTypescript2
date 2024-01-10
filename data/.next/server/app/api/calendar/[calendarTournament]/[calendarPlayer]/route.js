"use strict";
(() => {
var exports = {};
exports.id = 457;
exports.ids = [457];
exports.modules = {

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

/***/ 12205:
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

// NAMESPACE OBJECT: ./app/api/calendar/[calendarTournament]/[calendarPlayer]/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(57147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: ./utils/api/buildExtractPath.ts
var buildExtractPath = __webpack_require__(93470);
;// CONCATENATED MODULE: ./app/api/calendar/[calendarTournament]/[calendarPlayer]/route.ts


async function GET(req, res) {
    const filePath = (0,buildExtractPath/* buildPath */.L)("calendarDate.json");
    const calendar = (0,buildExtractPath/* extractPath */.v)(filePath);
    const url = new URL(req.url);
    const newUrl = url.pathname.replace("/api/calendar/", "");
    const newLink = newUrl.split("/");
    const newId = newLink[1];
    const filterCategory = calendar.map((item)=>item.details.map((item)=>item.players?.find((item)=>item.id === newId)));
    return new Response(JSON.stringify(filterCategory));
}
async function DELETE(req, res) {
    const filePath = (0,buildExtractPath/* buildPath */.L)("calendarDate.json");
    const calendar = (0,buildExtractPath/* extractPath */.v)(filePath);
    const url = new URL(req.url);
    const newUrl = url.pathname.replace("/api/calendar/", "");
    const newLink = newUrl.split("/");
    const tournamentPath = newLink[0];
    const newId = newLink[1];
    const filterTournament = calendar.map((item)=>item.details.find((item2)=>item2.link === tournamentPath));
    const filterPlayer = filterTournament.map((item)=>item?.players?.find((player)=>player.id === newId));
    const findIndex = filterTournament.map((item)=>item?.players?.findIndex((player)=>player.id === newId)).flat();
    const filteredFindIndex = findIndex.filter((index)=>index !== undefined);
    filterTournament.forEach((item)=>{
        if (item) {
            item.players = item?.players?.filter((_, index)=>{
                return !filteredFindIndex.includes(index);
            });
        }
    });
    external_fs_default().writeFileSync(filePath, JSON.stringify(calendar));
    return new Response(JSON.stringify({
        message: "Usunieto zawodnika:",
        filterPlayer
    }));
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcalendar%2F%5BcalendarTournament%5D%2F%5BcalendarPlayer%5D%2Froute&name=app%2Fapi%2Fcalendar%2F%5BcalendarTournament%5D%2F%5BcalendarPlayer%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcalendar%2F%5BcalendarTournament%5D%2F%5BcalendarPlayer%5D%2Froute.ts&appDir=%2FUsers%2FKuba%2Floztstypescript%2Floztstypescript2%2Fapp&appPaths=%2Fapi%2Fcalendar%2F%5BcalendarTournament%5D%2F%5BcalendarPlayer%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/calendar/[calendarTournament]/[calendarPlayer]/route","pathname":"/api/calendar/[calendarTournament]/[calendarPlayer]","filename":"route","bundlePath":"app/api/calendar/[calendarTournament]/[calendarPlayer]/route"},"resolvedPagePath":"/Users/Kuba/loztstypescript/loztstypescript2/app/api/calendar/[calendarTournament]/[calendarPlayer]/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/calendar/[calendarTournament]/[calendarPlayer]/route"

    

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [212,632], () => (__webpack_exec__(12205)));
module.exports = __webpack_exports__;

})();