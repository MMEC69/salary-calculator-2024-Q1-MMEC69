import React from 'react';
import styles from "../component_css/checkbox.module.css";

export function CheckBox(props) {
    const {
        onChange,
        title
    } = props;
  return (
    <div className={styles.checkBox}>
        <input 
            type='checkbox'
            onChange={onChange}
        /><p>{title}</p>
    </div>
  );
}
