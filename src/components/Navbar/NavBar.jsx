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
      <nav className='flex justify-between items-center h-14 bg-pink-500'>
        <Link className='flex' to={"/"}>
          <h1 className='mr-4 ml-2'>NetCap</h1>
          <h2>
            <FontAwesomeIcon icon={faPersonSkiing} />
          </h2>
        </Link>

        <span className='flex'>
          <select className='mr-2 border rounded-md px-1 py-1'>
            <option>Dutch</option>
            <option>English</option>
            <option>French</option>
            <option>German</option>
            <option>Italian</option>
          </select>

          <button
            className='flex px-5 py-1 border bg-sky-400 rounded-md cursor-pointer'
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
