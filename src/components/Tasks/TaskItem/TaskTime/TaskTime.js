import classes from "./TaskTime.module.css";

const TaskTime = ({ timeFrom, timeTo}) => {
  return (
    <div className={classes.time}>
      <span className={classes["time-begin"]}>{timeFrom} </span> -{" "}
      <span className={classes["time-end"]}> {timeTo}</span>
    </div>
  );
};

export default TaskTime;
