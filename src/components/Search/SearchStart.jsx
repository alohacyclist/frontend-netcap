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

export function SearchStart() {
  const [openActivities, setOpenActivities] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openDates, setOpenDates] = useState(false);

  const [selectedActivity, setSelectedActivity] = useState("Select Activity");
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedDate, setSelectedDate] = useState("Select Date");

  let btnTxt = "Done";

  const logActivitySelection = (selection) => {
    setSelectedActivity(selection);
  };

  const logLocationSelection = (selection) => {
    setSelectedLocation(selection);
  };

  const logDateSelection = (selection) => {
    setSelectedDate(selection);
  };

  return (
    <>
      <PopUp btnTxt={"Go"} headline={"Welcome"}>
        <div className='flex justify-between'>
          <button
            onClick={() => setOpenActivities(!openActivities)}
            className='border rounded-md bg-pink-400 text-slate-50 text-start w-full mr-4 px-1 py-1'
          >
            {selectedActivity}
          </button>
          <div className='flex place-items-center w-6'>
            <FontAwesomeIcon icon={faPersonSkiing} />
          </div>
        </div>
        <div className='flex justify-between'>
          <button
            onClick={() => setOpenLocation(!openLocation)}
            className='border rounded-md bg-pink-400 text-slate-50 text-start w-full mr-4 px-1 py-1'
          >
            {selectedLocation}
          </button>
          <div className='flex place-items-center w-6'>
            <FontAwesomeIcon icon={faMapLocationDot} />
          </div>
        </div>
        <div className='flex justify-between'>
          <button
            onClick={() => setOpenDates(!openDates)}
            className='border rounded-md bg-pink-400 text-slate-50 text-start w-full mr-4 px-1 py-1'
          >
            {selectedDate}
          </button>
          <div className='flex place-items-center w-6'>
            <FontAwesomeIcon icon={faCalendarDays} />
          </div>
        </div>
      </PopUp>

      {openActivities && (
        <PopUp
          close={() => setOpenActivities(!openActivities)}
          headline={""}
          btnTxt={btnTxt}
        >
          <ActivitySelection onClick={logActivitySelection} />
        </PopUp>
      )}
      {openLocation && (
        <PopUp
          close={() => setOpenLocation(false)}
          headline={""}
          btnTxt={btnTxt}
        >
          <LocationSelection onClick={logLocationSelection} />
        </PopUp>
      )}
      {openDates && (
        <PopUp close={() => setOpenDates(false)} headline={""} btnTxt={btnTxt}>
          <DateStart onClick={logDateSelection} />
        </PopUp>
      )}
    </>
  );
}
