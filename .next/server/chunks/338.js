exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 7640:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 72491:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 34751));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 27320));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 60477));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49559))

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

/***/ 60477:
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
// EXTERNAL MODULE: ./components/Navigation/navigationPhase.module.scss
var navigationPhase_module = __webpack_require__(77329);
var navigationPhase_module_default = /*#__PURE__*/__webpack_require__.n(navigationPhase_module);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 162 modules
var motion = __webpack_require__(42564);
;// CONCATENATED MODULE: ./utils/hooks/useScrollEffect/useScrollEffect.ts

const useScrollEffect = ()=>{
    const [scrollValue, setScrollValue] = (0,react_.useState)(0);
    (0,react_.useEffect)(()=>{
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

;// CONCATENATED MODULE: ./data/navList.json
const navList_namespaceObject = JSON.parse('{"n":[{"left":[{"li":"Komunikaty","link":"/komunikaty"},{"li":"Informacje","link":"#","dropDown":[{"liLi":"Kontakt","link":"/kontakt"},{"liLi":"Nasze sukcesy","link":"/naszeSukcesy"},{"liLi":"Wojewódzkie związki","link":"/zwiazki"}]},{"li":"Kalendarz","link":"/kalendarz"}]},{"right":[{"li":"Liga","link":"#","dropDown":[{"liLi":"2 liga Kobiet","link":"/liga"},{"liLi":"2 Liga Mężczyzn","link":"/liga2M"},{"liLi":"3 Liga Mężczyzn","link":"/liga3M"},{"liLi":"4 Liga Mężczyzn","link":"/liga4M"}]},{"li":"Galeria","link":"/galeria"},{"li":"Archiwum","link":"/archiwum","dropDown":[{"liLi":"Strona archiwalna","link":"#"}]}]}]}');
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(89817);
;// CONCATENATED MODULE: ./components/Navigation/navBar.styles.ts

const Wrapper = styled_components_cjs/* default */.ZP.nav.withConfig({
    componentId: "sc-26614dd2-0"
})`
  padding-top: ${(props)=>props.paddingTop};
  background-color: ${(props)=>props.background};
  nav {
    padding-top: ${(props)=>props.paddingTop};
  }
`;
const Span = styled_components_cjs/* default */.ZP.span.withConfig({
    componentId: "sc-26614dd2-1"
})`
  display: block;
  cursor: pointer !important;
  position: relative;
  padding: 0.2em 0;
  color: #fff
  font-size: 1.5rem;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: ${({ color })=>color === "true" ? "#FFFFEA" : "#100B00"};
    color:rgb(0, 135, 253);
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s linear;
  }
  &:hover:after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

@media (min-width: 768px) {
    font-size: 1.3rem;
    color: ${({ color })=>color === "true" ? "#FFFFEA" : "#100B00"};
  }
@media (min-width: 1024px) {
    font-size: 1.7rem;
  }
@media (min-width: 1280px) {
    font-size: 2rem;
  }
`;

// EXTERNAL MODULE: ./utils/hooks/useModal/useModal.ts
var useModal = __webpack_require__(95329);
// EXTERNAL MODULE: ./utils/context/AuthContext.tsx
var AuthContext = __webpack_require__(49559);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(66558);
// EXTERNAL MODULE: ./components/Auth/auth.module.scss
var auth_module = __webpack_require__(23916);
var auth_module_default = /*#__PURE__*/__webpack_require__.n(auth_module);
;// CONCATENATED MODULE: ./components/Auth/SingIn.tsx




function SignInForm() {
    const { signInUser, error, user } = (0,AuthContext.useUserContext)();
    const { register, handleSubmit, formState: { errors } } = (0,index_esm/* useForm */.cI)();
    const onSubmit = async (formData)=>{
        await signInUser(formData.email, formData.password);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Logowanie"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: (auth_module_default()).form,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (auth_module_default()).formSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (auth_module_default()).label,
                                htmlFor: "email",
                                children: "Użytkownik"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                className: (auth_module_default()).inputForm,
                                placeholder: "Wpisz email",
                                id: "email",
                                ...register("email", {
                                    required: "Pole wymagane",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-0-]+)*$/,
                                        message: "Niepoprawny email"
                                    }
                                })
                            }),
                            errors.email ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (auth_module_default()).error,
                                children: errors.email?.message
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (auth_module_default()).formSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (auth_module_default()).label,
                                htmlFor: "password",
                                children: "Hasło"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "password",
                                placeholder: "Wpisz hasło",
                                className: (auth_module_default()).inputForm,
                                id: "password",
                                ...register("password", {
                                    required: "Pole wymagane"
                                })
                            }),
                            errors.password ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (auth_module_default()).error,
                                children: errors.password?.message
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: (auth_module_default()).sendButton,
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
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Nie pamiętasz hasła?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: (auth_module_default()).form,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (auth_module_default()).formSection,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: (auth_module_default()).label,
                                htmlFor: "email",
                                children: "Użytkownik"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                placeholder: "Wpisz adres email",
                                className: (auth_module_default()).inputForm,
                                id: "email",
                                ...register("email", {
                                    required: "Pole wymagane",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-0-]+)*$/,
                                        message: "Niepoprawny email"
                                    }
                                })
                            }),
                            errors.email ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (auth_module_default()).error,
                                children: errors.email?.message
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: (auth_module_default()).sendButton,
                        children: "Wyślij"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Auth_FotgotPassword = (FotgotPassword);

// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(98680);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./components/Auth/AuthModal.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Auth = ({ handleClose, isOpen })=>{
    const [index, setIndex] = (0,react_.useState)(false);
    const toggleIndex = ()=>{
        setIndex((prevState)=>!prevState);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((lib_default()), {
        isOpen: isOpen,
        onRequestClose: handleClose,
        ariaHideApp: false,
        className: (auth_module_default()).modalAuth,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: (auth_module_default()).modalCloseButton,
                onClick: handleClose,
                children: "X"
            }),
            !index ? /*#__PURE__*/ jsx_runtime_.jsx(SingIn, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Auth_FotgotPassword, {}),
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

;// CONCATENATED MODULE: ./components/Navigation/navBar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












const Navbar = ({ pathname })=>{
    const scrollValue = useScrollEffect();
    const { user, logoutUser } = (0,AuthContext.useUserContext)();
    const { isOpen, handleOpenModal, handleCloseModal } = (0,useModal/* default */.Z)();
    const scrollPath = pathname === "/" ? 544 : 12;
    const scrolll = scrollValue < scrollPath ? "#f0f3f500" : "#ffffff";
    const [openIndexes, setOpenIndexes] = (0,react_.useState)({});
    const [menuValue, setmenuValue] = (0,react_.useState)(false);
    const navPaddingTop = scrollValue < scrollPath ? "50px" : "20px";
    const handleOpenSubmenu = ({ levelIndex, itemIndex })=>{
        if (setOpenIndexes) {
            setOpenIndexes((prevOpenIndexes)=>({
                    ...prevOpenIndexes,
                    [levelIndex]: prevOpenIndexes[levelIndex] === itemIndex ? null : itemIndex
                }));
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "header",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
            background: scrollValue < scrollPath,
            paddingTop: scrollValue < scrollPath,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.nav, {
                style: {
                    backgroundColor: scrolll,
                    color: pathname !== "/" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                },
                className: "navbar",
                initial: {
                    opacity: 1
                },
                animate: {
                    backgroundColor: scrolll,
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
                        onClick: ()=>setmenuValue(!menuValue)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "checkbox",
                        id: "input-hamburger",
                        hidden: true,
                        checked: menuValue,
                        onChange: ()=>setmenuValue(menuValue)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
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
                                        onClick: ()=>setmenuValue(!menuValue)
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "leftMenu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flexLeft",
                                    children: navList_namespaceObject.n.map((item, levelIndex)=>item.left?.map((item2, itemIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `has-dropdown ${openIndexes[levelIndex] === itemIndex ? "open" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: item2.link,
                                                        className: "menu-link",
                                                        "aria-label": item2.li,
                                                        onClick: (e)=>{
                                                            handleOpenSubmenu({
                                                                levelIndex,
                                                                itemIndex
                                                            });
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                            color: scrollValue < scrollPath ? "true" : "false",
                                                            onClick: ()=>{
                                                                if (!item2.dropDown && menuValue) {
                                                                    setmenuValue(!menuValue);
                                                                }
                                                            },
                                                            children: item2.li
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: item2?.dropDown ? `submenu ${openIndexes[levelIndex] === itemIndex ? "open" : ""}` : "",
                                                        onClick: ()=>{
                                                            if (item2.dropDown) {
                                                                setmenuValue(!menuValue);
                                                            }
                                                        },
                                                        children: item2?.dropDown?.map((item3, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: item3.link,
                                                                    className: "menu-link",
                                                                    "aria-label": item3.liLi,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                                        children: item3.liLi
                                                                    })
                                                                })
                                                            }, index))
                                                    })
                                                ]
                                            }, itemIndex)))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "centerMenu",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flexCenter",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "has-dropdown",
                                        children: pathname === "/" && scrollValue < 544 ? "" : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: "menu-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "logo",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                        color: scrollValue < scrollPath ? "true" : "false",
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
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                        color: scrollValue < scrollPath ? "true" : "false",
                                                        className: "logoName",
                                                        children: "Z"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                        color: scrollValue < scrollPath ? "true" : "false",
                                                        className: "logoName",
                                                        children: "T"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                        color: scrollValue < scrollPath ? "true" : "false",
                                                        className: "logoName",
                                                        children: "S"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "rightMenu",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flexRight",
                                    children: [
                                        navList_namespaceObject.n.map((item, levelIndex)=>item.right?.map((item2, itemIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `has-dropdown ${openIndexes[levelIndex] === itemIndex ? "open" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: item2.link,
                                                            className: "menu-link",
                                                            "aria-label": item2.li,
                                                            onClick: (e)=>{
                                                                handleOpenSubmenu({
                                                                    levelIndex,
                                                                    itemIndex
                                                                });
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                                color: scrollValue < scrollPath ? "true" : "false",
                                                                onClick: ()=>{
                                                                    if (!item2.dropDown && menuValue) {
                                                                        setmenuValue(!menuValue);
                                                                    }
                                                                },
                                                                children: item2.li
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            className: item2?.dropDown ? `submenu ${openIndexes[levelIndex] === itemIndex ? "open" : ""}` : "",
                                                            children: item2?.dropDown?.map((item3, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: item3.link,
                                                                        className: "menu-link",
                                                                        "aria-label": item3.liLi,
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Span, {
                                                                            onClick: ()=>{
                                                                                setmenuValue(!menuValue);
                                                                            },
                                                                            children: [
                                                                                " ",
                                                                                item3.liLi
                                                                            ]
                                                                        })
                                                                    })
                                                                }, index))
                                                        })
                                                    ]
                                                }, itemIndex))),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "has-dropdown",
                                            children: user?.email ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "menu-link",
                                                onClick: logoutUser,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                    color: scrollValue < scrollPath ? "true" : "false",
                                                    onClick: ()=>{
                                                        setmenuValue(!menuValue);
                                                    },
                                                    children: "Wyloguj"
                                                })
                                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "menu-link",
                                                        onClick: handleOpenModal,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Span, {
                                                            color: scrollValue < scrollPath ? "true" : "false",
                                                            onClick: ()=>{
                                                                if (menuValue) {
                                                                    setmenuValue(!menuValue);
                                                                    handleOpenModal();
                                                                }
                                                            },
                                                            children: "Logowanie"
                                                        })
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
    });
};
/* harmony default export */ const navBar = (Navbar);

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs + 12 modules
var use_scroll = __webpack_require__(48546);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-transform.mjs + 3 modules
var use_transform = __webpack_require__(5194);
// EXTERNAL MODULE: ./components/Navigation/Slider/slider.module.scss
var slider_module = __webpack_require__(93168);
var slider_module_default = /*#__PURE__*/__webpack_require__.n(slider_module);
;// CONCATENATED MODULE: ./components/Navigation/Slider/slider.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const photos = [
    "/images/header/mini-radzyn_zielona_gora199.jpeg",
    "/images/header/PiotrChodorski2.jpeg",
    "/images/header/mini-radzyn_zielona_gora61.jpeg",
    "/images/header/radzyn_gloska_2010_sezon33.jpeg"
];
const Slider = ()=>{
    const scrollValue = useScrollEffect();
    const { scrollY } = (0,use_scroll/* useScroll */.v)();
    const scaleY = (0,use_transform/* useTransform */.H)(scrollY, [
        0,
        600
    ], [
        1,
        0
    ]);
    const [currentIndex, setCurrentIndex] = (0,react_.useState)(0);
    const [nextIndex, setNextIndex] = (0,react_.useState)(1);
    (0,react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setNextIndex((nextIndex)=>nextIndex === photos.length - 1 ? 0 : nextIndex + 1);
        }, 3000);
        return ()=>clearInterval(interval);
    }, []);
    (0,react_.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            setCurrentIndex(nextIndex);
        }, 500);
        return ()=>clearTimeout(timeout);
    }, [
        nextIndex
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (slider_module_default()).wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (slider_module_default()).sliderContainer,
            children: [
                photos.map((photo, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(slider_module_default()).slide} ${index === currentIndex ? (slider_module_default()).active : ""}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: (slider_module_default()).imagee,
                            src: photo,
                            alt: `Photo ${index + 1}`,
                            width: 800,
                            height: 480,
                            priority: true
                        })
                    }, index)),
                scrollValue > 545 ? "" : /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: (slider_module_default()).logoTransformWrapper,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        style: {
                            scale: scaleY
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (slider_module_default()).flexItem,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (slider_module_default()).item,
                                    children: "L "
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (slider_module_default()).logoImage,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: (slider_module_default()).logoCircle,
                                            src: "/images/header/LOZTScircuit.png",
                                            alt: "Slider Image",
                                            width: "250",
                                            height: "250",
                                            priority: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: (slider_module_default()).logoNet,
                                            src: "/images/header/LOZTScenter.png",
                                            alt: "Slider Image",
                                            width: 140,
                                            height: 140,
                                            priority: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (slider_module_default()).item,
                                    children: "Z"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (slider_module_default()).item,
                                    children: "T"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (slider_module_default()).item,
                                    children: "S"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const slider = (Slider);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./components/Navigation/navigationPhase.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function NavigationPhase() {
    const pathName = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: pathName === "/" ? (navigationPhase_module_default()).mainHeader : (navigationPhase_module_default()).mainHeader2,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navBar, {
                    pathname: pathName
                }),
                pathName === "/" ? /*#__PURE__*/ jsx_runtime_.jsx(slider, {}) : null
            ]
        })
    });
} // export default NavigationPhase;


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
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34595);
/* harmony import */ var _utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72487);
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
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { handleCloseModal } = (0,_utils_hooks_useModal_useModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoading(true);
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__/* .onAuthStateChanged */ .Aj)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I8, (res)=>{
            if (res) {
                setUser(res);
            } else {
                setUser(null);
            }
            setError("");
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    const registerUser = (email, password)=>{
        setLoading(true);
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__/* .createUserWithEmailAndPassword */ .Xb)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I8, email, password).then(()=>{
            const currentUser = _utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I8.currentUser;
            if (currentUser) {
                return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__/* .updateProfile */ .ck)(currentUser, {});
            }
            return null;
        }).then((res)=>console.log(res)).catch((err)=>setError(err.message)).finally(()=>setLoading(false));
    };
    const signInUser = async (email, password)=>{
        setLoading(true);
        try {
            const signInMethods = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__/* .fetchSignInMethodsForEmail */ .Nr)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I8, email);
            if (signInMethods.length === 0) {
                console.log(signInMethods);
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Konto z takim adresem email nie zostało zarejestrowane", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                setLoading(false);
                return;
            }
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__/* .signInWithEmailAndPassword */ .e5)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I8, email, password);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(`Zalogowano pomyślnie ${email}!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            console.log(email);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Błędne hasło!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
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
        } finally{
            setLoading(false);
        }
    };
    const logoutUser = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__/* .signOut */ .w7)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I8).then(()=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(`Wylogowano pomyślnie!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })).then(handleCloseModal).catch(()=>react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`Ups.. Coś poszło nie tak. Spróbuj jeszcze raz.`, {
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
            const signInMethods = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__/* .fetchSignInMethodsForEmail */ .Nr)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I8, email);
            if (signInMethods.length === 0) {
                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error("Konto z takim adresem email nie zostało zarejestrowane", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                setLoading(false);
                return;
            }
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__/* .sendPasswordResetEmail */ .LS)(_utils_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__/* .auth */ .I8, email);
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success("Link do resetowania hasła został wysłany na Tw\xf3j adres email", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        } catch (error) {
            console.error("Wystąpił błąd podczas resetowania hasła:", error);
        }
    };
    const contextValue = {
        user,
        loading,
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
	"modalAuth": "auth_modalAuth__8QiDd",
	"layoutWrapper": "auth_layoutWrapper__w_VYV",
	"modalCloseButton": "auth_modalCloseButton__SAB1a",
	"form": "auth_form__Rn58c",
	"formSection": "auth_formSection__xtnCF",
	"label": "auth_label__lZdle",
	"inputForm": "auth_inputForm__NMD69",
	"sendButton": "auth_sendButton__U5PnM",
	"error": "auth_error__cir5f",
	"logorForgetPass": "auth_logorForgetPass___SSEN"
};


/***/ }),

/***/ 93168:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "slider_wrapper__h6hYU",
	"sliderContainer": "slider_sliderContainer__JyC8l",
	"slide": "slider_slide__XjJnf",
	"active": "slider_active__li7uT",
	"imagee": "slider_imagee__rD2qF",
	"logoTransformWrapper": "slider_logoTransformWrapper__vQYUc",
	"flexItem": "slider_flexItem__Mlmye",
	"item": "slider_item__Aj8DL",
	"logoImage": "slider_logoImage__LIe24",
	"logoCircle": "slider_logoCircle__ywho7",
	"rotation": "slider_rotation__TSE9U",
	"logoNet": "slider_logoNet__wpUZM"
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

/***/ 65797:
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
;// CONCATENATED MODULE: ./components/Navigation/navigationPhase.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/Kuba/loztstypescript/loztstypescript2/components/Navigation/navigationPhase.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navigationPhase = (__default__);
;// CONCATENATED MODULE: ./app/registry.tsx

const registry_proxy = (0,module_proxy.createProxy)(String.raw`/Users/Kuba/loztstypescript/loztstypescript2/app/registry.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: registry_esModule, $$typeof: registry_$$typeof } = registry_proxy;
const registry_default_ = registry_proxy.default;


/* harmony default export */ const registry = (registry_default_);
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
;// CONCATENATED MODULE: ./app/layout.tsx










const metadata = {
    title: "Lozts",
    description: "Lubelski Okręgowy Związek tenisa Stołowego",
    icons: "/images/header/logo.png"
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
                                children
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
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";


// const Loading = () => {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     const handleStart = () => setLoading(true);
//     const handleComplete = () => setLoading(false);
//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);
//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   }, []);
//   return (
//     loading && (
//
//     )
//   );
// };
// export default Loading;
function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().loadingContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_loading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().bouncingBall)
        })
    });
}


/***/ }),

/***/ 67272:
/***/ (() => {



/***/ })

};
;