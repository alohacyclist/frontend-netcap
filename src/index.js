import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound, Start, Results, Team, Reviews } from "./pages";
import { Booking } from "./pages/Booking";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Start />} />
          <Route path='/results' element={<Results />} />
          <Route path='/team' element={<Team />} />
          <Route path='/booking' element={<Booking />} />
          
          {/* REMOVE 42 */}
          <Route path=':instrucor-reviews/42' element={<Reviews />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
