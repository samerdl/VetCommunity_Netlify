import { Route, Routes } from "react-router-dom";
import Home from "./components/MainPage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import LoginPage from "./components/SignUpPage/LoginPage";
import MemberLogin from "./components/ExistingMemberLoginPage/ExistingMemberPage";
import "./components/MainPage/Nav.css";
import Auth from "./components/ExistingMemberLoginPage/Auth";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="MainPageDev">
        <Routes>
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ExistingMemberLogin" element={<MemberLogin />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

// Our main App component is comprised of several entities of pages, all connected through their routing,the app includes an about us pag
// sign up page, login page.
// i have yet to determine which sign up page i prefer - should it be straight forward Login/Sign up with minimal data
// or should it have extended data
