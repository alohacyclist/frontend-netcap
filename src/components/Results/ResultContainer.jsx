import { activityTags } from "../../forms/tags";

export function ResultContainer() {
  return (
    <div className="flex flex-col w-full m-2">

        <span className="flex flex-row justify-between items-end w-32">
          <h4>TIME</h4><small>HERE</small>
        </span>

      <div className="flex">
        <img
        className="w-32" 
        src={'https://media.istockphoto.com/id/1064888030/de/foto/portr%C3%A4t-des-paares-im-skiurlaub.webp?s=612x612&w=is&k=20&c=JNmjW8cMFjangnJVbd_hOAdCXnNaChgMEGViNraAVE0='}
        alt='ski-couple'
        />
        <div className="flex flex-col">
          <span className="flex justify-between">
            <h4 className="text-sm">Activity_NAME</h4><small>Activiy_PRICE <b>pp</b></small>
          </span>
          <a 
          className="text-sm"
          href="/team"
          >
          with INSTRUCTOR
          </a>
          <small className="text-xs">LOCATION</small>
          <small className="text-xs">OPEN_SPACES</small>
          {/* This should be inside scrollable component */}
          <span>
          {activityTags.map((activity) => (
            <button 
            key={activity.id}
            className="border border-spacing-2 rounded-md text-xs mx-1 p-[2px]">
              {activity.title}
            </button>
          ))}
          </span>

        </div>
      </div>

    </div>
  )
}