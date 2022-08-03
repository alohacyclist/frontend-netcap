import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";


export function TopButtons({topLeftButtonText, topCenterButtonText, topRightButtonText}) {
  return (
    <span className="flex justify-between">
        <button className="m-4 border-2 border-lime-200 px-1 text-xs py-1 rounded-md">
            <FontAwesomeIcon icon={faCalendar} className='mr-2'/>
            {topLeftButtonText}
        </button>
        <button className="m-4 border-2 border-lime-200 rounded-md px-1 text-xs py-1">
            <FontAwesomeIcon icon={faPerson} className='mr-2'/>
            {topCenterButtonText}
        </button>
        <button 
            className="m-4 bg-lime-700 px-1 text-xs py-1 rounded-md"
            style={{width: '5.625rem'}}
            >
            {topRightButtonText}
        </button>
    </span>
  )
}
