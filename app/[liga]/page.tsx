"use client";
import React from "react";
import LeagueMainTableComponent from "@/components/League/MainTableLeague/LeagueMainTableComponents";
import styles from "@/components/League/leagueMain.module.scss";
import NavBarLeague from "@/components/League/NavBarLeague/page";
import AddMatchDayQueue from "@/components/League/AddQueueMatchDay/page";
import QueueResult from "@/components/League/QueueResults/queueResult";
import useFetchHook from "@/utils/hooks/league/fetchHook";
interface pageProps {
  params: { liga: string };
}

export default function Liga({ params }: pageProps) {
  const pathName = params.liga;
  const { fetchData, actualData, Liga } = useFetchHook(pathName);

  return (
    <>
      <NavBarLeague leaguePath={pathName} />
      <h1 className={styles.season}>{actualData?.season}</h1>
      {actualData?.leagueDetails.map((item, index) => (
        <div key={index}>
          <LeagueMainTableComponent
            data={item.details}
            index={index}
            title={item.month}
          />
        </div>
      ))}
      <AddMatchDayQueue
        leaguePath={pathName}
        findLeague={actualData}
        fetchData={fetchData}
      />
      <QueueResult
        findLeague={actualData}
        leaguePath={params.liga}
        firebaseLeague={Liga}
        fetchData={fetchData}
      />
    </>
  );
}
