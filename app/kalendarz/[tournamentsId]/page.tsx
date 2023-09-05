"use client";
import TournamentsTable from "@/components/Calendar/Tournaments/TournamentsTable";
import React, { FC, useState, useEffect } from "react";
import CalendarDate from "@/data/calendarDate.json";
import {
  CalendarTypeMonth,
  CalendarTypeTournaments,
  CalendarTypeDetails,
  CalendarTournamentPageProps,
} from "@/types/calendar.type";
import styles from "@/components/Calendar/table.module.scss";
import Clock from "@/components/Calendar/Tournaments/Clock/Clock";
import AnimationClassHook from "@/utils/hooks/getAnimationClass/getAnimationClass";

export default function Tournaments({ params }: CalendarTournamentPageProps) {
  const pathTournament = params.tournamentsId;
  const [timeDone, setTimeDone] = useState<boolean>(false);
  const data: CalendarTypeMonth[] | CalendarTypeMonth = CalendarDate;

  const findTournaments: (CalendarTypeDetails | undefined)[] = data.map(
    (item) =>
      item.details.find((tournament) => tournament.link === pathTournament)
  );

  const [actualData, setActualData] = useState(findTournaments);

  async function fetchData() {
    try {
      const response = await fetch(`/api/calendar/${pathTournament}`);
      const data = await response.json();
      setActualData(data);
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const filteredTournaments: CalendarTypeDetails[] = actualData.filter(
    (item): item is CalendarTypeDetails => item !== undefined
  );

  const slideInFirst = "showAnimationDelay";
  const slideInSecond = "";
  const { ref, getShowAnimationClass } = AnimationClassHook(
    slideInFirst,
    slideInSecond
  );

  const title = actualData.map((item) => item?.title);

  return (
    <>
      <div
        className={`${styles.titleClockAnimation} ${getShowAnimationClass()}`}
        ref={ref}
      >
        <h1 className={styles.tableTitle}>{title}</h1>
        <Clock
          findTournaments={filteredTournaments}
          tournaments={pathTournament}
          timeDone={timeDone}
          setTimeDone={setTimeDone}
          fetchData={fetchData}
        />
      </div>
      {actualData.map((item) =>
        item?.typeofTournaments?.map((item3: CalendarTypeTournaments) =>
          item3.table.map((item4, index) =>
            item4 === "Wybierz kategorię" ? null : (
              <TournamentsTable
                fetchData={fetchData}
                pathTournament={pathTournament}
                index={index}
                key={item4}
                title={item4}
                timeDone={timeDone}
                details={
                  (item?.players ?? []).filter(
                    (player) => player.gender === item4
                  ) as unknown as CalendarTypeDetails[]
                }
              />
            )
          )
        )
      )}
    </>
  );
}
