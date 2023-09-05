"use client";
import React, { useState } from "react";
import moment from "moment";
import Link from "next/link";
// import { SpanTurnament } from "../../Kalendarz/calendar.style";
import { CalendarItemPropsMainPage } from "@/types/calendar.type";
import AnimationClassHook from "@/utils/hooks/getAnimationClass/getAnimationClass";
import styles from "./calendarItem.module.scss";

const CalendarItem: React.FC<CalendarItemPropsMainPage> = ({ details }) => {
  //   const [isInView, setIsInView] = useState(false);
  const myDate = moment().format("YYYY-MM-DD");
  const slideInFirst = "slideIn";
  const slideInSecond = "slideOut";
  const { ref, getAnimationClass } = AnimationClassHook(
    slideInFirst,
    slideInSecond
  );

  return (
    <>
      {details.length !== 0 ? (
        details.map((item, index) =>
          moment(item.datamoment).isAfter(myDate) ? (
            <section
              key={item.title}
              ref={ref}
              className={`${styles.calendarSection} ${getAnimationClass(
                index || 0
              )}`}
            >
              <div className={styles.eventsPartDate}>
                <div className={styles.eventsPartDateDay}>{item.data}</div>
              </div>
              <div className={styles.eventsPartContent}>
                {item.datamomentInvite ? (
                  <h4 className={styles.eventsPartTitle}>
                    <Link
                      href={`/kalendarz/${item.link}`}
                      className={styles.link}
                    >
                      <span className={styles.spanTournament}>
                        {item.title}
                      </span>
                    </Link>
                  </h4>
                ) : (
                  <h4 className={styles.eventsPartTitle}>{item.title}</h4>
                )}
              </div>
            </section>
          ) : null
        )
      ) : (
        <h2 className={styles.eventsPartTitle}>Brak nowych wydarzeń!</h2>
      )}
    </>
  );
};
export default CalendarItem;
