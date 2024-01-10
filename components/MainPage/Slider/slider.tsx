import Image from 'next/image';
import styles from './slider.module.scss';
import Scroll from './scrollValue';

const Slider = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sliderContainer}>
        <Scroll>
          <div className={styles.flexItem}>
            <div className={styles.item}>L </div>
            <div className={styles.logoImage}>
              <Image
                className={styles.logoCircle}
                src="/images/header/LOZTScircuit.png"
                alt="Slider Image"
                width={250}
                height={250}
                priority
              />
              <Image
                className={styles.logoNet}
                src="/images/header/LOZTScenter.png"
                alt="Slider Image"
                width={140}
                height={140}
                priority
              />
            </div>
            <div className={styles.item}>Z</div>
            <div className={styles.item}>T</div>
            <div className={styles.item}>S</div>
          </div>
        </Scroll>
      </div>
    </section>
  );
};

export default Slider;
