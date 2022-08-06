import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faMapLocationDot,
  faPersonSkiing,
} from "@fortawesome/free-solid-svg-icons";
import { PopUp } from "../PopUp";
import { ActivitySelection } from "../Activity/ActivitySelection";
import { LocationSelection } from "../Location/LocationSelection";
import { DateStart } from "../Date/DateStart";
import { useNavigate } from "react-router-dom";

export function SearchStart() {
  const [openActivities, setOpenActivities] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openDates, setOpenDates] = useState(false);
  const [headline, setHeadline] = useState('Welcome');
  const navigate = useNavigate()

  const [selectedActivity, setSelectedActivity] = useState("Select Activity");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedDate, setSelectedDate] = useState("Select Date");

  let btnTxt = "Done";

  const logActivitySelection = (description, selection) => {
    setSelectedActivity(selection);
    localStorage.setItem(`${description}`, selection)
  };

  const logLocationSelection = (description, selection) => {
    setSelectedLocation(selection);
    localStorage.setItem(`${description}`, selection)
  };

  const logDateSelection = (description, selection) => {
    setSelectedDate(selection);
    localStorage.setItem(`${description}`, selection)
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit and send filtered request to Results Page and Component')
    navigate('/results')
  }

  return (
    <>
      <PopUp headline={headline} showBtn={true}>
        <form>
        <div className='flex justify-between my-3'>
          <input
            onClick={() => {
              setOpenActivities(true)
              setHeadline('')
            }}
            className='border rounded-md bg-pink-400 text-slate-50 text-start w-full mr-4 px-1 py-1'
            value={selectedActivity}
            onChange={() => console.log('form change')}            
          >
          </input>
          <div className='flex place-items-center w-6'>
            <FontAwesomeIcon icon={faPersonSkiing} />
          </div>
        </div>
        <div className='flex justify-between my-3'>
          <input
            onClick={() => {
              setOpenLocation(true)
              setHeadline('')
            }}
            className='border rounded-md bg-pink-400 text-slate-50 text-start w-full mr-4 px-1 py-1'
            value={selectedLocation}
            onChange={() => console.log('form change')}
          >
          </input>
          <div className='flex place-items-center w-6'>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </div>
        </div>
        <div className='flex justify-between my-3'>
          <input
            onClick={() => {
              setOpenDates(true)
              setHeadline('')
            }}
            className='border rounded-md bg-pink-400 text-slate-50 text-start w-full mr-4 px-1 py-1'
            value={selectedDate}
            onChange={() => console.log('form change')}
          >
          </input>
          <div className='flex place-items-center w-6'>
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
        </div>

        <button
          className='border rounded-md bg-green-400 text-slate-50 px-1 py-1 my-3 w-full'
          onClick={handleSubmit}
          >
          GO
        </button>

        </form>
      </PopUp>

      {openActivities && (
        <PopUp
          close={() => {
            setOpenActivities(!openActivities)
            setHeadline('Welcome')
          }}
          headline={"Select Activity"}
          btnTxt={btnTxt}
          submitBtn={false}
        >
          <ActivitySelection logActivity={logActivitySelection} />
        </PopUp>
      )}
      {openLocation && (
        <PopUp
          close={() => {
            setOpenLocation(!openLocation)
            setHeadline('Welcome')
          }}
          headline={"Search by Location"}
          btnTxt={btnTxt}
        >
          <LocationSelection logLocation={logLocationSelection} />
        </PopUp>
      )}
      {openDates && (
        <PopUp 
          close={() => {
            setOpenDates(!openDates)
            setHeadline('Welcome')
          }}
          headline={"Choose Date & Time"}
          btnTxt={btnTxt}
          >
          <DateStart logDate={logDateSelection} />
        </PopUp>
      )}
    </>
  );
}
