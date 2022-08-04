import { ScheduleSlider } from "../components/Elements/ScheduleSlider";
import { TopButtons } from "../components/Elements/TopButtons";
import { ResultContainer } from "../components/Results/ResultContainer";

export function Results() {

  return (
    <div>
        <TopButtons
        topLeftButtonText={'Schedule'}
        topCenterButtonText={'Instructors'}
        topRightButtonText={'Filter'}
        />
        <ScheduleSlider />

        <ResultContainer />
        <ResultContainer />
        <ResultContainer />
        <ResultContainer />
        <ResultContainer />
        <ResultContainer />
    </div>
  )
}
