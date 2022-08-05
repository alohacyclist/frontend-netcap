/* import '../styles/navbar.css' */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonSkiing } from "@fortawesome/free-solid-svg-icons";
import { SignUpForm } from "../Login_SignUp/SignUpForm";

export function NavBar() {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <nav className='flex  w-auto justify-between items-center h-14 bg-pink-500 text-sm'>
        <Link className='flex' to={"/"}>
          <h1 className='mx-4'>NetCap</h1>
          <h2>
            <FontAwesomeIcon icon={faPersonSkiing} />
          </h2>
        </Link>

        <span className='flex mr-4'>
          <select 
            className='mr-2 border rounded-md px-1' 
            style={{width: '5.625rem'}}
            >
            <option>Dutch</option>
            <option>English</option>
            <option>French</option>
            <option>German</option>
            <option>Italian</option>
          </select>

          <button
            className='border bg-sky-400 rounded-md cursor-pointer text-center py-1'
            style={{width: '5.625rem'}}
            onClick={() => setOpenLogin(!openLogin)}
          >
            Login
          </button>
        </span>
      </nav>

      {openLogin && <SignUpForm close={() => setOpenLogin(!openLogin)} />}
    </>
  );
}
