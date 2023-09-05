exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 44202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ArchivesGalleryModal)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(98680);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./components/ArchivesGallery/archivesGalleryTurnament.module.scss
var archivesGalleryTurnament_module = __webpack_require__(57163);
var archivesGalleryTurnament_module_default = /*#__PURE__*/__webpack_require__.n(archivesGalleryTurnament_module);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(89367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./components/GalleryTest/Navigation/nav.module.scss
var nav_module = __webpack_require__(63231);
var nav_module_default = /*#__PURE__*/__webpack_require__.n(nav_module);
;// CONCATENATED MODULE: ./components/GalleryTest/Navigation/nav.tsx



const Navigation = ({ className, disabledPrev, disabledNext, onPrevClick, onNextClick })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: classnames_default()((nav_module_default()).navigation, className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                disabled: disabledPrev,
                className: classnames_default()((nav_module_default()).navigationBtn, (nav_module_default()).navigationBtnLeft),
                onClick: onPrevClick,
                children: "Previous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                disabled: disabledNext,
                className: classnames_default()((nav_module_default()).navigationBtn, (nav_module_default()).navigationBtnRight),
                onClick: onNextClick,
                children: "Next"
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/GalleryTest/PreviewGallery/prev.module.scss
var prev_module = __webpack_require__(76912);
var prev_module_default = /*#__PURE__*/__webpack_require__.n(prev_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/GalleryTest/PreviewGallery/prev.tsx




const PreviewGallery = ({ photos, indexActivePhoto, setNewPhoto, activePhotoId, setActivePhotoId, shouldScroll, setShouldScroll })=>{
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
            // Ogranicz wartość scrollLeft do zapobieżenia przewijaniu poza granice galerii
            scrollLeft = Math.max(0, scrollLeft);
            scrollLeft = Math.min(previewContainer.current.scrollWidth - containerWidth, scrollLeft);
            previewContainer.current.style.scrollBehavior = "smooth";
            previewContainer.current.scrollLeft = scrollLeft;
        // setTimeout(() => {
        //   previewContainer.current.style.scrollBehavior = "unset";
        // }, 500);
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

// EXTERNAL MODULE: ./components/GalleryTest/TransitionPhoto/transition.module.scss
var transition_module = __webpack_require__(98190);
var transition_module_default = /*#__PURE__*/__webpack_require__.n(transition_module);
;// CONCATENATED MODULE: ./components/GalleryTest/TransitionPhoto/transition.tsx





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
const TransitionPhoto = ({ className, photos, indexActivePhoto })=>{
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
    return (0,react_.useMemo)(()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: classnames_default()((transition_module_default()).transitionPhoto, className),
            ref: containerRef,
            children: photos.map((photo, id)=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: (transition_module_default()).transitionPhotoImage,
                    "data-active": id === indexActivePhoto,
                    "data-src": photo.src,
                    src: photo.src,
                    alt: `${id}`,
                    fill: true
                }, photo.id))
        }), []);
};

// EXTERNAL MODULE: ./components/GalleryTest/index.module.scss
var index_module = __webpack_require__(49435);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/GalleryTest/GalleryTest.tsx






const WolfGallery = ({ photos, slideNumber })=>{
    const [shouldScroll, setShouldScroll] = (0,react_.useState)(true);
    const [indexActivePhoto, setIndexActivePhoto] = (0,react_.useState)(slideNumber);
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];
    const [activePhotoId, setActivePhotoId] = (0,react_.useState)(indexActivePhoto + 1);
    if (!photos.length) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).wolfGallery,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).wolfGalleryContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TransitionPhoto, {
                        className: (index_module_default()).wolfGalleryTransitionPhoto,
                        photos: photos,
                        indexActivePhoto: indexActivePhoto
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                        className: (index_module_default()).wolfGalleryNavigation,
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
                className: (index_module_default()).wolfGalleryPreviewList,
                indexActivePhoto: indexActivePhoto,
                photos: photos,
                setNewPhoto: setIndexActivePhoto,
                setActivePhotoId: setActivePhotoId,
                activePhotoId: activePhotoId,
                shouldScroll: shouldScroll,
                setShouldScroll: setShouldScroll
            })
        ]
    });
};
/* harmony default export */ const GalleryTest = (WolfGallery);

;// CONCATENATED MODULE: ./components/ArchivesGallery/ArchivesGalleryModal.tsx


// import styles from "@/utils/hooks/useModal/galleryModal.module.scss";


const Modal = ({ images, handleCloseModal, isOpen, prevSlide, nextSlide, lastSlide, slideNumber })=>{
    // const photosArray = [];
    // for (let i = 1; i <= 50; i++) {
    //   photosArray.push({
    //     id: i,
    //     src: `/images/turnaments/Podium2023/${i}.jpeg`,
    //     preview: `/images/turnaments/Podium2023/${i}.jpeg`,
    //     description: `Norway ${i}`,
    //   });
    // }
    console.log(images?.link);
    console.log(images);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((lib_default()), {
            isOpen: isOpen,
            onRequestClose: handleCloseModal,
            ariaHideApp: false,
            className: (archivesGalleryTurnament_module_default()).modalWrapper,
            children: /*#__PURE__*/ jsx_runtime_.jsx(GalleryTest, {
                photos: images?.link,
                slideNumber: slideNumber
            })
        })
    });
};
/* harmony default export */ const ArchivesGalleryModal = (Modal);


/***/ }),

/***/ 57163:
/***/ ((module) => {

// Exports
module.exports = {
	"modalWrapper": "archivesGalleryTurnament_modalWrapper__YWLHL",
	"modalCloseButton": "archivesGalleryTurnament_modalCloseButton__oAiug",
	"turnamentTitle": "archivesGalleryTurnament_turnamentTitle__UJLpg",
	"wrapper": "archivesGalleryTurnament_wrapper__9PRjd",
	"galleryItem": "archivesGalleryTurnament_galleryItem__qefQB",
	"image": "archivesGalleryTurnament_image__C_7mW",
	"images": "archivesGalleryTurnament_images__Vx_zr",
	"imgScale": "archivesGalleryTurnament_imgScale__4GILE",
	"imageSection": "archivesGalleryTurnament_imageSection__najV0",
	"imageBox": "archivesGalleryTurnament_imageBox__Ma0tL",
	"galleryImgModal": "archivesGalleryTurnament_galleryImgModal__JiMzY",
	"next": "archivesGalleryTurnament_next__rCzm8",
	"prev": "archivesGalleryTurnament_prev__GOmwM",
	"wrapperModal": "archivesGalleryTurnament_wrapperModal__uJ2AJ",
	"galleryImg": "archivesGalleryTurnament_galleryImg__VXlP3"
};


/***/ }),

/***/ 63231:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation": "nav_navigation__TaVqb",
	"navigationBtn": "nav_navigationBtn__c4rHC",
	"navigationBtnRight": "nav_navigationBtnRight__5kKXS"
};


/***/ }),

/***/ 76912:
/***/ ((module) => {

// Exports
module.exports = {
	"previewGallery": "prev_previewGallery__pZm_c",
	"previewGalleryTrack": "prev_previewGalleryTrack__bmpgT",
	"previewGalleryPreview": "prev_previewGalleryPreview__Ve4pV",
	"previewGalleryImage": "prev_previewGalleryImage__bdAjW",
	"previewGalleryCover": "prev_previewGalleryCover__UJJTB",
	"active": "prev_active__K0paP",
	"previewGalleryCaption": "prev_previewGalleryCaption__X2zgU"
};


/***/ }),

/***/ 98190:
/***/ ((module) => {

// Exports
module.exports = {
	"transitionPhoto": "transition_transitionPhoto__xileL",
	"transitionPhotoImage": "transition_transitionPhotoImage__1ELBE"
};


/***/ }),

/***/ 49435:
/***/ ((module) => {

// Exports
module.exports = {
	"wolfGallery": "GalleryTest_wolfGallery__qJjnb",
	"wolfGalleryContainer": "GalleryTest_wolfGalleryContainer___VXfD",
	"wolfGalleryNavigation": "GalleryTest_wolfGalleryNavigation__gMIxt",
	"wolfGalleryPreviewList": "GalleryTest_wolfGalleryPreviewList___YlJ_"
};


/***/ })

};
;