import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound, Start, Results, Team, Reviews } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Start />} />
          <Route path='/results' element={<Results />} />
          <Route path='/team' element={<Team />} />
          
          {/* REMOVE 42 */}
          <Route path=':instrucor-reviews/42' element={<Reviews />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
