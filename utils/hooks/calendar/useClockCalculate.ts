import { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { ClockDetailsProps } from '@/types/calendar.type';

function useClockCalculate({ findTournaments, settimeToMuch, setTimeDone, setLoading }: ClockDetailsProps) {
  const [timerDays, setTimerDays] = useState<number>(0);
  const [timerHours, setTimerHours] = useState<number>(0);
  const [timerMinutes, setTimerMinutes] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);

  const startTimer = useCallback(() => {
    let interval: NodeJS.Timeout;
    const calculateTimeLeft = () => {
      const now = new Date().getTime();

      if (findTournaments && findTournaments.length > 0) {
        findTournaments?.forEach((item) => {
          if (item && item.datamomentInvite) {
            const countDownDate = moment(item.datamomentInvite, 'YYYY-MM-DD').valueOf();
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

  useEffect(() => {
    if (timerDays === 0 && timerHours === 0 && timerMinutes === 0 && timerSeconds === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [timerDays, timerHours, timerMinutes, timerSeconds]);

  return {
    timerDays,
    timerHours,
    timerMinutes,
    timerSeconds,
  };
}

export default useClockCalculate;
