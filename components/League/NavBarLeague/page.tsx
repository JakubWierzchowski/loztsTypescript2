'use client';
import React, { FC } from 'react';
import navBarData from '@/data/League/navBarLeague.json';
import Link from 'next/link';
import styles from './navBarLeague.module.scss';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';

const NavBarLeague = ({ leaguePath }: { leaguePath: string }) => {
  const { ref, getAnimationClass } = AnimationClassHook('slideIn', 'slideOut');
  const dataPath = navBarData.filter((item) => (item.ID !== leaguePath ? item : null));

  return (
    <section className={styles.navBarWrapper}>
      {dataPath.map((item, index) => (
        <Link href={item.link} key={item.ID}>
          <div ref={ref} className={`${styles.imageWrapper} ${getAnimationClass(index || 0)}`}>
            <div className={styles.imageBackground} style={{ backgroundImage: `url(${item.background})` }}></div>
            <div className={styles.leagueTitle}>{item.text}</div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default NavBarLeague;
