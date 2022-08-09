import { useNavigate } from "react-router-dom"
import { ScheduleSlider } from "../Elements/ScheduleSlider"
import { ActivityResults } from "../Results/ActivityResults"

export default function AboutActivity() {
    const navigate = useNavigate()

  return (
    <div>
        <button 
        className={`m-4 border-2 bg-blue-700 px-3 text-xs py-1 rounded-md`}
        onClick={() => {
          navigate(-1)
        }}
        >
            Back
        </button>
        <div
        className="flex flex-col items-center m-auto"
        >
            <img
            className="w-[200px] mb-4"
            src="https://www.hey-dresden.de/wp-content/uploads/2016/03/Fichtelberg-IMG32881.jpg"
            alt="Ski track with skiers"
            />
            <h1><b>About the activity</b></h1>
            <p
            className="mx-16 text-center mt-4"
            >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
             sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
             Neque porro quisquam est.
            </p>

            <div
            className="my-4 p-4 bg-green-300"
            >
              <ScheduleSlider/>
            </div>
              
            <ActivityResults showDetailsOrBookBtn={'Book'}/>

        </div>
    </div>
  )
}
