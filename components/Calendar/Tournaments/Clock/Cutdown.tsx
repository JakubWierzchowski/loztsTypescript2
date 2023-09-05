import React from "react";
import styles from "../tournamentsTable.module.scss";
import { CountdownProps } from "@/types/calendar.type";
const Countdown: React.FC<CountdownProps> = ({
  days,
  hours,
  mins,
  seconds,
}) => {
  return (
    <section className={styles.wrapperTimer}>
      <section className={styles.wrapperSection}>
        <p className={styles.time}>{days}</p>
        <small className={styles.timeString}>Dni</small>
      </section>
      <span className={styles.time}>:</span>
      <section className={styles.wrapperSection}>
        <p className={styles.time}>{hours}</p>
        <small className={styles.timeString}>Godzin</small>
      </section>
      <span className={styles.time}>:</span>
      <section className={styles.wrapperSection}>
        <p className={styles.time}>{mins}</p>
        <small className={styles.timeString}>Minut</small>
      </section>
      <span className={styles.time}>:</span>
      <section className={styles.wrapperSection}>
        <p className={styles.time}>{seconds}</p>
        <small className={styles.timeString}>Sekund</small>
      </section>
    </section>
  );
};

export default Countdown;
