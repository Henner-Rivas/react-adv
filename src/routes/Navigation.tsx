import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import LazyPage1 from "../lazyload/pages/LazyPage1";

import logo from "../logo.svg";
import LazyPage2 from "../lazyload/pages/LazyPage2";
import LazyPage3 from "../lazyload/pages/LazyPage3";

export const Navigation = () => {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<LazyPage1 />} />
          <Route path="/about" element={<LazyPage2 />} />
          <Route path="/users" element={<LazyPage3 />} />
          <Route path="*" element={<Navigate to="/"></Navigate>} />
        </Routes>
      </div>
    </>
  );
};
