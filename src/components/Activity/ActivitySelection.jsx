import { activityInputs } from "../../forms/queryInputs";
import { SearchInput } from "../Search/SearchInput";

export function ActivitySelection({ logActivity }) {

  return (
      <SearchInput collection={activityInputs} logActivity={logActivity} />
  );
}
