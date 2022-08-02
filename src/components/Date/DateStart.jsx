import { DateSelection } from "./DateSelection";
import { TimeSelection } from "./TimeSelection";

export function DateStart({ onClick }) {
  return (
    <div className="flex flex-col gap-y-5">
        <DateSelection click={onClick}/>
        <TimeSelection/>
    </div>
  )
}
