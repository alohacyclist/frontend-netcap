import { activityInputs } from "../../forms/queryInputs";
import { SearchInput } from "../Search/SearchInput";
import { useState } from "react";

export function ActivitySelection({ onClick }) {
  /* const [options, setOptions] = useState(true) */

  return (
    <div className='selection-container'>
      <SearchInput collection={activityInputs} click={onClick} />
      {/* <h3>Popular Activities</h3>
      {activityInputs.map((input) => (
                    <div className='radio-selection' key={input.id}>
                        <label>{input.name}</label>
                        <input
                        id={input.id}
                        type={input.type}
                        name='activity'
                        value={input.name}
                        />
                    </div>
            ))} */}
    </div>
  );
}
