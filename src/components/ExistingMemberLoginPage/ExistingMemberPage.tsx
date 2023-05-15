import NavBar from "../MainPage/NavBar";
import LogoDisplay from "../MainPage/Logo";
import InfoHomePage from "../MainPage/InfoHomePage";
import "./ExistingMemberCss.css";
import LoginMe from "./LoginMe";

const MemberLogin = () => {
  return (
    <div>
      <div key={1}>
        <NavBar></NavBar>
      </div>
      <div key={2}>
        <LogoDisplay></LogoDisplay>
        <InfoHomePage></InfoHomePage>
      </div>
      <div key={3}>
        <LoginMe></LoginMe>
      </div>
    </div>
  );
};

export default MemberLogin;

// Existing Member Login Page Componenet
