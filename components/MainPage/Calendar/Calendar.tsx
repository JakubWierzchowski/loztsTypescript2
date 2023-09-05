import React from "react";
import CalendarItem from "./CalendarItem";
import Link from "next/link";
import CalendarDate from "@/data/calendarDate.json";
import styles from "./calendar.module.scss";
import { CalendarTypeMonth } from "@/types/calendar.type";

export default async function CalendarMainPage() {
  const data: CalendarTypeMonth[] = CalendarDate;

  console.log(data.slice(0, 2).map((item) => item));
  return (
    <section className={styles.calendarSection}>
      <div className={styles.calendarTitle}>
        <h3> Nadchodzące wydarzenia</h3>
      </div>
      <div className={styles.grid}>
        {data.slice(0, 2).map((item) => (
          <CalendarItem key={item.month} {...item} />
        ))}
      </div>

      <div className={styles.moreEvents}>
        <Link href="/kalendarz" className={styles.moreEvents__link}>
          Więcej wydarzeń
        </Link>
      </div>
    </section>
  );
}
