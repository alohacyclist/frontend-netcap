import { useNavigate } from "react-router-dom"

 export function Booking() {
    const navigate = useNavigate()

  return (
    <>
    <div className="self-start m-4">
        <button
        className=" bg-purple-300 rounded-md py-1 px-2 "
        onClick={ () => navigate(-1)}
        >
            Back
        </button>
    </div>

    <div className="flex flex-col w-screen m-auto px-4">


        <div className="flex flex-col gap-5">

        <h1 className="mt-10 text-3xl">Review your booking</h1>

        <div>
            <h2><b>Activity with Instructor</b></h2>
            <h4><b>TIME</b></h4>
            <h4>LOCATION</h4>
        </div>
            
        <div className="flex flex-col w-full">
            <h4><b>Participants</b></h4>
            <select className="w-full bg-slate-300 rounded-full p-3">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
        </div>

        <div>
            <p>
                <b>Additional Info</b>
            </p>
            <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore 
                et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, 
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                invidunt ut labore et dolore magna aliquyam erat.
            </small>
        </div>

        <div className="flex flex-col text-end">
            <h2>TOTAL PRICE</h2>
            <h2>XXX €</h2>
        </div>

        <button className="w-full bg-blue-200 rounded-full p-3">
            BOOK
        </button>

        </div>

    </div>
    </>
  )
}
