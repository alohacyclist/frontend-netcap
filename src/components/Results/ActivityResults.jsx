import { TagSlider } from "../Elements/TagSlider";

export function ActivityResults() {

  return (
    <div className="w-screen">

        <div className="flex justify-between" >
          <h4>TIME</h4><small>HERE</small>
        </div>

      <div className="flex">

      <div className="flex-none w-[150px]">
          <img
          src={'https://media.istockphoto.com/id/1064888030/de/foto/portr%C3%A4t-des-paares-im-skiurlaub.webp?s=612x612&w=is&k=20&c=JNmjW8cMFjangnJVbd_hOAdCXnNaChgMEGViNraAVE0='}
          alt='ski-couple'
          />
        </div>

        <div className="w-screen">

          <div className="flex justify-between">
            <h4 className="text-sm">Activity_NAME</h4><small>PRICE <b>pp</b></small>
          </div>

            <a 
            className="text-sm underline text-[10px]"
            href="/team"
            >
            with INSTRUCTOR
            </a>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <small className="text-[10px]">LOCATION</small>
              <small className="text-[10px]">OPEN_SPACES</small>
            </div>
            <button className="p-1 bg-blue-400 rounded-full w-16 text-xs">
              Details
            </button>
          </div>

          <div className="flex flex-initial w-[200px] m-2">
          <TagSlider />
          </div>

        </div>

      </div>

    </div>
  )
}