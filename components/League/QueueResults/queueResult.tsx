import React, { FC, useState, useEffect } from "react";
import { toast } from "react-toastify";
import styles from "./queueResult.module.scss";
import { useUserContext } from "@/utils/context/AuthContext";
import { LeagueDataItem } from "@/types/league.types";
import QueueResultTable from "./QueueResultTable/queueResultTable";
import { QueueDetails } from "@/types/league.types";
import AnimationClassHook from "@/utils/hooks/getAnimationClass/getAnimationClass";
interface QueueResultProps {
  leaguePath: string;
  findLeague: LeagueDataItem | undefined;
  firebaseLeague: any;
  fetchData: () => void;
}

const QueueSchudle: FC<QueueResultProps> = ({
  findLeague,
  leaguePath,
  firebaseLeague,
  fetchData,
}) => {
  const { user } = useUserContext();
  const sortDate = findLeague?.queueDetails.sort((a, b) =>
    a.day > b.day ? -1 : 0
  );

  const firstSortDateItem = sortDate ? sortDate[0]?.matchDay : "";
  const [details, setDetails] = useState(firstSortDateItem);
  const [activeDay, setActiveDay] = useState(firstSortDateItem);
  if (!findLeague) {
    return <div>Loading...</div>;
  }

  const viewDetails = (i: string) => {
    setDetails(i);
    setActiveDay(i);
  };

  const filteredData = firebaseLeague.filter(
    (item: any) => item.queueNumber === details
  );

  console.log(firebaseLeague);

  const deleteQueue = async (id: string, leaguePath: string) => {
    try {
      const reqBody = {
        id,
        leaguePath,
      };
      const response = await fetch(`/api/allLeague/${leaguePath}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(reqBody),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      fetchData();
      toast.success(
        `${data.message} - ${data.deleteQueue.map((item: QueueDetails[]) =>
          item.map((item) => item.matchDay)
        )}`,
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
    } catch (error: any) {
      console.error(error);
      if (error.message === "Error: 409") {
        console.log(error);
      }
    }
  };

  const slideInFirst = "showAnimationDelay";
  const slideInSecond = "slideOut";
  const { ref, getShowAnimationClass } = AnimationClassHook(
    slideInFirst,
    slideInSecond
  );
  return (
    <section className={styles.details}>
      {sortDate?.map((item, index) => (
        <div
          ref={ref}
          key={index}
          className={`${styles.centerItems} ${getShowAnimationClass()}`}
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <div
            className={`${styles.matchDay} ${
              activeDay === item.matchDay ? styles.active : ""
            }`}
            onClick={() => viewDetails(item.matchDay)}
          >
            {item.matchDay}
          </div>
          {user?.email === "lozts1937@gmail.com" ? (
            <button
              className={styles.deleteButton}
              key={item.id}
              onClick={() => deleteQueue(item.id, leaguePath)}
            >
              Usuń kolejkę
            </button>
          ) : null}
        </div>
      ))}
      <QueueResultTable data={filteredData} leaguePath={leaguePath} />
    </section>
  );
};

export default QueueSchudle;
