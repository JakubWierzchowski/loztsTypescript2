// // "use client";
// // import newArticleData from "@/data/article.json";
// // import { useState, useEffect } from "react";
// // import { Article } from "@/types/article.type";
// // function FetchDataHook() {
// //   const data: Article[] = newArticleData;
// //   const [newArticle, setNewArticle] = useState<Article[]>(data);
// //   const [currentInfo, setCurrentInfo] = useState<Article>({} as Article);

// //   async function fetchData() {
// //     try {
// //       const response = await fetch(`/api/newList`);
// //       const data = await response.json();

// //       const sortedData = [data].sort((a, b) =>
// //         a.sortDate > b.sortDate ? -1 : 0
// //       );

// //       setNewArticle(sortedData);
// //       setCurrentInfo(sortedData[0]);
// //     } catch (error) {
// //       console.error("Wystąpił błąd z pobieraniem danych", error);
// //     }
// //   }

// //   const handleOpenInfo = (item: Article) => {
// //     setCurrentInfo(item);
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, [newArticle]);
// //   return { newArticle, currentInfo, handleOpenInfo, fetchData };
// // }

// // export default FetchDataHook;

// import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

// const useCallbackRef = (callback) => {
//   const callbackRef = useRef(callback);
//   useLayoutEffect(() => {
//     callbackRef.current = callback;
//   }, [callback]);
//   return callbackRef;
// };

// export const useFetch = (options) => {
//   const [data, setData] = useState(null);

//   const savedOnSuccess = useCallbackRef(options.onSuccess);

//   useEffect(() => {
//     console.log("useFetch useEffect ");
//     if (options.url) {
//       let isCancelled = false;
//       fetch(options.url)
//         .then((response) => response.json())
//         .then((json) => {
//           if (!isCancelled) {
//             savedOnSuccess.current?.(json);
//             setData(json);
//           }
//         });
//       return () => {
//         isCancelled = true;
//       };
//     }
//   }, [options.url]);

//   return {
//     data,
//   };
// };
