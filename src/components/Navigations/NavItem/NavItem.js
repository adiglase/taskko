import classes from "./NavItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ icon, text, active, onClick }) => {
  return (
    <li onClick={onClick} className={`${classes["nav-item"]} ${active && classes["active"]}`}>
      <FontAwesomeIcon icon={icon} className={classes.icon} />{" "}
      <span className={classes.text}>{text}</span>
    </li>
  );
};

export default NavItem;
