import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";

import { routes } from "./routes";
export const Navigation = () => {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map((route, i) => (
              <li key={route.name}>
                <NavLink to={route.to}>{route.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.map((route, i) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.Component />}
            />
          ))}
          <Route path="*" element={<Navigate to="/"></Navigate>} />
        </Routes>
      </div>
    </>
  );
};
