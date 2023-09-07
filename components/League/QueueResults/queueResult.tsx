import React, { FC, useState } from "react";
import styles from "./queueResult.module.scss";
import { useUserContext } from "@/utils/context/AuthContext";
import QueueResultTable from "./QueueResultTable/queueResultTable";
import AnimationClassHook from "@/utils/hooks/getAnimationClass/getAnimationClass";
import useHTTPrequests from "@/utils/hooks/league/HTTPrequest";
import { QueueResultProps } from "@/types/league.types";

const QueueSchudle: FC<QueueResultProps> = ({
  findLeague,
  leaguePath,
  firebaseLeague,
  fetchData,
}) => {
  const { deleteQueue } = useHTTPrequests();
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

  const handleDeleteQueue = (id: string, leaguePath: string) => {
    deleteQueue(id, leaguePath);
    fetchData();
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
              onClick={() => handleDeleteQueue(item.id, leaguePath)}
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
