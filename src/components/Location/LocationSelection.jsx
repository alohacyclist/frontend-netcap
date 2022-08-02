import { SearchInput } from "../Search/SearchInput";
import { locations } from "../../forms/queryInputs";

export function LocationSelection({ onClick }) {
  return (
    <div className='selection-container'>
      <SearchInput collection={locations} click={onClick} />
    </div>
  );
}
