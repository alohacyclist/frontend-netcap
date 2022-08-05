import { activityTags } from "../../forms/tags";


export function TagSlider() {
  return (
    <div className='h-7 flex flex-nowrap align-middle overflow-scroll mx-2'>
        {activityTags.map((activity) => (
        <button 
        key={activity.id}
        className="border border-spacing-2 rounded-md text-[10px] mr-1 p-[1px] h-5 whitespace-nowrap"
        >
        {activity.title}
        </button>
        ))}
</div>
  )
}


