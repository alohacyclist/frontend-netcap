import { useNavigate } from "react-router-dom"

 export function Booking() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col">
        <div>
            <button
            onClick={ () => navigate(-1)}
            >
                Back
            </button>
        </div>

        <h1>Review your booking</h1>

        <div className="flex flex-col">
            <h3>Activity with Instructor</h3>
            <h3>TIME</h3>
            <h4>LOCATION</h4>

            <select>
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

            <div>
                <p>
                    <b>Additional Info</b>
                </p>
                <small>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </small>
            </div>

            <div className="flex flex-col text-end">
                <h2>TOTAL PRICE</h2>
                <h2>XXX €</h2>
            </div>
            
            <button>
                BOOK
            </button>

        </div>
    </div>
  )
}
