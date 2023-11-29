import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Andro from './BanerAndro.jpeg';
function footer() {
  return (
    <section className={styles.footerWrapper}>
      <div className={styles.footerDetails}>
        <Image
          src={Andro}
          className={styles.image}
          alt="Baner Andro"
          fill
          sizes="(max-width: 50px) 1vw, (max-width: 425px) 2vw, 75vw"
        />
      </div>
    </section>
  );
}

export default footer;
