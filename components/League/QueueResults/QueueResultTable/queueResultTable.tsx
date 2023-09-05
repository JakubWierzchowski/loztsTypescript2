import React, { FC } from "react";
import { useUserContext } from "@/utils/context/AuthContext";
import Link from "next/link";
import styles from "./queueResultTable.module.scss";
import { db } from "@/utils/firebase/firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { QueueDetailsFirebase } from "@/types/league.types";
import AnimationClassHook from "@/utils/hooks/getAnimationClass/getAnimationClass";
interface DataPropsQueueDetails {
  data: QueueDetailsFirebase[];
  leaguePath: string;
}

const LeagueSchedules: FC<DataPropsQueueDetails> = ({ data, leaguePath }) => {
  const { user } = useUserContext();

  const handleDelete = async (
    id: string,
    host: string,
    guest: string,
    guestScore: number,
    hostScore: number
  ) => {
    const docRef = doc(db, `${leaguePath}`, id);
    try {
      await deleteDoc(docRef);
      toast.success(
        `Usunieto spotkanie \n ${host}:${hostScore} vs ${guest}:${guestScore}`,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } catch (error) {
      toast.error(`Błąd przy usuwaniu dokumentu: ${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const slideInFirst = "showAnimationDelay";
  const slideInSecond = "slideOut";
  const { ref, getShowAnimationClass } = AnimationClassHook(
    slideInFirst,
    slideInSecond
  );

  return (
    <section
      ref={ref}
      className={`${styles.resultSection} ${getShowAnimationClass()}`}
    >
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <strong>L.P</strong>
            </th>
            <th className={styles.th}>
              <strong>Gospodarze</strong>
            </th>
            <th className={styles.th}>
              <strong>Goście</strong>
            </th>
            <th colSpan={2} className={styles.th}>
              <strong>Wyniki</strong>
            </th>
            <th className={styles.th}>
              <strong>Protokół</strong>
            </th>
            <th className={styles.th}>
              <strong>Usuń</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <>
            {data?.map((item, index: number) => (
              <tr key={index} className="tr">
                <td key={index} className={styles.td}>
                  {index + 1}
                </td>
                <td className={styles.td}>{item.host}</td>
                <td className={styles.td}>{item.guest}</td>
                <td className={styles.td}>{item.hostScore}</td>
                <td className={styles.td}>{item.guestScore}</td>
                <td className={styles.td}>
                  {item.img ? (
                    <Link
                      key={item.img}
                      href={item.img}
                      className={styles.links}
                      target="_blank"
                    >
                      Protokół
                    </Link>
                  ) : (
                    <div>Brak protokołu</div>
                  )}
                </td>
                <td className={styles.td}>
                  {user?.email === item.user ? (
                    <>
                      <button
                        className={styles.deleteButton}
                        key={item.id}
                        onClick={() =>
                          handleDelete(
                            item.id,
                            item.host,
                            item.guest,
                            item.hostScore,
                            item.guestScore
                          )
                        }
                      >
                        usuń
                      </button>
                    </>
                  ) : (
                    <div>Brak dostępu</div>
                  )}
                </td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </section>
  );
};

export default LeagueSchedules;
