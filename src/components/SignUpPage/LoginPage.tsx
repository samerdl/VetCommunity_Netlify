import NavBar from "../MainPage/NavBar";
import LogoDisplay from "../MainPage/Logo";
import InfoHomePage from "../MainPage/InfoHomePage";
import Form from "./Form";
import AlreadyMember from "../MainPage/memberExist";

const LoginPage = () => {
  return (
    <div>
      <div key={1}>
        <NavBar></NavBar>
      </div>
      <div key={2}>
        <LogoDisplay></LogoDisplay>
      </div>
      <div key={3}>
        <InfoHomePage></InfoHomePage>
        <div className="AlreadyMemberCss">
          <AlreadyMember></AlreadyMember>
        </div>
        <Form></Form>
        <InfoHomePage></InfoHomePage>
      </div>
    </div>
  );
};

export default LoginPage;

// This is the Sign up Form page
