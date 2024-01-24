'use client';

import React from 'react';
import { useUserContext } from '@/utils/context/AuthContext';
import useModal from '@/utils/hooks/useModal/useModal';
import useNavigation from '@/utils/hooks/navigation/navigation';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import navBar from '@/data/navList.json';
import AuthModal from '@/components/Auth/AuthModal';

import { Wrapper } from './navBar.styles';
import classes from './navigationPhase.module.scss';

import { LoginLogoutSpan, DropdownMenu, CenterLogo } from './index';

export default function NavigationPhase() {
  const pathName = usePathname();
  const {
    scrollValue,
    handleOpenSubmenu,
    toggleMenuValue,
    backgroundColor,
    navPaddingTop,
    spanColor,
    openIndexes,
    menuValue,
    setMenuValue,
  } = useNavigation({
    pathName,
  });

  const { user, logoutUser } = useUserContext();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const authFunction = () => {
    setMenuValue(false);
    handleOpenModal();
  };

  return (
    <>
      <header className={pathName === '/' ? classes.mainHeader : classes.mainHeader2}>
        <section className="header">
          <Wrapper>
            <motion.nav
              style={{ backgroundColor, color: pathName !== '/' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)' }}
              className="navbar"
              initial={{ opacity: 1 }}
              animate={{ backgroundColor, paddingTop: navPaddingTop }}
              exit={{ opacity: 0, paddingTop: '20px' }}
            >
              <label htmlFor="input-hamburger" className={`hamburger ${menuValue ? 'close' : ''}`}></label>
              <input
                type="checkbox"
                id="input-hamburger"
                hidden
                checked={menuValue}
                onChange={() => toggleMenuValue()}
              />

              <ul className="menu">
                <li>
                  <Link href="/" className="menu-link" aria-label="Back to main page">
                    <div className="backToMainPage">
                      <Image
                        src="/images/header/logo.png"
                        width={50}
                        height={50}
                        alt="Back to main page"
                        onClick={toggleMenuValue}
                      />
                    </div>
                  </Link>
                </li>
                <li className="leftMenu">
                  <div className="flexLeft">
                    {navBar.navBar.map(
                      (item, levelIndex) =>
                        item.left?.map((mainMenu, itemIndex) => (
                          <div
                            className={`has-dropdown ${openIndexes[levelIndex] === itemIndex ? 'open' : ''}`}
                            key={itemIndex}
                          >
                            <DropdownMenu
                              // item={item}
                              // menuValue={menuValue}
                              // setMenuValue={setMenuValue}
                              mainMenu={mainMenu}
                              isOpen={openIndexes[levelIndex] === itemIndex}
                              handleOpenSubmenu={() => handleOpenSubmenu({ levelIndex, itemIndex })}
                              color={spanColor}
                              onItemClick={toggleMenuValue}
                            />
                          </div>
                        ))
                    )}
                  </div>
                </li>

                <CenterLogo pathname={pathName} scrollValue={scrollValue} color={spanColor} />

                <li className="rightMenu">
                  <div className="flexRight">
                    {navBar.navBar.map(
                      (item, levelIndex) =>
                        item.right?.map((mainMenu, itemIndex) => (
                          <div
                            className={`has-dropdown ${openIndexes[levelIndex] === itemIndex ? 'open' : ''}`}
                            key={itemIndex}
                          >
                            <DropdownMenu
                              // item={item}
                              // menuValue={menuValue}
                              // setMenuValue={setMenuValue}
                              mainMenu={mainMenu}
                              isOpen={openIndexes[levelIndex] === itemIndex}
                              handleOpenSubmenu={() => handleOpenSubmenu({ levelIndex, itemIndex })}
                              color={spanColor}
                              onItemClick={toggleMenuValue}
                            />
                          </div>
                        ))
                    )}

                    <div className="has-dropdown">
                      {user?.email ? (
                        <LoginLogoutSpan
                          loginLogout={logoutUser}
                          menuValue={toggleMenuValue}
                          color={spanColor}
                          text={'Wyloguj'}
                        />
                      ) : (
                        <>
                          <LoginLogoutSpan
                            loginLogout={handleOpenModal}
                            menuValue={authFunction}
                            color={spanColor}
                            text={'Logowanie'}
                          />
                          <AuthModal isOpen={isOpen} handleClose={handleCloseModal} />
                        </>
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </motion.nav>
          </Wrapper>
        </section>
      </header>
    </>
  );
}
