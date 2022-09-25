import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import FormikBasic from "../03-forms/pages/FormikBasic";
import RegisterPage from "../03-forms/pages/RegisterPage";
import "../03-forms/styles/styles.css";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/register">register</NavLink>
            </li>
            <li>
              <NavLink to="/formik">Formik</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/formik" element={<FormikBasic />}></Route>
          <Route path="/" element={<div>Home</div>}></Route>
        </Routes>
      </div>
    </Router>
  );
};
