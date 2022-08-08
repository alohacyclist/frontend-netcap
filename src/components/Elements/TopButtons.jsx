import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export function TopButtons({topLeftButtonText, topCenterButtonText, topRightButtonText, switchResults, openFilter, setOpenFilter}) {
  const [selected, setSelected] = useState(true)

  return (
    <span className="flex justify-between w-screen">
        <button 
        className={`m-4 border-2 ${selected && 'bg-lime-200'}  px-1 text-xs py-1 rounded-md`}
        disabled={selected}
        onClick={() => {
          setSelected(!selected)
          switchResults(topLeftButtonText)
        }}
        >
            <FontAwesomeIcon icon={faCalendar} className='mr-2'/>
            {topLeftButtonText}
        </button>
        <button 
        className={`m-4 border-2 ${!selected ? 'bg-lime-200' : 'border-lime-200'} px-1 text-xs py-1 rounded-md`}
        disabled={!selected}
        onClick={() => {
          setSelected(!selected)
          switchResults(topCenterButtonText)
        }}
        >
            <FontAwesomeIcon icon={faPerson} className='mr-2'/>
            {topCenterButtonText}
        </button>
        <button 
            className="m-4 bg-lime-700 px-1 text-xs py-1 rounded-md"
            onClick={() => {
              setOpenFilter(!openFilter)
              switchResults(topRightButtonText)
            }}
            style={{width: '5.625rem'}}
            >
            {topRightButtonText}
        </button>
    </span>
  )
}
