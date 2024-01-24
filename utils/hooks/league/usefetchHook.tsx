'use client';
import { useState, useEffect } from 'react';
import { LeagueDataItem, QueueDetails, QueueDetailsFirebase } from '@/types/leagues/league.types';
import LeagueData from '@/data/league.json';
import db from '@/utils/firebase/firebase-config';
import { onSnapshot, collection } from 'firebase/firestore';

function useFetchHook(initialPathName: string) {
  const [pathName, setPathName] = useState(initialPathName);
  const [Liga, setLiga] = useState<QueueDetailsFirebase[]>([]);

  const data: LeagueDataItem[] = LeagueData;

  const findLeague = data?.find((item: { league: string }) => item.league === pathName);
  const [actualData, setActualData] = useState(findLeague);
  const [currentInfo, setCurrentInfo] = useState<QueueDetails>({} as QueueDetails);
  const [details, setDetails] = useState('');
  const [activeDay, setActiveDay] = useState('');

  async function fetchData() {
    try {
      const response = await fetch(`/api/allLeague/${pathName}`);
      const data = await response.json();
      const sortedDate = data.queueDetails.sort((a: any, b: any) => (a.day > b.day ? -1 : 0));
      setActualData(data);
      setCurrentInfo(sortedDate[1]);

      if (sortedDate && sortedDate.length > 1) {
        const firstSortDateItem = sortedDate[1]?.matchDay || '';
        setDetails(firstSortDateItem);
        setActiveDay(firstSortDateItem);
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  }

  const viewDetails = (i: string) => {
    setDetails(i);
    setActiveDay(i);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, `${pathName}`), (snapshot) =>
      setLiga(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }) as unknown as QueueDetailsFirebase))
    );
    return unsubscribe;
  }, [pathName]);

  const teamResults = actualData?.leagueDetails.forEach(({ details }) =>
    details.forEach(({ team, result }) =>
      Liga.forEach(({ guest, host, guestScore, hostScore }) => {
        if (guest === team) {
          result.push(guestScore);
        } else if (host === team) {
          result.push(hostScore);
        }
      })
    )
  );

  return { fetchData, actualData, Liga, currentInfo, details, activeDay, viewDetails };
}

export default useFetchHook;
