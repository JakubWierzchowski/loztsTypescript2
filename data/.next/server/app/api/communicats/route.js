"use strict";
(() => {
var exports = {};
exports.id = 917;
exports.ids = [917];
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

/***/ 38393:
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

// NAMESPACE OBJECT: ./app/api/communicats/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./utils/api/buildExtractPath.ts
var buildExtractPath = __webpack_require__(93470);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 3 modules
var v4 = __webpack_require__(51063);
;// CONCATENATED MODULE: ./app/api/communicats/route.ts





function sanitizeFilename(filename) {
    return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, "_");
}
async function POST(request, res) {
    const formData = await request.formData();
    const file = formData.get("myImage");
    if (!file) {
        return next_response/* default */.Z.json({
            error: "Plik jest wymagany"
        }, {
            status: 401
        });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const MAX_FILE_SIZE = 2 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
        return next_response/* default */.Z.json({
            message: "Przesłany plik jest za duży. Maksymalna wielkość to 2MB"
        }, {
            status: 402
        });
    }
    const pathDist = (0,external_path_.join)(process.cwd(), "/public/downloadFiles/Sezon23-24");
    const uploadDir = (0,external_path_.join)(pathDist);
    try {
        await (0,promises_namespaceObject.stat)(uploadDir);
    } catch (e) {
        if (e.code === "ENOENT") {
            await (0,promises_namespaceObject.mkdir)(uploadDir, {
                recursive: true
            });
        } else {
            next_response/* default */.Z.json({
                message: "Wystąpił błąd z utworzeniem folderu dla wybranego pliku"
            }, {
                status: 403
            });
            return next_response/* default */.Z.json({
                message: "Something went wrong."
            }, {
                status: 500
            });
        }
    }
    try {
        const fileExtension = (0,external_path_.extname)(file.name);
        const originalFilename = file.name.replace(/\.[^/.]+$/, "");
        const sanitizedFilename = sanitizeFilename(originalFilename);
        const filename = `${sanitizedFilename}_${fileExtension}`;
        await (0,promises_namespaceObject.writeFile)(`${uploadDir}/${filename}`, buffer);
        const finalFilePath = "/downloadFiles/Sezon23-24/" + `${filename}`;
        const month = formData.get("month");
        const komunikatyFilePath = (0,buildExtractPath/* buildPath */.L)("download.json");
        const komunikatyData = (0,buildExtractPath/* extractPath */.v)(komunikatyFilePath);
        const existingCategory = komunikatyData.find((item)=>item.month === month);
        if (existingCategory && existingCategory.details && existingCategory.details.some((item)=>item.fileName === filename)) {
            return next_response/* default */.Z.json({
                message: "Taki komunikat juz istnieje",
                filename
            }, {
                status: 409
            });
        } else if (existingCategory && existingCategory.details) {
            existingCategory.details.push({
                id: (0,v4/* default */.Z)(),
                fileName: filename,
                link: finalFilePath
            });
        } else {
            return komunikatyData;
        }
        await (0,promises_namespaceObject.writeFile)(komunikatyFilePath, JSON.stringify(komunikatyData, null, 2));
        return next_response/* default */.Z.json({
            message: "Dodano komunikat:",
            filename
        }, {
            status: 200
        });
    } catch (e) {
        console.error("Error while trying to upload a file", e);
        return next_response/* default */.Z.json({
            message: "Coś poszło nie tak"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcommunicats%2Froute&name=app%2Fapi%2Fcommunicats%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcommunicats%2Froute.ts&appDir=%2FUsers%2FKuba%2Floztstypescript%2Floztstypescript2%2Fapp&appPaths=%2Fapi%2Fcommunicats%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/communicats/route","pathname":"/api/communicats","filename":"route","bundlePath":"app/api/communicats/route"},"resolvedPagePath":"/Users/Kuba/loztstypescript/loztstypescript2/app/api/communicats/route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/communicats/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [212,632,335,63], () => (__webpack_exec__(38393)));
module.exports = __webpack_exports__;

})();