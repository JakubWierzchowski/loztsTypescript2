"use strict";
exports.id = 377;
exports.ids = [377];
exports.modules = {

/***/ 57241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34751);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61522);
/* harmony import */ var _utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72487);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31640);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64731);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49559);
/* harmony import */ var _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32725);







const useHTTPrequestsFirebase = (options)=>{
    const { user } = (0,_utils_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useUserContext)();
    const { collectionPath, additionalFields = {} } = options;
    const onSubmitFirebase = async (data, successMessage)=>{
        if (data.img && data.img[0]) {
            const imageFile = data.img[0];
            const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__/* .ref */ .iH)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* .storage */ .tO, `${imageFile.name}`);
            const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__/* .uploadBytesResumable */ .B0)(storageRef, imageFile);
            uploadTask.on("state_changed", ()=>{}, (error)=>{
                console.error("Błąd podczas przesyłania pliku:", error);
            }, async ()=>{
                const downloadURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__/* .getDownloadURL */ .Jt)(uploadTask.snapshot.ref);
                try {
                    const documentData = {
                        ...data,
                        img: downloadURL,
                        timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .serverTimestamp */ .Bt)(),
                        time: moment__WEBPACK_IMPORTED_MODULE_4___default()().format("YYYY-DD-MM HH:mm:ss"),
                        user: user.email,
                        ...additionalFields
                    };
                    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .addDoc */ .ET)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .collection */ .hJ)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, collectionPath), documentData);
                    react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(successMessage, _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_6__/* .toastConfig */ .D);
                } catch (e) {
                    if (e.message === "Error: 409") {
                        console.log("blad");
                        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(`Ups, coś poszło nie tak`, _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_6__/* .toastConfig */ .D);
                    }
                }
            });
        }
    };
    const deleteQueueFirebase = async (id, successMessage)=>{
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .doc */ .JU)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, `${collectionPath}`, id);
        try {
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .deleteDoc */ .oe)(docRef);
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.success(successMessage, _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_6__/* .toastConfig */ .D);
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error(`Błąd przy usuwaniu dokumentu: ${error}`, _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_6__/* .toastConfig */ .D);
        }
    };
    return {
        onSubmitFirebase,
        deleteQueueFirebase
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHTTPrequestsFirebase);


/***/ }),

/***/ 63558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34751);
/* harmony import */ var _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32725);



const useHTTPrequest = (options)=>{
    const { apiUrl, defaultFields = [] } = options;
    const [deleteError, setDeleteError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    async function deleteRequest(id, titleField) {
        try {
            setDeleteError(null);
            const response = await fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const Apidata = await response.json();
            const title = Apidata.deleteItem.map((item)=>item[titleField]);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${Apidata.message} - ${title}`, _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_2__/* .toastConfig */ .D);
        } catch (error) {
            setDeleteError(`Wystąpił błąd podczas usuwania: - ${error}`);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`Wystąpił błąd podczas usuwania: - ${error}`, _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_2__/* .toastConfig */ .D);
        }
    }
    async function onSubmit(data, titleField) {
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const Apidata = await response.json();
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${Apidata.message} - ${Apidata.newPushDate[titleField]}`, _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_2__/* .toastConfig */ .D);
        } catch (e) {
            console.log(e);
            if (e.message === "Error: 409") {
                react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(`Taki tytuł już istnieje`, _utils_toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_2__/* .toastConfig */ .D);
            }
        }
    }
    return {
        deleteRequest,
        deleteError,
        onSubmit
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHTTPrequest);


/***/ })

};
;