import classes from "./NewTask.module.css";
import { useState } from "react";
import Modal from "../../UI/Modal";
import { useAuth } from "../../../store/AuthContext";
import { database } from "../../../firebase/firebase";

const NewTask = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("low");
  const [alerts, setAlerts] = useState([]);

  const { currentUser } = useAuth();

  const handleStartTask = async () => {
    let blankInput = [];

    if (!taskTitle) {
      blankInput.push("title");
    }

    setAlerts(blankInput);

    if (blankInput.length === 0) {
      await database.addTask({
        name: taskTitle,
        uid: currentUser.uid,
        state: "in_progress",
        priority: selectedPriority
      })
    } else {
      return;
    }

    props.onClose();
  };

  return (
    <Modal onConfirm={handleStartTask} onClose={props.onClose}>
      <div className={classes.title}>
        <input
          type="text"
          placeholder="Title..."
          id="title"
          value={taskTitle}
          onInput={(e) => setTaskTitle(e.target.value)}
          className={`${classes["title-input"]} ${
            alerts.includes("title") && classes.alert
          }`}
        />
      </div>
      <div className={classes.priority}>
        <div className={classes["radio-item"]}>
          <input
            type="radio"
            name="priority"
            value="low"
            id="low"
            onChange={(e) => setSelectedPriority(e.target.value)}
            checked={selectedPriority === "low"}
          />
          <label htmlFor="low">Low</label>
        </div>

        <div className={classes["radio-item"]}>
          <input
            type="radio"
            name="priority"
            value="medium"
            id="medium"
            onChange={(e) => setSelectedPriority(e.target.value)}
            checked={selectedPriority === "medium"}
          />
          <label htmlFor="medium">Medium</label>
        </div>

        <div className={classes["radio-item"]}>
          <input
            type="radio"
            name="priority"
            value="high"
            id="high"
            onChange={(e) => setSelectedPriority(e.target.value)}
            checked={selectedPriority === "high"}
          />
          <label htmlFor="high">High</label>
        </div>
      </div>
    </Modal>
  );
};

export default NewTask;
