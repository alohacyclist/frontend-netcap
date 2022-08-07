import { useState } from "react";
import { ScheduleSlider } from "../components/Elements/ScheduleSlider";
import { TopButtons } from "../components/Elements/TopButtons";
import { Filter } from "../components/Filter/Filter";
import { ResultContainer } from "../components/Results/ResultContainer";

export function Results() {
  const [resultType, setResultType] = useState('')
  const [openFilter, setOpenFilter] = useState(false)

  const switchInstructorsAndSchedule = (value) => {
    return setResultType(value)
  }

  return (
    <div>
        <TopButtons
        topLeftButtonText={'Schedule'}
        topCenterButtonText={'Instructors'}
        topRightButtonText={'Filter'}

        setOpenFilter={setOpenFilter}
        openFilter={openFilter}
        switchResults={switchInstructorsAndSchedule}

        />
        <ScheduleSlider />

        {openFilter ? 
          <Filter setOpenFilter={setOpenFilter} openFilter={openFilter}/> :
          <>
            <ResultContainer type={resultType}/>
            <ResultContainer type={resultType}/>
            <ResultContainer type={resultType}/>
          </>
        }

    </div>
  )
}
