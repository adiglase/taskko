import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./HamburgerButton.module.css";

const HamburgerButton = (props) => {
  return (
    <span className={classes.hamburger} onClick={props.onClick}>
      <FontAwesomeIcon icon="bars" />
    </span>
  );
};

export default HamburgerButton;
