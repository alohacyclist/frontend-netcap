import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ScheduleSlider() {
  const [startDate, setStartDate] = useState(new Date())
  const [displayDate, setDisplayDate] = useState(()=> typeof(startDate) === 'object' ? startDate.toLocaleDateString() : startDate )

  return (
    <span className="flex justify-center items-center w-screen">

      <button 
        className="border rounded-full w-12 py-1 mx-3 bg-violet-400"
        onClick={(e) => {
          e.preventDefault()
          setDisplayDate(startDate.setDate(startDate.getDate() - 1))
        }}
        >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
        {typeof(displayDate) === 'number' ? new Date(displayDate).toLocaleDateString() : displayDate}
      <button 
        className="border rounded-full w-12 py-1 mx-3 bg-violet-400"
        onClick={(e) => {
          e.preventDefault()
          setDisplayDate(startDate.setDate(startDate.getDate() + 1))
        }}
        >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </span>
  )
}
