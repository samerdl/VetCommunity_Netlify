import NavBar from "../MainPage/NavBar";
import LogoDisplay from "../MainPage/Logo";
import InfoHomePage from "../MainPage/InfoHomePage";
import UseEffectAxios from "./UseEffectFetcher";
import "./Fetcher.css";

const AboutPage = () => {
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
        <div className="ourTeamCSS">About our Team and Advocates</div>
        <UseEffectAxios></UseEffectAxios>
      </div>
    </div>
  );
};

export default AboutPage;

// The About Page
