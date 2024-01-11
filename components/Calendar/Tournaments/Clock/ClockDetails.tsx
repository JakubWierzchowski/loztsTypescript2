import React from 'react';
import styles from '../tournamentsTable.module.scss';
import { ClockDetailsProps } from '@/types/calendar.type';
import useClockCalculate from '@/utils/hooks/calendar/useClockCalculate';

const ClockDetails: React.FC<ClockDetailsProps> = ({
  setTimeDone,
  settimeToMuch,
  timeToMuch,
  findTournaments,
  setLoading,
}) => {
  const { timerSeconds, timerDays, timerMinutes, timerHours } = useClockCalculate({
    findTournaments,
    settimeToMuch,
    setTimeDone,
    setLoading,
  });

  return (
    <>
      <section className={styles.wrapper}>
        {timeToMuch ? (
          <h2 className={styles.clockTitle}>Do zawodów zostało jeszcze zbyt dużo czasu. Wróć za</h2>
        ) : (
          <h2 className={styles.clockTitle}>Do końca zgłoszeń pozostało: </h2>
        )}
        <>
          <section className={styles.wrapperTimer}>
            <section className={styles.wrapperSection}>
              <p className={styles.time}>{timerDays}</p>
              <small className={styles.timeString}>Dni</small>
            </section>
            <span className={styles.time}>:</span>
            <section className={styles.wrapperSection}>
              <p className={styles.time}>{timerHours}</p>
              <small className={styles.timeString}>Godzin</small>
            </section>
            <span className={styles.time}>:</span>
            <section className={styles.wrapperSection}>
              <p className={styles.time}>{timerMinutes}</p>
              <small className={styles.timeString}>Minut</small>
            </section>
            <span className={styles.time}>:</span>
            <section className={styles.wrapperSection}>
              <p className={styles.time}>{timerSeconds}</p>
              <small className={styles.timeString}>Sekund</small>
            </section>
          </section>
        </>
      </section>
    </>
  );
};

export default ClockDetails;
