import { Link } from "react-router-dom";
import "./Nav.css";

interface NavBarProps {
  page: "/AboutPage" | "/LoginPage" | "/";
  title: "About us" | "Login / Sign up" | "Home";
}

const NavBar = () => {
  return (
    <div className="Nav">
      <Link to="/AboutPage" className="NavBarFont">
        About Us
      </Link>
      <Link to="/" className="NavBarFont">
        Home
      </Link>
      <div>
        <Link to="/LoginPage" className="NavBarFont">
          {" "}
          Sign up /{" "}
        </Link>
        <Link to="/ExistingMemberLogin" className="NavBarFont">
          {" "}
          Log in
        </Link>
      </div>
    </div>
  );
};
export default NavBar;

// Nav Bar directing and re-directing the 4 main pages.
