import classes from "./MobileSidebar.module.css";
import UserProfile from "../UserProfile/UserProfile";
import Navigations from "../Navigations/Navigations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileSidebar = (props) => {
  return (
    <div className={classes["mobile-sidebar"]}>
      <FontAwesomeIcon icon="times-circle" className={classes.icon} onClick={props.onClose}/>
      <UserProfile />
      <Navigations onLogout={props.onLogout}/>
    </div>
  );
};

export default MobileSidebar;
