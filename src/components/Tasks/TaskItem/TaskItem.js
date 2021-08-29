import Button from "../../UI/Button";
import classes from "./TaskItem.module.css";
import TaskTime from "./TaskTime/TaskTime";
import Tag from "../../UI/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { database } from "../../../firebase/firebase";
import { useState } from "react";

const TaskItem = (props) => {
  const [isLoadMarkDone, setIsLoadMarkDone] = useState(false);

  const handleMarkDone = async (id) => {
    setIsLoadMarkDone(true);
    database.markDoneTask(id)
    setIsLoadMarkDone(false);
  };

  const priority =
    props.priority.charAt(0).toUpperCase() + props.priority.slice(1);
  const state = props.state === "in_progress" ? "In Progress" : "Done";

  return (
    <div className={classes.item}>
      <div>
        <div className={classes.title}>{props.title}</div>
        <TaskTime timeFrom={props.timeFrom} timeTo={props.timeTo} />
      </div>
      <div className={classes["right-side"]}>
        <div className={classes["task-status"]}>{state}</div>
        <div className={classes["action-tags"]}>
          <div className={classes.tags}>
            <Tag priority={props.priority}>{priority}</Tag>
          </div>
          {props.state === "in_progress" && <Button onBtnClick={() => handleMarkDone(props.id)} model="primary">
            {!isLoadMarkDone ? (
              "Mark As Done"
            ) : (
              <FontAwesomeIcon icon="spinner" spin />
            )}
          </Button>}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
