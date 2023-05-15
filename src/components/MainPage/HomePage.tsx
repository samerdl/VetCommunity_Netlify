import NavBar from "./NavBar";
import LogoDisplay from "./Logo";
import InfoHomePage from "./InfoHomePage";
import AlreadyMember from "./memberExist";

const Home = () => {
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
        <AlreadyMember></AlreadyMember>
      </div>
    </div>
  );
};

export default Home;

//The Home Page directory component
