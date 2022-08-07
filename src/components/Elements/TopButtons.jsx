import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPerson } from "@fortawesome/free-solid-svg-icons";


export function TopButtons({topLeftButtonText, topCenterButtonText, topRightButtonText, switchResults, openFilter, setOpenFilter}) {

  return (
    <span className="flex justify-between w-screen">
        <button 
        className="m-4 border-2 border-lime-200 px-1 text-xs py-1 rounded-md"
        onClick={() => switchResults(topLeftButtonText)}
        >
            <FontAwesomeIcon icon={faCalendar} className='mr-2'/>
            {topLeftButtonText}
        </button>
        <button 
        className="m-4 border-2 border-lime-200 rounded-md px-1 text-xs py-1"
        onClick={() => switchResults(topCenterButtonText)}
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
