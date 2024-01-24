exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 7640:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 91472:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34751));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27320));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57831));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49559));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 26600))

/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 27320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ StyledComponentsRegistry)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(89817);
;// CONCATENATED MODULE: ./theme.ts
const theme = {
    primary: "#048C34",
    primaryHover: "#048c3423",
    secondary: "#E4051D",
    tertiary: "#7BB2D9",
    hoverColor: "#D1CDCE",
    dark: "#100B00",
    light: "#FFFFEA",
    white: "#FFFFFF",
    heading: "5rem",
    headingSmall: "4.2rem",
    subHeadingDesktop: "3.8rem",
    headingMobile: "5.3rem",
    smallTitle: "3rem",
    smallTitleMobile: "2rem",
    desktopText: "2.5rem",
    paragraph: "1.6rem",
    mobileText: "1rem",
    caption: "1.35rem",
    tableTitleMobile: "1.8rem",
    tableTitleTablet: "2.4rem",
    tableTitleDesktop: "3rem",
    tableTitleBigDesktop: "3.6rem",
    tableHeadMobile: "0.8rem",
    tableHeadTablet: "1.2rem",
    tableHeadDesktop: "1.6rem",
    tableHeadBigDesktop: "2rem",
    tableItemsMobile: "0.8rem",
    tableItemsTablet: "1rem",
    tableItemsDesktop: "1.4rem",
    tableItemsBigDesktop: "1.8rem",
    modalButtonMobile: "1.4rem",
    modalButtonMobileTablet: "1.8rem",
    modalButtonMobileDesktop: "2.2rem",
    modalButtonMobileBigDesktop: "2.6rem",
    formFieldItemsMobile: "1.4rem",
    formFieldItemsTablet: "1.8rem",
    formFieldItemsDesktop: "2rem",
    formFieldItemsBigDesktop: "2.4rem",
    ButtonMobile: "0.8rem",
    ButtonMobileTablet: "1rem",
    ButtonMobileDesktop: "1.4rem",
    ButtonMobileBigDesktop: "1.8rem",
    TitleMobile: "2.6rem",
    TitleTablet: "3.2rem",
    TitleDesktop: "3.8rem",
    TitleBigDesktop: "4.4rem",
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
    bigDesktop: "@media (min-width: 1280px)",
    huge: "@media (min-width: 1440px)",
    monserrat: "Montserrat"
};

;// CONCATENATED MODULE: ./app/registry.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function StyledComponentsRegistry({ children }) {
    const [styledComponentsStyleSheet] = (0,react_.useState)(()=>new styled_components_cjs/* ServerStyleSheet */.qH());
    (0,navigation.useServerInsertedHTML)(()=>{
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: styles
        });
    });
    if (false) {}
    return /*#__PURE__*/ jsx_runtime_.jsx(styled_components_cjs/* ThemeProvider */.f6, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(styled_components_cjs/* StyleSheetManager */.LC, {
            sheet: styledComponentsStyleSheet.instance,
            children: children
        })
    });
}


/***/ }),

/***/ 26600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NavigationPhase)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./utils/context/AuthContext.tsx
var AuthContext = __webpack_require__(49559);
// EXTERNAL MODULE: ./utils/hooks/useModal/useModal.ts
var useModal = __webpack_require__(95329);
// EXTERNAL MODULE: ./utils/hooks/useScrollEffect/useScrollEffect.ts
var useScrollEffect = __webpack_require__(14329);
;// CONCATENATED MODULE: ./utils/hooks/navigation/navigation.tsx


function useNavigation({ pathName }) {
    const [openIndexes, setOpenIndexes] = (0,react_.useState)({});
    const [menuValue, setMenuValue] = (0,react_.useState)(false);
    const handleOpenSubmenu = (0,react_.useCallback)(({ levelIndex, itemIndex })=>{
        setOpenIndexes((prevOpenIndexes)=>({
                ...prevOpenIndexes,
                [levelIndex]: prevOpenIndexes[levelIndex] === itemIndex ? null : itemIndex
            }));
    }, [
        setOpenIndexes
    ]);
    const toggleMenuValue = (0,react_.useCallback)(()=>{
        setMenuValue((prevMenuValue)=>!prevMenuValue);
    }, [
        setMenuValue
    ]);
    const scrollValue = (0,useScrollEffect/* useScrollEffect */.H)();
    const scrollPath = (0,react_.useMemo)(()=>pathName === "/" ? 598 : 12, [
        pathName
    ]);
    const backgroundColor = (0,react_.useMemo)(()=>scrollValue < scrollPath ? "#f0f3f500" : "#ffffff", [
        scrollValue,
        scrollPath
    ]);
    const navPaddingTop = (0,react_.useMemo)(()=>scrollValue < scrollPath ? "50px" : "20px", [
        scrollValue,
        scrollPath
    ]);
    const spanColor = scrollValue < scrollPath ? "light" : "dark";
    return {
        scrollValue,
        handleOpenSubmenu,
        toggleMenuValue,
        scrollPath,
        backgroundColor,
        navPaddingTop,
        spanColor,
        openIndexes,
        menuValue,
        setMenuValue
    };
}
/* harmony default export */ const navigation = (useNavigation);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var next_navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 162 modules
var motion = __webpack_require__(42564);
;// CONCATENATED MODULE: ./data/navList.json
const navList_namespaceObject = JSON.parse('{"n":[{"left":[{"li":"Komunikaty","link":"/komunikaty"},{"li":"Informacje","link":"#","dropDown":[{"liLi":"Kontakt","link":"/kontakt"},{"liLi":"Nasze sukcesy","link":"/naszeSukcesy"},{"liLi":"Wojewódzkie związki","link":"/zwiazki"}]},{"li":"Kalendarz","link":"/kalendarz"}]},{"right":[{"li":"Liga","link":"#","dropDown":[{"liLi":"2 liga Kobiet","link":"/liga"},{"liLi":"2 Liga Mężczyzn","link":"/liga2M"},{"liLi":"3 Liga Mężczyzn","link":"/liga3M"},{"liLi":"4 Liga Mężczyzn","link":"/liga4M"}]},{"li":"Galeria","link":"/galeria"},{"li":"Archiwum","link":"/archiwum"}]}]}');
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./components/Auth/auth.module.scss
var auth_module = __webpack_require__(23916);
var auth_module_default = /*#__PURE__*/__webpack_require__.n(auth_module);
// EXTERNAL MODULE: ./ui/index.ts + 6 modules
var ui = __webpack_require__(74845);
;// CONCATENATED MODULE: ./components/Auth/SingIn.tsx






function SignInForm() {
    const [showPassword, setShowPassword] = (0,react_.useState)(false);
    const { signInUser } = (0,AuthContext.useUserContext)();
    const { register, handleSubmit, formState: { errors } } = (0,index_esm/* useForm */.cI)();
    const onSubmit = async (formData)=>{
        await signInUser(formData.email, formData.password);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Logowanie"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: (auth_module_default()).form,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui/* TextForm */.FY, {
                        validateText: "Pole jest wymagane",
                        label: "Email",
                        field: "email",
                        placeholder: "Wpisz adres email",
                        type: "text",
                        register: register,
                        errors: errors
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui/* TextForm */.FY, {
                        validateText: "Pole jest wymagane",
                        label: "Hasło",
                        field: "password",
                        placeholder: "Wpisz hasło",
                        type: showPassword ? "text" : "password",
                        register: register,
                        errors: errors
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (auth_module_default()).checkboxContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                id: "show-password",
                                checked: showPassword,
                                onChange: (e)=>setShowPassword(e.target.checked)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "show-password",
                                children: "Pokaż hasło"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui/* Button */.zx, {
                        sendButton: true,
                        type: "submit",
                        children: "Wyślij"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const SingIn = (SignInForm);

;// CONCATENATED MODULE: ./components/Auth/FotgotPassword.tsx






function FotgotPassword() {
    const { forgotPassword } = (0,AuthContext.useUserContext)();
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = (0,index_esm/* useForm */.cI)();
    const onSubmit = async (formData)=>{
        await forgotPassword(formData.email);
    };
    (0,react_.useEffect)(()=>{
        if (isSubmitSuccessful) {
            reset();
        }
    }, [
        isSubmitSuccessful,
        reset
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Nie pamiętasz hasła?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: (auth_module_default()).form,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ui/* TextForm */.FY, {
                        validateText: "Pole jest wymagane",
                        label: "Email",
                        field: "email",
                        placeholder: "Wpisz adres email",
                        type: "text",
                        register: register,
                        errors: errors
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ui/* Button */.zx, {
                        sendButton: true,
                        type: "submit",
                        children: "Wyślij"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Auth_FotgotPassword = (FotgotPassword);

;// CONCATENATED MODULE: ./components/Auth/AuthModal.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Auth = ({ handleClose, isOpen })=>{
    const [index, setIndex] = (0,react_.useState)(false);
    const toggleIndex = ()=>{
        setIndex((prevState)=>!prevState);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui/* Modal */.u_, {
        isOpen: isOpen,
        handleClose: handleClose,
        auth: true,
        children: [
            !index ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SingIn, {})
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Auth_FotgotPassword, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: toggleIndex,
                children: !index ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (auth_module_default()).logorForgetPass,
                    children: "Nie pamiętasz hasła?"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (auth_module_default()).logorForgetPass,
                    children: "Zaloguj się"
                })
            })
        ]
    });
};
/* harmony default export */ const AuthModal = (Auth);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(89817);
;// CONCATENATED MODULE: ./components/Navigation/navBar.styles.ts

const Wrapper = styled_components_cjs/* default */.ZP.nav.withConfig({
    componentId: "sc-db40aafb-0"
})`
  position: relative;
  z-index: 0 !important;
  padding-top: ${(props)=>props.paddingTop};
  background-color: ${(props)=>props.background};
  nav {
    padding-top: ${(props)=>props.paddingTop};
  }
`;

// EXTERNAL MODULE: ./components/Navigation/navigationPhase.module.scss
var navigationPhase_module = __webpack_require__(77329);
var navigationPhase_module_default = /*#__PURE__*/__webpack_require__.n(navigationPhase_module);
;// CONCATENATED MODULE: ./components/Navigation/centerLogo.tsx





const CenterLogo = ({ pathname, scrollValue, color })=>{
    const shouldDisplayLogo = pathname !== "/" || scrollValue >= 598;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "centerMenu",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flexCenter",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "has-dropdown",
                children: shouldDisplayLogo && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    className: "menu-link",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "logo",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Span */.Dr, {
                                color: color,
                                className: "logoName",
                                children: "L"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "divIMGlogo",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "logoNameImage",
                                        src: "/images/header/LOZTS1.png",
                                        alt: "Logo1",
                                        width: 40,
                                        height: 40,
                                        priority: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "logoNameImage2",
                                        src: "/images/header/LOZTS2.png",
                                        alt: "Logo2",
                                        width: 20,
                                        height: 20,
                                        priority: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Span */.Dr, {
                                color: color,
                                className: "logoName",
                                children: "Z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Span */.Dr, {
                                color: color,
                                className: "logoName",
                                children: "T"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ui/* Span */.Dr, {
                                color: color,
                                className: "logoName",
                                children: "S"
                            })
                        ]
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Navigation/dropDownMenu.tsx



const DropdownMenu = ({ mainMenu, isOpen, handleOpenSubmenu, color, onItemClick })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: mainMenu.link,
                className: "menu-link",
                "aria-label": mainMenu.link,
                onClick: handleOpenSubmenu,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* Span */.Dr, {
                    color: color,
                    children: mainMenu.li
                })
            }),
            mainMenu.dropDown && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: `submenu ${isOpen ? "open" : ""}`,
                onClick: onItemClick,
                children: mainMenu.dropDown.map((subItem, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: subItem.link,
                            className: "menu-link",
                            "aria-label": subItem.liLi,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* Span */.Dr, {
                                color: "dark",
                                children: subItem.liLi
                            })
                        })
                    }, index))
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Navigation/loginLogout.tsx



function LoginLogoutSpan({ loginLogout, menuValue, color, text }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "menu-link",
        onClick: loginLogout,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ui/* Span */.Dr, {
            color: color,
            click: menuValue,
            children: text
        })
    });
}

;// CONCATENATED MODULE: ./components/Navigation/index.ts




;// CONCATENATED MODULE: ./components/Navigation/navigationPhase.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













function NavigationPhase() {
    const pathName = (0,next_navigation.usePathname)();
    const { scrollValue, handleOpenSubmenu, toggleMenuValue, backgroundColor, navPaddingTop, spanColor, openIndexes, menuValue, setMenuValue } = navigation({
        pathName
    });
    const { user, logoutUser } = (0,AuthContext.useUserContext)();
    const { isOpen, handleOpenModal, handleCloseModal } = (0,useModal/* default */.Z)();
    const authFunction = ()=>{
        setMenuValue(false);
        handleOpenModal();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: pathName === "/" ? (navigationPhase_module_default()).mainHeader : (navigationPhase_module_default()).mainHeader2,
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "header",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.nav, {
                        style: {
                            backgroundColor,
                            color: pathName !== "/" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                        },
                        className: "navbar",
                        initial: {
                            opacity: 1
                        },
                        animate: {
                            backgroundColor,
                            paddingTop: navPaddingTop
                        },
                        exit: {
                            opacity: 0,
                            paddingTop: "20px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "input-hamburger",
                                className: `hamburger ${menuValue ? "close" : ""}`,
                                onClick: toggleMenuValue
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                id: "input-hamburger",
                                hidden: true,
                                checked: menuValue,
                                onChange: toggleMenuValue
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: "menu-link",
                                            "aria-label": "Back to main page",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "backToMainPage",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/images/header/logo.png",
                                                    width: 50,
                                                    height: 50,
                                                    alt: "Back to main page",
                                                    onClick: toggleMenuValue
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "leftMenu",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flexLeft",
                                            children: navList_namespaceObject.n.map((item, levelIndex)=>item.left?.map((mainMenu, itemIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: `has-dropdown ${openIndexes[levelIndex] === itemIndex ? "open" : ""}`,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenu, {
                                                            mainMenu: mainMenu,
                                                            isOpen: openIndexes[levelIndex] === itemIndex,
                                                            handleOpenSubmenu: ()=>handleOpenSubmenu({
                                                                    levelIndex,
                                                                    itemIndex
                                                                }),
                                                            color: spanColor,
                                                            onItemClick: toggleMenuValue
                                                        })
                                                    }, itemIndex)))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CenterLogo, {
                                        pathname: pathName,
                                        scrollValue: scrollValue,
                                        color: spanColor
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "rightMenu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flexRight",
                                            children: [
                                                navList_namespaceObject.n.map((item, levelIndex)=>item.right?.map((mainMenu, itemIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: `has-dropdown ${openIndexes[levelIndex] === itemIndex ? "open" : ""}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(DropdownMenu, {
                                                                mainMenu: mainMenu,
                                                                isOpen: openIndexes[levelIndex] === itemIndex,
                                                                handleOpenSubmenu: ()=>handleOpenSubmenu({
                                                                        levelIndex,
                                                                        itemIndex
                                                                    }),
                                                                color: spanColor,
                                                                onItemClick: toggleMenuValue
                                                            })
                                                        }, itemIndex))),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "has-dropdown",
                                                    children: user?.email ? /*#__PURE__*/ jsx_runtime_.jsx(LoginLogoutSpan, {
                                                        loginLogout: logoutUser,
                                                        menuValue: toggleMenuValue,
                                                        color: spanColor,
                                                        text: "Wyloguj"
                                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(LoginLogoutSpan, {
                                                                loginLogout: handleOpenModal,
                                                                menuValue: authFunction,
                                                                color: spanColor,
                                                                text: "Logowanie"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(AuthModal, {
                                                                isOpen: isOpen,
                                                                handleClose: handleCloseModal
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 97568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7879);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ deleteButton, sendButton, modalButton, closeModalButton, type, ...props })=>{
    let className = "";
    if (deleteButton) {
        className = (_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().deleteButton);
    } else if (sendButton) {
        className = (_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().sendButton);
    } else if (modalButton) {
        className = (_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().modalButton);
    } else if (closeModalButton) {
        className = (_button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().closeModalButton);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props,
        type: type
    });
};



/***/ }),

/***/ 83292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ ModaWithButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97568);
/* harmony import */ var _utils_hooks_useModal_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95329);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98680);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modalButton_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12626);
/* harmony import */ var _modalButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modalButton_module_scss__WEBPACK_IMPORTED_MODULE_5__);






function ModaWithButton({ children, text }) {
    const { handleOpenModal, isOpen, handleCloseModal } = (0,_utils_hooks_useModal_useModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_modalButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default().centerModalButton),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                    modalButton: true,
                    onClick: handleOpenModal,
                    type: "button",
                    children: text
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                isOpen: isOpen,
                onRequestClose: handleCloseModal,
                ariaHideApp: false,
                className: (_modalButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                        type: "button",
                        onClick: handleCloseModal,
                        closeModalButton: true,
                        children: "X"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_modalButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default().modalSectionWrapper),
                        children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
                            handleCloseModal
                        })
                    })
                ]
            })
        ]
    });
}



/***/ }),

/***/ 74845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zx: () => (/* reexport */ Button_button/* Button */.z),
  aQ: () => (/* reexport */ ImageForm),
  VG: () => (/* reexport */ modalWithButton/* ModaWithButton */.V),
  u_: () => (/* reexport */ Modal),
  p7: () => (/* reexport */ SelectForm),
  Dr: () => (/* reexport */ Span),
  FY: () => (/* reexport */ TextForm)
});

// EXTERNAL MODULE: ./ui/Button/button.tsx
var Button_button = __webpack_require__(97568);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/upload.png
/* harmony default export */ const upload = ({"src":"/_next/static/media/upload.a966f900.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAAC3RSTlMBfDibGWNNDGAkSAxLsskAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAA0SURBVHicRcq5EQAgEMNA2ffw9F8wAwlKNhH8LPkZY4ShlVWpjXCEETLdWKRqzlLefS3gABE1AJcpnb62AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./ui/Forms/imageForm.module.scss
var imageForm_module = __webpack_require__(47386);
var imageForm_module_default = /*#__PURE__*/__webpack_require__.n(imageForm_module);
// EXTERNAL MODULE: ./utils/hooks/getAnimationClass/getAnimationStyles.module.scss
var getAnimationStyles_module = __webpack_require__(23169);
var getAnimationStyles_module_default = /*#__PURE__*/__webpack_require__.n(getAnimationStyles_module);
;// CONCATENATED MODULE: ./ui/Forms/imageForm.tsx






const ImageForm = ({ validateText, field, register, errors, watch, file, text })=>{
    const imgValue = watch(field);
    const [previewImage, setPreviewImage] = (0,react_.useState)(null);
    (0,react_.useEffect)(()=>{
        const loadPreviewImage = async ()=>{
            if (imgValue && imgValue.length !== 0) {
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    setPreviewImage(reader.result);
                };
                reader.readAsDataURL(imgValue[0]);
            } else {
                setPreviewImage(null);
            }
        };
        loadPreviewImage();
    }, [
        imgValue
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (imageForm_module_default()).grid,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(imageForm_module_default()).formSection} ${(getAnimationStyles_module_default()).slideOut}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: (imageForm_module_default()).formfieldFile,
                        htmlFor: field,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 30,
                                height: 30,
                                src: upload,
                                alt: "uploadIcon",
                                className: (imageForm_module_default()).uploadIcon
                            }),
                            imgValue && imgValue.length !== 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (imageForm_module_default()).inputText,
                                children: imgValue[0].name
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (imageForm_module_default()).inputText,
                                    children: text
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "file",
                                className: `${(imageForm_module_default()).inputForm} ${(imageForm_module_default()).displayNonInput}`,
                                id: field,
                                ...register(field, {
                                    required: validateText || "Wpisz wartość",
                                    validate: {
                                        size: (value)=>{
                                            if (value && value[0] && value[0].size > 1 * 1024 * 1024) {
                                                return "Plik nie może przekraczać 1MB";
                                            }
                                            return true;
                                        }
                                    }
                                })
                            })
                        ]
                    }),
                    errors?.[field] && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (imageForm_module_default()).error,
                        role: "alert",
                        children: errors?.[field]?.message
                    })
                ]
            }),
            file ? null : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (imageForm_module_default()).containerWrapper,
                children: previewImage ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (imageForm_module_default()).previewImageContainer,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        fill: true,
                        src: previewImage,
                        alt: "preview",
                        className: (imageForm_module_default()).previewImage
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(imageForm_module_default()).inputText} ${(getAnimationStyles_module_default()).slideIn}`,
                    children: imgValue && imgValue.length !== 0 ? imgValue[0].name : "Tutaj wyświetli się podgląd"
                })
            })
        ]
    });
};


// EXTERNAL MODULE: ./ui/Forms/forms.module.scss
var forms_module = __webpack_require__(62482);
var forms_module_default = /*#__PURE__*/__webpack_require__.n(forms_module);
;// CONCATENATED MODULE: ./ui/Forms/textForms.tsx




const TextForm = ({ placeholder, validateText, label, field, register, errors, isTextArea, type })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(forms_module_default()).formSection} ${(getAnimationStyles_module_default()).slideOut}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: (forms_module_default()).label,
                htmlFor: field,
                children: label
            }),
            isTextArea ? /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                type: "text",
                placeholder: placeholder,
                className: (forms_module_default()).textareaForm,
                id: field,
                ...register(field, {
                    required: validateText || "Wpisz wartość",
                    validate: (fieldValue)=>fieldValue.trim() !== "" || "Niepoprawna wartość"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: type,
                placeholder: placeholder,
                className: (forms_module_default()).inputForm,
                id: field,
                ...register(field, {
                    required: validateText || "Wpisz wartość",
                    ...field === "email" && {
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-0-]+)*$/,
                            message: "Niepoprawny email"
                        }
                    },
                    validate: (fieldValue)=>fieldValue.trim() !== "" || "Niepoprawna wartość"
                })
            }),
            errors?.[field] && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (forms_module_default()).error,
                role: "alert",
                children: errors?.[field]?.message
            })
        ]
    });
};


;// CONCATENATED MODULE: ./ui/Forms/selectForm.tsx




const SelectForm = ({ validateText, label, field, itemMap, register, errors, defaultValue, data })=>{
    const containerClassName = `${(forms_module_default()).formSection} ${(getAnimationStyles_module_default()).slideOut}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: containerClassName,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                className: (forms_module_default()).label,
                htmlFor: field.toString(),
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                className: (forms_module_default()).selectCategory,
                defaultValue: defaultValue,
                id: field.toString(),
                ...register(field.toString(), {
                    required: validateText || "Wpisz wartość",
                    validate: (fieldValue)=>{
                        if (fieldValue === "" || fieldValue === defaultValue) {
                            return validateText;
                        }
                        return true;
                    }
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: defaultValue,
                        children: defaultValue
                    }),
                    data && data?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: item[itemMap],
                            children: item[itemMap]
                        }, index))
                ]
            }),
            errors?.[field] && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (forms_module_default()).error,
                role: "alert",
                children: errors?.[field]?.message
            })
        ]
    });
};


// EXTERNAL MODULE: ./ui/ModalButton/modalWithButton.tsx
var modalWithButton = __webpack_require__(83292);
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(98680);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./ui/ModalButton/modalButton.module.scss
var modalButton_module = __webpack_require__(12626);
var modalButton_module_default = /*#__PURE__*/__webpack_require__.n(modalButton_module);
;// CONCATENATED MODULE: ./ui/ModalButton/modal.tsx





function Modal({ children, isOpen, handleClose, auth }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((lib_default()), {
            isOpen: isOpen,
            onRequestClose: handleClose,
            ariaHideApp: false,
            className: auth ? (modalButton_module_default()).modalAuthWrapper : (modalButton_module_default()).modalWrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Button_button/* Button */.z, {
                    type: "button",
                    onClick: handleClose,
                    closeModalButton: true,
                    children: "X"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (modalButton_module_default()).modalSectionWrapper,
                    children: children
                })
            ]
        })
    });
}


// EXTERNAL MODULE: ./ui/UnderLineSpan/underLineSpan.module.scss
var underLineSpan_module = __webpack_require__(55647);
var underLineSpan_module_default = /*#__PURE__*/__webpack_require__.n(underLineSpan_module);
;// CONCATENATED MODULE: ./ui/UnderLineSpan/underLineSpan.tsx



function Span({ children, color, click, className }) {
    let colorClass = "";
    if (color === "light") {
        colorClass = (underLineSpan_module_default()).light;
    } else if (color === "dark") {
        colorClass = (underLineSpan_module_default()).dark;
    }
    const spanClasses = `${(underLineSpan_module_default()).span} ${colorClass} ${className || ""}`;
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: spanClasses,
        onClick: click,
        children: children
    });
}


;// CONCATENATED MODULE: ./ui/index.ts









/***/ }),

/***/ 49559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserContext: () => (/* binding */ UserContext),
/* harmony export */   UserContextProvider: () => (/* binding */ UserContextProvider),
/* harmony export */   useUserContext: () => (/* binding */ useUserContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34751);
/* harmony import */ var _utils_hooks_useModal_useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95329);
/* harmony import */ var _toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32725);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34595);
/* harmony import */ var _utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72487);
/* __next_internal_client_entry_do_not_use__ UserContext,useUserContext,UserContextProvider auto */ 






const UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const useUserContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserContextProvider");
    }
    return context;
};
const UserContextProvider = ({ children })=>{
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { handleCloseModal } = (0,_utils_hooks_useModal_useModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const admin = user?.email === "lozts1937@gmail.com";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .onAuthStateChanged */ .Aj)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8, (res)=>{
            if (res) {
                setUser(res);
            } else {
                setUser(null);
            }
            setError("");
        });
        return unsubscribe;
    }, []);
    const registerUser = (email, password)=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .createUserWithEmailAndPassword */ .Xb)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8, email, password).then(()=>{
            const currentUser = _utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8.currentUser;
            if (currentUser) {
                return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .updateProfile */ .ck)(currentUser, {});
            }
            return null;
        }).then((res)=>console.log(res)).catch((err)=>setError(err.message));
    };
    const signInUser = async (email, password)=>{
        try {
            const signInMethods = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .fetchSignInMethodsForEmail */ .Nr)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8, email);
            if (signInMethods.length === 0) {
                console.log(signInMethods);
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Konto z takim adresem email nie zostało zarejestrowane", _toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_4__/* .toastConfig */ .D);
                return;
            }
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .signInWithEmailAndPassword */ .e5)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8, email, password);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(`Zalogowano pomyślnie ${email}!`, _toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_4__/* .toastConfig */ .D);
            console.log(email);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Błędne hasło!", _toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_4__/* .toastConfig */ .D);
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`${error.code}`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            }
        } finally{}
    };
    const logoutUser = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .signOut */ .w7)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8).then(()=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(`Wylogowano pomyślnie!`, _toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_4__/* .toastConfig */ .D)).then(handleCloseModal).catch(()=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Ups.. Coś poszło nie tak. Spróbuj jeszcze raz.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            }));
    };
    const forgotPassword = async (email)=>{
        try {
            const signInMethods = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .fetchSignInMethodsForEmail */ .Nr)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8, email);
            if (signInMethods.length === 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Konto z takim adresem email nie zostało zarejestrowane", _toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_4__/* .toastConfig */ .D);
                return;
            }
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__/* .sendPasswordResetEmail */ .LS)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_6__/* .auth */ .I8, email);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Link do resetowania hasła został wysłany na Tw\xf3j adres email", _toastOptions_toastOption__WEBPACK_IMPORTED_MODULE_4__/* .toastConfig */ .D);
        } catch (error) {
            console.error("Wystąpił błąd podczas resetowania hasła:", error);
        }
    };
    const contextValue = {
        admin,
        user,
        error,
        signInUser,
        registerUser,
        logoutUser,
        forgotPassword
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
        value: contextValue,
        children: children
    });
};


/***/ }),

/***/ 72487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I8: () => (/* binding */ auth),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   db: () => (/* binding */ db),
/* harmony export */   tO: () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72856);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61522);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31640);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34595);
// Import the functions you need from the SDKs you need




const firebaseConfig = {
    apiKey: "AIzaSyBWh-CnTSM3DbbQxUcx0lPqGLAHyyfPv_U",
    authDomain: "lozts-official-e6d38.firebaseapp.com",
    projectId: "lozts-official-e6d38",
    storageBucket: "lozts-official-e6d38.appspot.com",
    messagingSenderId: "1010072225522",
    appId: "1:1010072225522:web:258e1d8308f7f96288f26b",
    measurementId: "G-CXKGC9SK5Y"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)());
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__/* .getFirestore */ .ad)((0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(firebaseConfig));
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__/* .getAuth */ .v0)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__/* .getStorage */ .cF)(app);


/***/ }),

/***/ 95329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
const useModal = (initialstate = false)=>{
    const [isOpen, setModalState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialstate);
    const handleOpenModal = ()=>setModalState(true);
    const handleCloseModal = ()=>setModalState(false);
    return {
        isOpen,
        handleOpenModal,
        handleCloseModal
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useModal);


/***/ }),

/***/ 14329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ useScrollEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useScrollEffect = ()=>{
    const [scrollValue, setScrollValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const onScroll = ()=>setScrollValue(window.scrollY);
        const options = {
            passive: true
        };
        window.addEventListener("scroll", onScroll, options);
        return ()=>{
            window.removeEventListener("scroll", onScroll, options);
        };
    }, []);
    return scrollValue;
};


/***/ }),

/***/ 32725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ toastConfig)
/* harmony export */ });
const toastConfig = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
};



/***/ }),

/***/ 12735:
/***/ ((module) => {

// Exports
module.exports = {
	"loadingContainer": "loading_loadingContainer__2IlfA",
	"bouncingBall": "loading_bouncingBall__7AguN",
	"bounce": "loading_bounce__j3kEK"
};


/***/ }),

/***/ 23916:
/***/ ((module) => {

// Exports
module.exports = {
	"logorForgetPass": "auth_logorForgetPass___SSEN",
	"checkboxContainer": "auth_checkboxContainer__nVqvZ"
};


/***/ }),

/***/ 61969:
/***/ ((module) => {

// Exports
module.exports = {
	"footerWrapper": "footer_footerWrapper__xo_QB",
	"footerDetails": "footer_footerDetails__QP7E0",
	"image": "footer_image__kWHff"
};


/***/ }),

/***/ 77329:
/***/ ((module) => {

// Exports
module.exports = {
	"mainHeader": "navigationPhase_mainHeader__ZqiF6",
	"mainHeader2": "navigationPhase_mainHeader2__SX_YM"
};


/***/ }),

/***/ 7879:
/***/ ((module) => {

// Exports
module.exports = {
	"modalButton": "button_modalButton__RmN_P",
	"closeModalButton": "button_closeModalButton__fYd6u",
	"deleteButton": "button_deleteButton__sARc6",
	"sendButton": "button_sendButton__dQiOq"
};


/***/ }),

/***/ 62482:
/***/ ((module) => {

// Exports
module.exports = {
	"formSection": "forms_formSection__2EkPx",
	"label": "forms_label__gBljq",
	"inputForm": "forms_inputForm___nDYB",
	"textareaForm": "forms_textareaForm__VKSMU",
	"error": "forms_error__RdyvY",
	"selectCategory": "forms_selectCategory__qs2Pj"
};


/***/ }),

/***/ 47386:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "imageForm_grid__4zfTg",
	"previewImageContainer": "imageForm_previewImageContainer__ZF2oI",
	"containerWrapper": "imageForm_containerWrapper__NOeJF",
	"previewImage": "imageForm_previewImage__TtXBc",
	"formSection": "imageForm_formSection__NbSoJ",
	"inputForm": "imageForm_inputForm__y0t5N",
	"formfieldFile": "imageForm_formfieldFile__uD9hX",
	"inputText": "imageForm_inputText__em7RG",
	"uploadIcon": "imageForm_uploadIcon__nOB5H",
	"displayNonInput": "imageForm_displayNonInput__EtE_j",
	"error": "imageForm_error__o_ji2"
};


/***/ }),

/***/ 12626:
/***/ ((module) => {

// Exports
module.exports = {
	"modalWrapper": "modalButton_modalWrapper__Ki3yl",
	"modalAuthWrapper": "modalButton_modalAuthWrapper__5DtS_",
	"modalSectionWrapper": "modalButton_modalSectionWrapper__Z0aFL",
	"centerModalButton": "modalButton_centerModalButton__fxL6V",
	"modalCloseButton": "modalButton_modalCloseButton__38XMC",
	"modalButton": "modalButton_modalButton__b8ld3"
};


/***/ }),

/***/ 55647:
/***/ ((module) => {

// Exports
module.exports = {
	"span": "underLineSpan_span__PVDie",
	"dark": "underLineSpan_dark__XP7sH",
	"light": "underLineSpan_light__Zl8A6"
};


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


/***/ }),

/***/ 98881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Montserrat","arguments":[{"subsets":["latin"],"display":"swap"}],"variableName":"montserrat"}
var layout_tsx_import_Montserrat_arguments_subsets_latin_display_swap_variableName_montserrat_ = __webpack_require__(10160);
var layout_tsx_import_Montserrat_arguments_subsets_latin_display_swap_variableName_montserrat_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Montserrat_arguments_subsets_latin_display_swap_variableName_montserrat_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(67272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/registry.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/Kuba/loztstypescript/loztstypescript2/app/registry.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const registry = (__default__);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(91569);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(97001);
;// CONCATENATED MODULE: ./utils/context/AuthContext.tsx

const AuthContext_proxy = (0,module_proxy.createProxy)(String.raw`/Users/Kuba/loztstypescript/loztstypescript2/utils/context/AuthContext.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthContext_esModule, $$typeof: AuthContext_$$typeof } = AuthContext_proxy;
const AuthContext_default_ = AuthContext_proxy.default;

const e0 = AuthContext_proxy["UserContext"];

const e1 = AuthContext_proxy["useUserContext"];

const e2 = AuthContext_proxy["UserContextProvider"];

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./app/loading.tsx
var loading = __webpack_require__(96330);
// EXTERNAL MODULE: ./components/Footer/footer.module.scss
var footer_module = __webpack_require__(61969);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Footer/BanerAndro.jpeg
/* harmony default export */ const BanerAndro = ({"src":"/_next/static/media/BanerAndro.16d1ee47.jpeg","height":75,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAABAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAEAAQUAAAAAAAAAAAAAAAAAAQIGNHLB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIxMv/aAAwDAQACEQMRAD8Ar7hzqNp4AphQPKP/2Q==","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./components/Footer/footer.tsx





function footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (footer_module_default()).footerWrapper,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (footer_module_default()).footerDetails,
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: BanerAndro,
                className: (footer_module_default()).image,
                alt: "Baner Andro",
                fill: true,
                sizes: "(max-width: 50px) 1vw, (max-width: 425px) 2vw, 75vw"
            })
        })
    });
}
/* harmony default export */ const Footer_footer = (footer);

;// CONCATENATED MODULE: ./components/Navigation/navigationPhase.tsx

const navigationPhase_proxy = (0,module_proxy.createProxy)(String.raw`/Users/Kuba/loztstypescript/loztstypescript2/components/Navigation/navigationPhase.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: navigationPhase_esModule, $$typeof: navigationPhase_$$typeof } = navigationPhase_proxy;
const navigationPhase_default_ = navigationPhase_proxy.default;


/* harmony default export */ const navigationPhase = (navigationPhase_default_);
;// CONCATENATED MODULE: ./app/layout.tsx











const metadata = {
    title: "Lozts",
    description: "Lubelski Okręgowy Związek Tenisa Stołowego",
    icons: "/images/header/logo.png",
    category: "sport",
    keywords: [
        "lozts",
        "tenis",
        "tenis-stołowy",
        "sport"
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "pl",
        children: /*#__PURE__*/ jsx_runtime_.jsx(registry, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (layout_tsx_import_Montserrat_arguments_subsets_latin_display_swap_variableName_montserrat_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(e2, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_shared_subset.Suspense, {
                            fallback: /*#__PURE__*/ jsx_runtime_.jsx(loading["default"], {}),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(navigationPhase, {}),
                                children,
                                /*#__PURE__*/ jsx_runtime_.jsx(Footer_footer, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_toastify_esm/* ToastContainer */.Ix, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 96330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12735);
/* harmony import */ var _loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().loadingContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().bouncingBall)
        })
    });
}


/***/ }),

/***/ 57831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/BanerAndro.16d1ee47.jpeg","height":75,"width":500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAABAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAEAAQUAAAAAAAAAAAAAAAAAAQIGNHLB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIxMv/aAAwDAQACEQMRAD8Ar7hzqNp4AphQPKP/2Q==","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;