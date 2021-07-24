import ReactDom from "react-dom";
import styles from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
