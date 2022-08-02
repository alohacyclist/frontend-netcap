import { useState } from 'react';
import DatePicker, {CalendarContainer} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export function DateCalendar({click}) {
  const [startDate, setStartDate] = useState(new Date());

  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  const selector = (selection) => {
    click(selection.toLocaleDateString(navigator.language, options));
    console.log(selection.toLocaleDateString(navigator.language, options))
  };

/*   const MyContainer = ({ children }) => {
    return (
      <div className='w-full, bg-yellow-200'>
        <CalendarContainer>
          {children}
        </CalendarContainer>
      </div>
    );
  }; */

return <DatePicker
  todayButton="Today"
  selected={startDate}
  onChange={(date) => {
    setStartDate(date)
    selector(date)
  }}
  dateFormat="dd.MM.yyyy"
  withPortal
  /* inline */
  /* calendarContainer={MyContainer} */
  />
}

