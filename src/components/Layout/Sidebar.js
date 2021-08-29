import UserProfile from "../UserProfile/UserProfile";
import Navigations from "../Navigations/Navigations";
import Header from "../Layout/Header";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <Header>
        <h1>Taskko</h1>
      </Header>
      <UserProfile />
      <Navigations onLogout={props.onLogout}/>
    </div>
  );
};

export default Sidebar;
