import classes from "./Main.module.css";

const Main = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default Main;
