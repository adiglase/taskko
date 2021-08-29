import classes from "./UserProfile.module.css";
import ImgAssets from "../../assets/User";

import { useAuth } from "../../store/AuthContext";

const UserProfile = () => {
  const { currentUser } = useAuth();

  return (
    <div className={classes.container}>
      <img
        src={ImgAssets.defaultProfilePhoto}
        className={classes["profile-img"]}
        alt="user-profile-img"
      />
      <div className={classes["user-name"]}>{ currentUser.displayName }</div>
      <div className={classes["user-email"]}>{ currentUser.email }</div>
    </div>
  );
};

export default UserProfile;
