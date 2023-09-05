// "use client";
// import { useState, useEffect } from "react";
// import { LeagueDataItem } from "@/types/league.types";
// import LeagueData from "@/data/league.json";
// function FetchHook(initialPathName: string) {
//   const [pathName, setPathName] = useState(initialPathName);
//   const data: LeagueDataItem[] | LeagueDataItem = LeagueData;
//   const findLeague = data?.find((item) => item.league === pathName);

//   const [actualData, setActualData] = useState(findLeague);

//   async function fetchData() {
//     try {
//       const response = await fetch(`/api/allLeague/${pathName}`);
//       const data = await response.json();

//       setActualData(data);
//     } catch (error) {
//       console.error("Wystąpił błąd podczas pobierania danych:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return { fetchData, actualData };
// }

// export default FetchHook;
