import { useState } from 'react'
import { TimePicker } from './TimePicker'

export function TimeSelection() {
  const [openTimePicker, setOpenTimePicker] = useState(false)

  return (
    <div>
      <h3 className="mb-4">Choose Time</h3>
      <div>
        <span className="flex justify-between">
          <button className="w-5/12 border rounded-md bg-green-600 px-1 py-1 text-slate-50">Any time</button>
          <button className="w-5/12"></button>
        </span>
        <button 
        className="w-full px-1 py-1 border rounded-md bg-green-600 text-slate-50 mt-4"
        onClick={() => setOpenTimePicker(!openTimePicker)}
        >
          Choose time
        </button>
      </div>
      {openTimePicker && <TimePicker />}
    </div>
    )
}
