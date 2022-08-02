import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Navbar/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
