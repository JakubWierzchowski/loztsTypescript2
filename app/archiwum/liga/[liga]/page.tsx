"use client";
import React from "react";
import LeagueMainTableComponent from "@/components/League/MainTableLeague/LeagueMainTableComponents";
import ArchivesDataLeague from "@/data/archivesLeague.json";
import { LeagueSeason } from "@/types/archivesLeague";
import styles from "@/components/League/MainTableLeague/leagueMainTable.module.scss";
import { archivesPropsLeague } from "@/types/league.types";

export default function ArchiwumLiga({ params }: archivesPropsLeague) {
  const data: LeagueSeason[] = ArchivesDataLeague.ligaArchiwum;

  const findArchives = data.find((sezon) => sezon.sezon === params.liga);

  const sum = (arr: number[]) => arr.reduce((acc, el) => acc + el, 0);

  if (findArchives) {
    findArchives.details.forEach(({ leagueDetails }) =>
      leagueDetails.forEach(({ details }) =>
        details.sort((a, b) => sum(b.result) - sum(a.result))
      )
    );
  }
  if (findArchives) {
    findArchives.details.forEach(({ leagueDetails }) =>
      leagueDetails.forEach(({ details }) =>
        details.sort((a, b) => sum(b.wyniki) - sum(a.wyniki))
      )
    );
  }

  return (
    <section className={styles.wrapper}>
      {findArchives?.details.map((item, index) => (
        <div key={item.title}>
          <h1 className={styles.title}>{item.title}</h1>
          {item.leagueDetails.map((item, index) => (
            <LeagueMainTableComponent
              data={item.details.filter(
                (item) => item.team !== "Nazwa Drużyny"
              )}
              index={index}
              title={item.month}
              key={index}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
