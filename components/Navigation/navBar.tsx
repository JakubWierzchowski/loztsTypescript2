"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollEffect } from "../../utils/hooks/useScrollEffect/useScrollEffect";
import navBar from "../../data/navList.json";
import { Span } from "./navBar.styles";
import useModal from "@/utils/hooks/useModal/useModal";
import { useUserContext } from "@/utils/context/AuthContext";
import AuthModal from "../Auth/AuthModal";
import { Wrapper } from "./navBar.styles";
import {
  NavbarProps,
  OpenIndexes,
  HandleOpenSubmenuArgs,
} from "@/types/navBar.types";

const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  const scrollValue = useScrollEffect();
  const { user, logoutUser } = useUserContext();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const scrollPath = pathname === "/" ? 544 : 12;
  const scrolll = scrollValue < scrollPath ? "#f0f3f500" : "#ffffff";
  const [openIndexes, setOpenIndexes] = useState<OpenIndexes>({});
  const [menuValue, setmenuValue] = useState(false);
  const navPaddingTop = scrollValue < scrollPath ? "50px" : "20px";
  const handleOpenSubmenu = ({
    levelIndex,
    itemIndex,
  }: HandleOpenSubmenuArgs): void => {
    if (setOpenIndexes) {
      setOpenIndexes((prevOpenIndexes: OpenIndexes) => ({
        ...prevOpenIndexes,
        [levelIndex]:
          prevOpenIndexes[levelIndex] === itemIndex ? null : itemIndex,
      }));
    }
  };

  return (
    <section className="header">
      <Wrapper
      // background={scrollValue < scrollPath}
      // paddingTop={scrollValue < scrollPath}
      >
        <motion.nav
          style={{
            backgroundColor: scrolll,
            color: pathname !== "/" ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)",
          }}
          className="navbar"
          initial={{ opacity: 1 }}
          animate={{
            backgroundColor: scrolll,
            paddingTop: navPaddingTop,
          }}
          exit={{ opacity: 0, paddingTop: "20px" }}
        >
          <label
            htmlFor="input-hamburger"
            className={`hamburger ${menuValue ? "close" : ""}`}
            onClick={() => setmenuValue(!menuValue)}
          ></label>
          <input
            type="checkbox"
            id="input-hamburger"
            hidden
            checked={menuValue}
            onChange={() => setmenuValue(menuValue)}
          />

          <ul className="menu">
            <Link href="/" className="menu-link" aria-label="Back to main page">
              <div className="backToMainPage">
                <Image
                  src="/images/header/logo.png"
                  width={50}
                  height={50}
                  alt="Back to main page"
                  onClick={() => setmenuValue(!menuValue)}
                />
              </div>
            </Link>
            <li className="leftMenu">
              <div className="flexLeft">
                {navBar.navBar.map((item, levelIndex) =>
                  item.left?.map((item2, itemIndex) => (
                    <div
                      className={`has-dropdown ${
                        openIndexes[levelIndex] === itemIndex ? "open" : ""
                      }`}
                      key={itemIndex}
                    >
                      <Link
                        href={item2.link}
                        className="menu-link"
                        aria-label={item2.li}
                        onClick={(e) => {
                          handleOpenSubmenu({ levelIndex, itemIndex });
                        }}
                      >
                        <Span
                          color={scrollValue < scrollPath ? "true" : "false"}
                          onClick={() => {
                            if (!item2.dropDown && menuValue) {
                              setmenuValue(!menuValue);
                            }
                          }}
                        >
                          {item2.li}
                        </Span>
                      </Link>
                      <ul
                        className={
                          item2?.dropDown
                            ? `submenu ${
                                openIndexes[levelIndex] === itemIndex
                                  ? "open"
                                  : ""
                              }`
                            : ""
                        }
                        onClick={() => {
                          if (item2.dropDown) {
                            setmenuValue(!menuValue);
                          }
                        }}
                      >
                        {item2?.dropDown?.map((item3, index) => (
                          <li key={index}>
                            <Link
                              href={item3.link}
                              className="menu-link"
                              aria-label={item3.liLi}
                            >
                              <Span>{item3.liLi}</Span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </li>

            <li className="centerMenu">
              <div className="flexCenter">
                <div className="has-dropdown">
                  {pathname === "/" && scrollValue < 544 ? (
                    ""
                  ) : (
                    <Link href="/" className="menu-link">
                      <div className="logo">
                        <Span
                          color={scrollValue < scrollPath ? "true" : "false"}
                          className="logoName"
                        >
                          L
                        </Span>
                        <div className="divIMGlogo">
                          <Image
                            className="logoNameImage"
                            src="/images/header/LOZTS1.png"
                            alt="Logo1"
                            width={40}
                            height={40}
                            priority
                          />
                          <Image
                            className="logoNameImage2"
                            src="/images/header/LOZTS2.png"
                            alt="Logo2"
                            width={20}
                            height={20}
                            priority
                          />
                        </div>
                        <Span
                          color={scrollValue < scrollPath ? "true" : "false"}
                          className="logoName"
                        >
                          Z
                        </Span>
                        <Span
                          color={scrollValue < scrollPath ? "true" : "false"}
                          className="logoName"
                        >
                          T
                        </Span>
                        <Span
                          color={scrollValue < scrollPath ? "true" : "false"}
                          className="logoName"
                        >
                          S
                        </Span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </li>
            <li className="rightMenu">
              <div className="flexRight">
                {navBar.navBar.map((item, levelIndex) =>
                  item.right?.map((item2, itemIndex) => (
                    <div
                      className={`has-dropdown ${
                        openIndexes[levelIndex] === itemIndex ? "open" : ""
                      }`}
                      key={itemIndex}
                    >
                      <Link
                        href={item2.link}
                        className="menu-link"
                        aria-label={item2.li}
                        onClick={(e) => {
                          handleOpenSubmenu({ levelIndex, itemIndex });
                        }}
                      >
                        <Span
                          color={scrollValue < scrollPath ? "true" : "false"}
                          onClick={() => {
                            if (!item2.dropDown && menuValue) {
                              setmenuValue(!menuValue);
                            }
                          }}
                        >
                          {item2.li}
                        </Span>
                      </Link>
                      <ul
                        className={
                          item2?.dropDown
                            ? `submenu ${
                                openIndexes[levelIndex] === itemIndex
                                  ? "open"
                                  : ""
                              }`
                            : ""
                        }
                      >
                        {item2?.dropDown?.map((item3, index) => (
                          <li key={index}>
                            <Link
                              href={item3.link}
                              className="menu-link"
                              aria-label={item3.liLi}
                            >
                              <Span
                                onClick={() => {
                                  setmenuValue(!menuValue);
                                }}
                              >
                                {" "}
                                {item3.liLi}
                              </Span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
                <div className="has-dropdown">
                  {user?.email ? (
                    <div className="menu-link" onClick={logoutUser}>
                      <Span
                        color={scrollValue < scrollPath ? "true" : "false"}
                        onClick={() => {
                          setmenuValue(!menuValue);
                        }}
                      >
                        Wyloguj
                      </Span>
                    </div>
                  ) : (
                    <>
                      <div className="menu-link" onClick={handleOpenModal}>
                        <Span
                          color={scrollValue < scrollPath ? "true" : "false"}
                          onClick={() => {
                            if (menuValue) {
                              setmenuValue(!menuValue);
                              handleOpenModal();
                            }
                          }}
                        >
                          Logowanie
                        </Span>
                      </div>

                      <AuthModal
                        isOpen={isOpen}
                        handleClose={handleCloseModal}
                      />
                    </>
                  )}
                </div>
              </div>
            </li>
          </ul>
        </motion.nav>
      </Wrapper>
    </section>
  );
};

export default Navbar;
