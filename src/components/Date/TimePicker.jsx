import { useState } from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker'

export function TimePicker() {
  const [startDate, setStartDate] = useState(new Date());

  const MyContainer = ({ children }) => {
    return (
        <CalendarContainer>
          {children}
        </CalendarContainer>
    );
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={30}
      timeCaption="Time"
      dateFormat="hh:mm aa"
      withPortal
      calendarContainer={MyContainer}
    />
  )
}
