import React from 'react';
import closeIcon from "../assets/closeIcon.png";
import styles from "../component_css/buttons.module.css";
import addIcon from "../assets/addIcon.png";
import resetIcon from "../assets/resetIcon.png";

export function Reset(props) {
    const {
        title,
        onClick
    } = props;
  return (
    <div className={styles.reset}>
        <button onClick={onClick}>
            <img src={resetIcon} alt="Reset Icon"/> <p>{title}</p>
        </button>
    </div>
  );
}

export function AddingButton(props) {
    const {
        title,
        onClick
    } = props;
  return (
    <div className={styles.addingButton}>
        <button onClick={onClick}>
            <img src={addIcon} alt="Add Icon"/> <p>{title}</p>
        </button>
    </div>
  );
}

export function Close(props) {
    const {
        title,
        onClick
    } = props;
  return (
    <div className={styles.closeButton}>
        <button onClick={onClick}>
          <img src={closeIcon} alt="Close Icon" />
        </button>
    </div>
  );
}


