'use client';
import React from 'react';
import { OurSuccessesProps, SuccessName } from '@/types/ourSuccesses.type';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import styles from './ourSuccesses.module.scss';
const OurSuccess: React.FC<OurSuccessesProps> = ({ details, index }) => {
  const slideInFirst = 'slideIn';
  const slideInSecond = 'slideOut';
  const { ref, getAnimationClass } = AnimationClassHook(slideInFirst, slideInSecond);

  return (
    <ul className={`${styles.list} ${getAnimationClass(index)}`} ref={ref}>
      <li className={styles.succcessDate}>{details.date}</li>
      {details.name.map((succesName: SuccessName) => (
        <li className={styles.wrapperDetails} key={succesName.title}>
          <strong>{succesName.player}</strong> - {succesName.title}
        </li>
      ))}
    </ul>
  );
};

export default OurSuccess;
