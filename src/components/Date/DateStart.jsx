import { DateSelection } from "./DateSelection";
import { TimeSelection } from "./TimeSelection";

export function DateStart({ logDate }) {
  return (
    <div className="flex flex-col gap-y-5">
        <DateSelection logDate={logDate}/>
        <TimeSelection/>
    </div>
  )
}
