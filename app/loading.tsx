// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import styles from './loading.module.scss';

// const Loading = () => {
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleStart = () => setLoading(true);
//     const handleComplete = () => setLoading(false);

//     router.events.on("routeChangeStart", handleStart);
//     router.events.on("routeChangeComplete", handleComplete);
//     router.events.on("routeChangeError", handleComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleStart);
//       router.events.off("routeChangeComplete", handleComplete);
//       router.events.off("routeChangeError", handleComplete);
//     };
//   }, []);

//   return (
//     loading && (
//
//     )
//   );
// };

// export default Loading;

export default function Loading() {
  return (
    <article className={styles.loadingContainer}>
      <div className={styles.bouncingBall} />
    </article>
  );
}
