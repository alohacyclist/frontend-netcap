import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ScheduleSlider({dateSelected}) {
  const [day, setDay] = useState(dateSelected)
  const [today, setToday] = useState(new Date())


  return (
    <span className="flex justify-center items-center">

      <button 
        className="border rounded-full p-2 bg-violet-400"
        onClick={(e) => {
          e.preventDefault()
          setDay(today.setDate(today.getDate() - 1))
        }}
        >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

        <p 
          className="mx-4"
          onChange={(e) => {
            e.preventDefault()
            setToday(day)
          }}
          >
          {day}
        </p>

      <button 
        className="border rounded-full p-2 bg-violet-400"
        onClick={(e) => {
          e.preventDefault()
          setDay(today.setDate(today.getDate() + 1))
        }}
        >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </span>
  )
}
