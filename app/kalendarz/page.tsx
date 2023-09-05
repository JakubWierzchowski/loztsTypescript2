import CalendarDetails from "../../components/Calendar/CalendarDetails";
import moment from "moment";
import CalendarDate from "../../data/calendarDate.json";
import { CalendarTypeMonth } from "@/types/calendar.type";

export default async function Calendar() {
  const data: CalendarTypeMonth[] = CalendarDate;
  const myDate = moment().format("YYYY-MM-DD");
  return (
    <>
      {data?.map((item, index) => (
        <section key={index}>
          {moment(item.dataMonth).isAfter(myDate) ? (
            <CalendarDetails
              details={item.details}
              index={index}
              month={item.month}
            />
          ) : null}
        </section>
      ))}
    </>
  );
}
