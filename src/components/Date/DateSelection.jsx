import React, { useState } from 'react';
import { DateCalendar } from './DateCalendar';

export function DateSelection({ logDate }) {
  const [openCalendar, setOpenCalendar] = useState(false);

  return (
    <div>
      <h3 className="mb-4">Choose Date</h3>
      <div>
        
        <span className="flex justify-between">
          <button className="w-5/12 border rounded-md bg-green-600 px-1 py-1 text-slate-50">Any date</button>
          <button 
          className="w-5/12 border rounded-md bg-green-600 px-1 py-1 text-slate-50"
          onClick={() => setOpenCalendar(!openCalendar)}
          >
          Today
          </button>
        </span>

        <button 
        className="w-full px-1 py-1 border rounded-md bg-green-600 text-slate-50 mt-4"
        onClick={() =>setOpenCalendar(!openCalendar)}
        >
          Choose date
        </button>
      </div>
      {openCalendar && <DateCalendar logDate={logDate}/>}
    </div>
  )
}