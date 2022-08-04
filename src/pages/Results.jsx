import { ScheduleSlider } from "../components/Elements/ScheduleSlider";
import { TopButtons } from "../components/Elements/TopButtons";

export function Results() {

  return (
    <div>
        <TopButtons
        topLeftButtonText={'Schedule'}
        topCenterButtonText={'Instructors'}
        topRightButtonText={'Filter'}
        />
        <ScheduleSlider />
    </div>
  )
}
