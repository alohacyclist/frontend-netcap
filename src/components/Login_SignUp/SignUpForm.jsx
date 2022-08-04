import { useState } from "react";
import { PopUp } from "../PopUp";
import { userInputs } from "../../forms/userInputs";

export function SignUpForm({ close }) {
  const [data, setData] = useState({});

  let btnTxt = "Register";

  const handleInput = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  return (
    <div>
      <PopUp close={close} btnTxt={btnTxt} z={"z-10"}>
        {userInputs.map((input) => (
          <div key={input.id}>
            <label>{input.label}</label>
            <input
              className='w-full my-2 border'
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleInput}
            />
          </div>
        ))}
      </PopUp>
    </div>
  );
}
