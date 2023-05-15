import "../ExistingMemberLoginPage/ExistingMemberCss.css";
import Auth from "./Auth";

function LoginMe() {
  return (
    <div className="LoginMe">
      <Auth></Auth>
    </div>
  );
}

export default LoginMe;

// If Existing member, then this is the login Component
// it runs the Auth Command
