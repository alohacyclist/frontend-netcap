import { useState } from "react";
import { ScheduleSlider } from "../components/Elements/ScheduleSlider";
import { TopButtons } from "../components/Elements/TopButtons";
import { ResultContainer } from "../components/Results/ResultContainer";

export function Results() {
  const [resultType, setResultType] = useState('')

  const switchInstructorsAndSchedule = (value) => {
    return setResultType(value)
  }

  return (
    <div>
        <TopButtons
        topLeftButtonText={'Schedule'}
        topCenterButtonText={'Instructors'}
        topRightButtonText={'Filter'}

        switchResults={switchInstructorsAndSchedule}
        />
        <ScheduleSlider />

        <ResultContainer type={resultType}/>
        <ResultContainer type={resultType}/>
        <ResultContainer type={resultType}/>

    </div>
  )
}
