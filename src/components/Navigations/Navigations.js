import classes from "./Navigations.module.css";
import NavItem from "./NavItem/NavItem";

const Navigations = (props) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <NavItem icon="list" text="Daily Tasks" active={true} />
        <NavItem icon="calendar-alt" text="Calendar (Coming Soon)" active={false} />
        <NavItem onClick={props.onLogout} icon="sign-out-alt" text="Logout" active={false} />
      </ul>
    </nav>
  );
};

export default Navigations;
