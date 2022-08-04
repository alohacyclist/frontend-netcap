import { SearchInput } from "../Search/SearchInput";
import { locations } from "../../forms/queryInputs";

export function LocationSelection({ logLocation }) {
  return (
      <SearchInput collection={locations} logLocation={logLocation} locationBtn={true} />
  );
}
