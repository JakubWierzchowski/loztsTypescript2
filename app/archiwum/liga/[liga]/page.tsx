'use client';
import React, { useMemo } from 'react';
import { LeagueMainTableComponent } from '@/components/League/MainTableLeague/LeagueMainTableComponents';
import ArchivesDataLeague from '@/data/archivesLeague.json';
import styles from '@/components/ArchivesLeague/archives.module.scss';
import { leaguePageDetails } from '@/types/leagues/league.types';
import useCalculateResult from '@/utils/hooks/league/useCalculateResult';

export default function ArchiwumLiga({ params }: leaguePageDetails) {
  const data = ArchivesDataLeague.ligaArchiwum;
  const { calculateResult } = useCalculateResult();

  const findArchives = data.find((sezon) => sezon.sezon === params.liga);

  const detailsArchives = findArchives?.details?.map((item) => item.leagueDetails).flat();

  const sortedData = useMemo(() => {
    return calculateResult(detailsArchives);
  }, [detailsArchives, calculateResult]);

  return (
    <section className={styles.wrapper}>
      {sortedData?.map((item, index) => (
        <>
          <h1 className={styles.title}>{item.title}</h1>
          <LeagueMainTableComponent data={item.details} index={index} title={item.month} key={item.month} />
        </>
      ))}
    </section>
  );
}
