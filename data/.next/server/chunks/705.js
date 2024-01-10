exports.id = 705;
exports.ids = [705];
exports.modules = {

/***/ 60705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ galleryModal)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(98680);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./components/newGallery/galeryTurnamentModule.module.scss
var galeryTurnamentModule_module = __webpack_require__(15487);
var galeryTurnamentModule_module_default = /*#__PURE__*/__webpack_require__.n(galeryTurnamentModule_module);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./components/newGallery/Navigation/nav.module.scss
var nav_module = __webpack_require__(95013);
var nav_module_default = /*#__PURE__*/__webpack_require__.n(nav_module);
;// CONCATENATED MODULE: ./components/newGallery/Navigation/nav.tsx


const Navigation = ({ className, disabledPrev, disabledNext, onPrevClick, onNextClick })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(nav_module_default()).navigation} ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                disabled: disabledPrev,
                className: `${(nav_module_default()).navigationBtn}  ${(nav_module_default()).navigationBtnLeft}`,
                onClick: onPrevClick,
                children: "Previous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                disabled: disabledNext,
                className: `${(nav_module_default()).navigationBtn} ${(nav_module_default()).navigationBtnRight}`,
                onClick: onNextClick,
                children: "Next"
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/newGallery/PreviewGallery/prev.module.scss
var prev_module = __webpack_require__(86311);
var prev_module_default = /*#__PURE__*/__webpack_require__.n(prev_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/newGallery/PreviewGallery/prev.tsx




const PreviewGallery = ({ photos, indexActivePhoto, setNewPhoto, activePhotoId, setActivePhotoId })=>{
    const previewContainer = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        if (!photos.length || !previewContainer.current) {
            return;
        }
        const containerWidth = previewContainer.current.offsetWidth ?? 0;
        const activePhoto = previewContainer.current.querySelector(`.${(prev_module_default()).active}`);
        if (activePhoto) {
            const photoWidth = activePhoto.offsetWidth;
            const centerPhotoIndex = Math.floor(containerWidth / photoWidth);
            let scrollLeft = (indexActivePhoto - centerPhotoIndex) * photoWidth + containerWidth / 2 - photoWidth / 2 + photoWidth / 2.6;
            scrollLeft = Math.max(0, scrollLeft);
            scrollLeft = Math.min(previewContainer.current.scrollWidth - containerWidth, scrollLeft);
            previewContainer.current.style.scrollBehavior = "smooth";
            previewContainer.current.scrollLeft = scrollLeft;
        }
    }, [
        indexActivePhoto,
        photos
    ]);
    if (!photos.length) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (prev_module_default()).previewGallery,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (prev_module_default()).previewGalleryTrack,
            ref: previewContainer,
            children: photos.map((photo, id)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (prev_module_default()).previewGalleryPreview,
                        onClick: ()=>{
                            setNewPhoto(id);
                            setActivePhotoId(photo.id);
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: photo.src,
                                alt: `${id}`,
                                fill: true,
                                className: (prev_module_default()).previewGalleryImage,
                                onClick: ()=>{
                                    setNewPhoto(id);
                                    setActivePhotoId(photo.id);
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${(prev_module_default()).previewGalleryCover} ${activePhotoId === photo.id ? (prev_module_default()).active : ""}`,
                                children: [
                                    indexActivePhoto + 1,
                                    " / ",
                                    photos.length
                                ]
                            })
                        ]
                    })
                }, photo.id))
        })
    });
};

// EXTERNAL MODULE: ./components/newGallery/TransitionPhoto/transition.module.scss
var transition_module = __webpack_require__(87280);
var transition_module_default = /*#__PURE__*/__webpack_require__.n(transition_module);
;// CONCATENATED MODULE: ./components/newGallery/TransitionPhoto/transition.tsx




const getPhotoByRef = (ref, index)=>ref.current.querySelector(`img:nth-of-type(${index + 1})`);
const hidePhoto = (element)=>{
    if (!element) {
        return;
    }
    element.dataset.active = "false";
    if (element.previousSibling) {
        // @ts-ignore
        element.previousSibling.dataset.active = "false";
    }
    if (element.nextSibling) {
        // @ts-ignore
        element.nextSibling.dataset.active = "false";
    }
};
const showPhoto = (element)=>{
    if (!element) {
        return;
    }
    element.dataset.active = "true";
    // @ts-ignore
    element.src = element.dataset.src;
    if (element.previousSibling) {
        // @ts-ignore
        element.previousSibling.dataset.active = "prepared";
        // @ts-ignore
        element.previousSibling.src = element.previousSibling.dataset.src;
    }
    if (element.nextSibling) {
        // @ts-ignore
        element.nextSibling.dataset.active = "prepared";
        // @ts-ignore
        element.nextSibling.src = element.nextSibling.dataset.src;
    }
};
const TransitionPhoto = ({ className, photos, indexActivePhoto, handleCloseModal })=>{
    const [prevActiveIndexPhoto, setPrevActiveIndexPhoto] = (0,react_.useState)(indexActivePhoto);
    const containerRef = (0,react_.useRef)(null);
    (0,react_.useLayoutEffect)(()=>{
        if (!containerRef.current) {
            return;
        }
        const activePhoto = getPhotoByRef(containerRef, prevActiveIndexPhoto);
        const nextActivePhoto = getPhotoByRef(containerRef, indexActivePhoto);
        if (prevActiveIndexPhoto !== indexActivePhoto) {
            hidePhoto(activePhoto);
            showPhoto(nextActivePhoto);
        } else {
            showPhoto(activePhoto);
        }
        setPrevActiveIndexPhoto(indexActivePhoto);
    }, [
        indexActivePhoto
    ]);
    const handleContainerClick = (e)=>{
        // Sprawdź, czy kliknięcie nastąpiło na Image
        if (e.target.classList.contains((transition_module_default()).transitionPhotoImage)) {
            console.log("image");
        } else {
            console.log("parent");
        }
    };
    const handlediv = (e)=>{
        e.stopPropagation();
        handleCloseModal();
    };
    return (0,react_.useMemo)(()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(transition_module_default()).transitionPhoto} ${className}`,
                ref: containerRef,
                onClick: handleContainerClick,
                children: [
                    photos.map((photo, id)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: (transition_module_default()).transitionPhotoImage,
                                "data-active": id === indexActivePhoto,
                                "data-src": photo.src,
                                src: photo.src,
                                alt: `${id}`,
                                fill: true
                            }, photo.id)
                        })),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (transition_module_default()).galeryClose,
                        onClick: handlediv
                    })
                ]
            })
        }), []);
};

// EXTERNAL MODULE: ./components/newGallery/index.module.scss
var index_module = __webpack_require__(51821);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/newGallery/Gallery.tsx






const Gallery = ({ photos, slideNumber, handleCloseModal })=>{
    const [shouldScroll, setShouldScroll] = (0,react_.useState)(true);
    const [indexActivePhoto, setIndexActivePhoto] = (0,react_.useState)(slideNumber);
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];
    const [activePhotoId, setActivePhotoId] = (0,react_.useState)(indexActivePhoto + 1);
    if (!photos.length) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (index_module_default()).gallery,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (index_module_default()).galleryContainer,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TransitionPhoto, {
                            className: (index_module_default()).galleryTransitionPhoto,
                            photos: photos,
                            indexActivePhoto: indexActivePhoto,
                            handleCloseModal: handleCloseModal
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                            className: (index_module_default()).galleryNavigation,
                            disabledPrev: !prevPhoto,
                            disabledNext: !nextPhoto,
                            onPrevClick: ()=>{
                                setIndexActivePhoto(indexActivePhoto - 1);
                                setActivePhotoId(indexActivePhoto);
                                setShouldScroll(true);
                            },
                            onNextClick: ()=>{
                                setIndexActivePhoto(indexActivePhoto + 1);
                                setActivePhotoId(indexActivePhoto + 2);
                                setShouldScroll(true);
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(PreviewGallery, {
                    className: (index_module_default()).galleryPreviewList,
                    indexActivePhoto: indexActivePhoto,
                    photos: photos,
                    setNewPhoto: setIndexActivePhoto,
                    setActivePhotoId: setActivePhotoId,
                    activePhotoId: activePhotoId,
                    shouldScroll: shouldScroll,
                    setShouldScroll: setShouldScroll
                })
            ]
        })
    });
};
/* harmony default export */ const newGallery_Gallery = (Gallery);

;// CONCATENATED MODULE: ./components/newGallery/galleryModal.tsx




const Modal = ({ images, handleCloseModal, isOpen, slideNumber })=>{
    const customStyles = {
        overlay: {
            zIndex: 20
        },
        content: {
            zIndex: 21
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((lib_default()), {
            isOpen: isOpen,
            style: customStyles,
            onRequestClose: handleCloseModal,
            ariaHideApp: false,
            className: (galeryTurnamentModule_module_default()).modalWrapper,
            children: /*#__PURE__*/ jsx_runtime_.jsx(newGallery_Gallery, {
                photos: images?.link,
                slideNumber: slideNumber,
                handleCloseModal: handleCloseModal
            })
        })
    });
};
/* harmony default export */ const galleryModal = (Modal);


/***/ }),

/***/ 95013:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation": "nav_navigation__Erxk2",
	"navigationBtn": "nav_navigationBtn__fkSqP",
	"navigationBtnRight": "nav_navigationBtnRight__sOp_w"
};


/***/ }),

/***/ 86311:
/***/ ((module) => {

// Exports
module.exports = {
	"previewGallery": "prev_previewGallery__bqjzp",
	"previewGalleryTrack": "prev_previewGalleryTrack__71d40",
	"previewGalleryPreview": "prev_previewGalleryPreview__w8_GZ",
	"previewGalleryImage": "prev_previewGalleryImage__KQz3e",
	"previewGalleryCover": "prev_previewGalleryCover__nSBG3",
	"active": "prev_active__hm8nm",
	"previewGalleryCaption": "prev_previewGalleryCaption__on3z_"
};


/***/ }),

/***/ 87280:
/***/ ((module) => {

// Exports
module.exports = {
	"galeryClose": "transition_galeryClose__uB2vk",
	"transitionPhoto": "transition_transitionPhoto__1WIW7",
	"transitionPhotoImage": "transition_transitionPhotoImage__pMSH7"
};


/***/ }),

/***/ 15487:
/***/ ((module) => {

// Exports
module.exports = {
	"modalWrapper": "galeryTurnamentModule_modalWrapper__I5agY"
};


/***/ }),

/***/ 51821:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery": "newGallery_gallery__65UkY",
	"galleryContainer": "newGallery_galleryContainer__XRlxt",
	"galleryNavigation": "newGallery_galleryNavigation__dAkCi",
	"galleryPreviewList": "newGallery_galleryPreviewList__2TdKD"
};


/***/ })

};
;