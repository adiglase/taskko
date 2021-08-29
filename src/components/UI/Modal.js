import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./Modal.module.css";

const Overlay = (props) => {
  return (
    <div className={classes.overlay}>
      {props.children}
      <div className={classes.actions}>
        <Button onBtnClick={props.onConfirm} model="primary">Start Task</Button>
        <Button onBtnClick={props.onClose}>Cancel</Button>
      </div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onConfirm={props.onConfirm} onClose={props.onClose}>{props.children}</Overlay>,
        portalEl
      )}
    </>
  );
};

export default Modal;
