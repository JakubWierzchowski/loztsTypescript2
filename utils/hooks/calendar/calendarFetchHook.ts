import { useState, useEffect } from 'react';
import { CalendarTypeMonth, CalendarTypeDetails } from '@/types/calendar.type';
import CalendarDate from '@/data/calendarDate.json';
export const useFetchCalendar = (pathTournament: string) => {
  const data: CalendarTypeMonth[] = CalendarDate;
  const findTournaments: (CalendarTypeDetails | undefined)[] = data.map((item) =>
    item.details.find((tournament) => tournament.link === pathTournament)
  );
  const [actualData, setActualData] = useState(findTournaments);

  const filteredTournaments: CalendarTypeDetails[] = actualData.filter(
    (item): item is CalendarTypeDetails => item !== undefined
  );

  const title = actualData.find((item) => item?.title);

  async function fetchData() {
    try {
      const response = await fetch(`/api/calendar/${pathTournament}`);
      const data = await response.json();
      setActualData(data);
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return {
    actualData,
    title,
    fetchData,
    filteredTournaments,
  };
};
