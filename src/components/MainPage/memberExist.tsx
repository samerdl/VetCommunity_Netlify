import "../ExistingMemberLoginPage/ExistingMemberCss.css";
import { Link } from "react-router-dom";

const AlreadyMember = () => {
  return (
    <div className="existingMemberCssTextDisplay">
      Existing Member?
      <Link to="/ExistingMemberLogin" className="LinkFont">
        Click Here to Login
      </Link>
    </div>
  );
};

export default AlreadyMember;
