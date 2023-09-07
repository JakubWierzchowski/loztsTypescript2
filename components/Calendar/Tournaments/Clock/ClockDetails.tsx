import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import styles from "../tournamentsTable.module.scss";
import { CalendarTypeDetails } from "@/types/calendar.type";
import Countdown from "./Cutdown";
import { ClockDetailsProps } from "@/types/calendar.type";

const ClockDetails: React.FC<ClockDetailsProps> = ({
  setTimeDone,
  settimeToMuch,
  timeToMuch,
  findTournaments,
}) => {
  const [timerDays, setTimerDays] = useState<number>(0);
  const [timerHours, setTimerHours] = useState<number>(0);
  const [timerMinutes, setTimerMinutes] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);

  const startTimer = useCallback(() => {
    let interval: any;

    const calculateTimeLeft = () => {
      const now = new Date().getTime();

      if (findTournaments.length > 0) {
        findTournaments.forEach((item) => {
          if (item && item.datamomentInvite) {
            const countDownDate = moment(
              item.datamomentInvite,
              "YYYY-MM-DD"
            ).valueOf();
            const distance = countDownDate - now;
            // @ts-ignore
            const dayLeft = parseInt(distance / (24 * 60 * 60 * 1000));

            const hoursLeft = parseInt(
              // @ts-ignore
              (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );

            const minsLeft = parseInt(
              // @ts-ignore
              (distance % (60 * 60 * 1000)) / (1000 * 60)
            );
            // @ts-ignore
            const secondsLeft = parseInt((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
              setTimeDone(true);
              clearInterval(interval);
            }

            if (distance > 604800000) {
              settimeToMuch(true);
              setTimerDays(dayLeft - 7);
            } else {
              setTimerDays(dayLeft);
            }

            if (distance === 0) {
              window.location.reload();
            }

            setTimerHours(hoursLeft);
            setTimerMinutes(minsLeft);
            setTimerSeconds(secondsLeft);
          }
        });
      } else {
        setTimeDone(true);
        clearInterval(interval);
      }
    };

    interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [findTournaments, setTimeDone, settimeToMuch]);

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return (
    <>
      <section className={styles.wrapper}>
        {timeToMuch ? (
          <h2 className={styles.clockTitle}>
            Do zawodów zostało jeszcze zbyt dużo czasu. Wróć za
          </h2>
        ) : (
          <h2 className={styles.clockTitle}>Do końca zgłoszeń pozostało: </h2>
        )}
        <Countdown
          seconds={timerSeconds}
          mins={timerMinutes}
          hours={timerHours}
          days={timerDays}
        />
      </section>
    </>
  );
};

export default ClockDetails;
