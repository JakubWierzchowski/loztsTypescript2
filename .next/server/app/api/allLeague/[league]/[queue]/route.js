"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
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

/***/ 78406:
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

// NAMESPACE OBJECT: ./app/api/allLeague/[league]/[queue]/route.ts
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
;// CONCATENATED MODULE: ./app/api/allLeague/[league]/[queue]/route.ts


async function GET(req, res) {
    const filePath = (0,buildExtractPath/* buildPath */.L)("league.json");
    const leagueData = (0,buildExtractPath/* extractPath */.v)(filePath);
    const url = new URL(req.url);
    const newUrl = url.pathname.replace(`/api/allLeague/`, "");
    const newLink = newUrl.split("/");
    const newLiga = newLink[0];
    const newId = newLink[1];
    const filterCategory = leagueData.map((item)=>item.queueDetails.find((item2)=>item2.id === newId));
    return new Response(JSON.stringify(filterCategory));
}
async function DELETE(req, res) {
    const filePath = (0,buildExtractPath/* buildPath */.L)("league.json");
    const leagueData = (0,buildExtractPath/* extractPath */.v)(filePath);
    const url = new URL(req.url);
    const newUrl = url.pathname.replace(`/api/allLeague/`, "");
    const newLink = newUrl.split("/");
    const newLeague = newLink[0];
    const newId = newLink[1];
    try {
        const filterLeague = leagueData.filter((item)=>item.league === newLeague);
        const [findIndex] = filterLeague.map((item)=>item.queueDetails.findIndex((ids)=>ids.id === newId));
        const deleteQueue = filterLeague.map((item)=>item.queueDetails.splice(findIndex, 1));
        external_fs_default().writeFileSync(filePath, JSON.stringify(leagueData));
        return new Response(JSON.stringify({
            message: "Usunieto artykul",
            deleteQueue
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            message: "Wystąpił błąd"
        }));
    }
} // export async function DELETE(req: Request, res: Response) {
 //
 //   const url = new URL(req.url);
 //   const newUrl = url.pathname.replace("/api/league/", "");
 //   const filterTournament = leagueData.map((item) =>
 //     item.queueDetails.find((item) => item.id === newUrl)
 //   );
 //   try {
 //     const findIndex = leagueData
 //       .map((item) => item.queueDetails.findIndex((ids) => ids.id === newUrl))
 //       .flat();
 //     const filteredFindIndex = findIndex.filter((index) => index !== undefined);
 //     const filterPlayer = filteredFindIndex.filter((item) => item !== -1);
 //     console.log(filterPlayer);
 //     const deleteQueue = leagueData.map((item) =>
 //       item.queueDetails.splice(index, 1)
 //     );
 //     fs.writeFileSync(filePath, JSON.stringify(leagueData));
 //     return new Response(JSON.stringify({ message: "Usunieto artykul" }));
 //   } catch (error) {
 //     return new Response(JSON.stringify({ message: "Wystąpił błąd" }));
 //   }
 // }

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FallLeague%2F%5Bleague%5D%2F%5Bqueue%5D%2Froute&name=app%2Fapi%2FallLeague%2F%5Bleague%5D%2F%5Bqueue%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2FallLeague%2F%5Bleague%5D%2F%5Bqueue%5D%2Froute.ts&appDir=%2FUsers%2FKuba%2Floztstypescript%2Floztstypescript2%2Fapp&appPaths=%2Fapi%2FallLeague%2F%5Bleague%5D%2F%5Bqueue%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/allLeague/[league]/[queue]/route","pathname":"/api/allLeague/[league]/[queue]","filename":"route","bundlePath":"app/api/allLeague/[league]/[queue]/route"},"resolvedPagePath":"/Users/Kuba/loztstypescript/loztstypescript2/app/api/allLeague/[league]/[queue]/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/allLeague/[league]/[queue]/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [212,632], () => (__webpack_exec__(78406)));
module.exports = __webpack_exports__;

})();