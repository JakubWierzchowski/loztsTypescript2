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
  const [timerDays, setTimerDays] = useState<number | string>("0");
  const [timerHours, setTimerHours] = useState<number | string>("0");
  const [timerMinutes, setTimerMinutes] = useState<number | string>("0");
  const [timerSeconds, setTimerSeconds] = useState<number | string>("0");

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

            const dayLeft = parseInt(
              (distance / (24 * 60 * 60 * 1000)).toFixed(0)
            );
            const hoursLeft = parseInt(
              ((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)).toFixed(0)
            );
            const minsLeft = parseInt(
              ((distance % (60 * 60 * 1000)) / (1000 * 60)).toFixed(0)
            );
            const secondsLeft = parseInt(
              ((distance % (60 * 1000)) / 1000).toFixed(0)
            );

            if (distance < 0) {
              setTimeDone(true);
              clearInterval(interval);
            }
            if (distance > 604800000) {
              settimeToMuch(true);
            }
            if (distance === 0) {
              window.location.reload();
            } else {
              setTimerDays(Math.max(dayLeft, 0));
              setTimerHours(Math.max(hoursLeft, 0));
              setTimerMinutes(Math.max(minsLeft, 0));
              setTimerSeconds(Math.max(secondsLeft, 0));
            }
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
