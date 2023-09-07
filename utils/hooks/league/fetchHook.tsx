"use client";
import { useState, useEffect } from "react";
import { TeamData, LeagueDataItem } from "@/types/league.types";
import LeagueData from "@/data/league.json";
import db from "@/utils/firebase/firebase-config";
import { onSnapshot, collection } from "firebase/firestore";
function useFetchHook(initialPathName: string) {
  const [pathName, setPathName] = useState(initialPathName);
  const [Liga, setLiga] = useState<TeamData[]>([]);
  const data: LeagueDataItem[] | LeagueDataItem = LeagueData;
  const findLeague = data?.find((item) => item.league === pathName);

  const [actualData, setActualData] = useState(findLeague);

  async function fetchData() {
    try {
      const response = await fetch(`/api/allLeague/${pathName}`);
      const data = await response.json();

      setActualData(data);
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania danych:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, `${pathName}`), (snapshot) =>
      setLiga(
        snapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as unknown as TeamData)
        )
      )
    );
    return unsubscribe;
  }, [pathName]);

  const roundItemLenght = actualData?.queueDetails?.length || 0;
  actualData?.leagueDetails?.forEach(({ details }) =>
    details.forEach(({ team, result }) => {
      const filteredLiga = Liga.filter(({ guest }) => guest === team);
      if (filteredLiga.length > 0) {
        result.splice(0, roundItemLenght);
      }
    })
  );

  actualData?.leagueDetails.forEach(({ details }) =>
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

  const itemWyniki = actualData?.leagueDetails.map(({ details }) =>
    details.map(({ wyniki }) => wyniki.length)
  );

  const itemResult = actualData?.leagueDetails.map(({ details }) =>
    details.map(({ result }) => result.length)
  );

  if (itemWyniki && itemResult && itemWyniki.length === itemResult.length) {
    itemWyniki.forEach((item, index) => {
      if (item < itemResult[index]) {
        actualData?.leagueDetails[index]?.details.forEach((detail) => {
          detail.result.forEach((result) => {
            if (result >= 5) {
              detail.wyniki.push(result > 5 ? 2 : 1);
            } else {
              detail.wyniki.push(0);
            }
          });
        });
      } else {
        itemWyniki[index]?.pop();
      }
    });
  }

  const calculateSum = (arr: number[]): number =>
    arr.reduce((acc, el) => acc + el, 0);

  actualData?.leagueDetails.forEach(({ details }) => {
    details.forEach((item) => {
      item.resultSum = calculateSum(item.result);
      item.wynikiSum = calculateSum(item.wyniki);
    });

    details.sort((a, b) => b.resultSum! - a.resultSum!);
    details.sort((a, b) => b.wynikiSum! - a.wynikiSum!);
  });

  return { fetchData, actualData, Liga };
}

export default useFetchHook;
