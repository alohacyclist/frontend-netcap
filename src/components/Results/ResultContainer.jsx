import { ActivityResults } from "./ActivityResults";
import { InstructorResults } from "./InstructorResults";

export function ResultContainer({ type }) {

  return (
    <>
      {type === 'Instructors' ?
        <InstructorResults /> :
        <ActivityResults showDetailsOrBookBtn={'Details'}/>
    }
    </>
  )
}