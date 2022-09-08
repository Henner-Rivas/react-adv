import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import LazyPage3 from "../pages/LazyPage3";
import LazyPage4 from "../pages/LazyPage4";

const LazyLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy2</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPage3 />} />
        <Route path="lazy2" element={<LazyPage4 />} />
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
