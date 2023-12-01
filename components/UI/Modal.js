import React, { Fragment, useEffect, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

// const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  const [portalElement, setPortalElement] = useState();
  const [domReady, setDomReady] = useState(false);
  useEffect(() => {
    setPortalElement(document.getElementById("overlays"));
    setDomReady(false);
  }, []);

  return (
    <Fragment>
      {portalElement && ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        portalElement
      )}
      {portalElement && ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
