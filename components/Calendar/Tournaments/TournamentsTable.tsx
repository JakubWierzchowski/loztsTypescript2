import React from 'react';
import styles from '../table.module.scss';
import { CalendarTournamentProps } from '@/types/calendar.type';
import { useUserContext } from '@/utils/context/AuthContext';
import AnimationClassHook from '@/utils/hooks/getAnimationClass/getAnimationClass';
import useHTTPrequests from '@/utils/hooks/calendar/httpRequestCalendar';
const TournamentsTable: React.FC<CalendarTournamentProps> = ({
  details,
  title,
  timeDone,
  pathTournament,
  index,
  fetchData,
}) => {
  const { user } = useUserContext();
  const { deletePlayer } = useHTTPrequests();

  const { ref, getAnimationClass } = AnimationClassHook('slideIn', 'slideOut');

  const handleDeletePlayer = (id: string) => {
    deletePlayer(id, pathTournament);
    fetchData();
  };

  return (
    <section className={`${styles.wrapper} ${getAnimationClass(index || 0)}`} ref={ref}>
      <h2 className={styles.tableTitle}>{title}</h2>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>
              <strong>L.P</strong>
            </th>
            <th className={styles.th}>
              <strong>Zawodnik</strong>
            </th>
            <th className={styles.th}>
              <strong>Klub</strong>
            </th>
            <th className={styles.th}>
              <strong>Dodano</strong>
            </th>

            <th className={styles.th}>
              <strong>Usuń</strong>
            </th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {details?.map((item, index: number) => (
            <tr key={index} className={styles.tr}>
              <td className={styles.td}>{index + 1}</td>
              <td className={styles.td}>{item.player}</td>
              <td className={styles.td}>{item?.club} </td>
              <td className={styles.td}>{item?.timeadd} </td>
              <td className={styles.td}>
                {timeDone ? (
                  <div>Czas minął</div>
                ) : user?.email === item.users ? (
                  <button className={styles.deleteButton} onClick={() => item.id && handleDeletePlayer(item.id)}>
                    Usuń
                  </button>
                ) : (
                  <div>Brak dostępu</div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TournamentsTable;
