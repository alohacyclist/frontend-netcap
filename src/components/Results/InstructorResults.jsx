import { TagSlider } from "../Elements/TagSlider";

export function InstructorResults() {

  const instructor = {
    'id': 42
  }

  return (
    <div className="flex flex-col h-auto">

        <div className="flex justify-between" >
          <h4>TIME</h4><small>HERE</small>
        </div>

      <div className="flex justify-between">

        <div className="w-full flex">
          <img
          className="h-auto w-auto"
          src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Skiguides_freeriding_in_Lech.jpg/440px-Skiguides_freeriding_in_Lech.jpg'}
          alt='skier in deep powder'
          />
        </div>

        <div className="w-screen">

          <div className="flex justify-between">
            <h4 className="text-sm">Hans-Peter</h4><small>Activiy_PRICE <b>pp</b></small>
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

          <TagSlider />

        </div>

      </div>

    </div>
  )
}