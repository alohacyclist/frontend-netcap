import { TagSlider } from "../Elements/TagSlider";

export function InstructorResults() {

  const instructor = {
    'id': 42
  }

  return (
    <div className="w-screen">

        <div className="flex justify-between" >
          <h4>TIME</h4><small>HERE</small>
        </div>

      <div className="flex">

        <div className="flex-none w-[150px]">
          <img
          src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Skiguides_freeriding_in_Lech.jpg/440px-Skiguides_freeriding_in_Lech.jpg'}
          alt='skier in deep powder'
          />
        </div>

        <div className="flex flex-col w-full">

          <div className="flex justify-between">
            <h4 className="text-sm">Hans-Peter</h4><small>PRICE <b>pp</b></small>
          </div>

            <p
            className="text-sm underline text-[10px]"
            >
            *   *   *   * (<a href={`/instructor-reviews/${instructor.id}`}><b>42</b></a>)
            </p> 

          <div className="flex justify-between">
            <div className="flex flex-col">
              <small className="text-[10px]">LOCATION</small>
            </div>
            <button className="p-1 bg-blue-400 rounded-full w-16 text-xs">
              Details
            </button>
          </div>

          <div className="flex flex-initial w-[200px] mt-2">
          <TagSlider />
          </div>

        </div>

      </div>

    </div>
  )
}